import { aiTrackEvent } from './app-insights-track-event'
import { Address, AddressSubmit } from '_types/local'
import lowerCase from 'lodash/lowerCase'
import startCase from 'lodash/startCase'
import { toNormalised } from 'postcode'

const formatString = (str: string) => startCase(lowerCase(str))

export class PostcodeService {
  static formatAddress = (address: Address) =>
    `${
      address.houseName !== '' ? `${formatString(address.houseName)}, ` : ''
    }${formatString(address.houseNo)} ${formatString(address.streetName)}${
      address.county !== '' ? `, ${formatString(address.county)}` : ''
    }${address.postCode !== '' ? `, ${toNormalised(address.postCode)}` : ''}`

  static setFormAddress = (address: Address, isManualMeta: boolean) => ({
    addressLine1: address.houseNo || address.houseName,
    addressLine2: address.houseName,
    addressLine3: address.streetName,
    addressLine4: address.county,
    postcode: address.postCode,
    manuallyEnteredAddress: isManualMeta,
    mpan: `${address.mpan}`,
  })

  static formatAddressToDisplay = (address: AddressSubmit) =>
    `${address.addressLine1 !== '' ? `${address.addressLine1}, ` : ''}
    ${address.addressLine2 !== '' ? `${address.addressLine2}, ` : ''}
    ${address.addressLine3 !== '' ? `${address.addressLine3}, ` : ''}
    ${address.addressLine4 !== '' ? `${address.addressLine4}, ` : ''}
    ${address.postcode !== '' ? ` ${toNormalised(address.postcode)}` : ''}`

  static validatePostcode(postcode: string) {
    return new RegExp(
      '^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z]) *[0-9][a-zA-Z]{2} *$'
    ).test(postcode)
  }

  static setAddress(address: Address, action: string, registerSearch: boolean) {
    aiTrackEvent({
      name: 'handleAddressPicker set searchedAddress',
      properties: {
        address,
      },
    })

    localStorage.setItem('searchedAddress', JSON.stringify(address))

    const addressForm = JSON.stringify({
      Address: address,
      RedirectURL: action || null,
      registerSearch: registerSearch || null,
    })
  }

  static storerRecentSearch(address: Address) {
    const rawRecentSearches = localStorage.getItem('recentSearches')
    let formatedRecentSearches: Address[] = []
    let isStored = false

    if (rawRecentSearches) {
      formatedRecentSearches = JSON.parse(rawRecentSearches) as Address[]
      isStored = formatedRecentSearches.some(
        (adrs) => address.mpan === adrs.mpan
      )
    }

    if (!isStored) {
      formatedRecentSearches.unshift(address)
      localStorage.setItem(
        'recentSearches',
        JSON.stringify(formatedRecentSearches)
      )
    }
  }

  static formatAddressTextUpdates(address: Address) {
    return `${address.houseNo} ${
      address.houseName !== '' ? `${address.houseName} ` : ''
    }${address.streetName}`
  }

  //Gets postcode from panelContentUrl (ex. '/power-cut/map/aware?postcode=IG117PF' => IG11 7PF)
  static getPostcodeFromUrl = (url?: string) => {
    if (url) {
      const postcode = url.split('postcode=')[1]
      return (
        postcode.slice(0, postcode.length - 3) +
        ' ' +
        postcode.slice(postcode.length - 3, postcode.length)
      )
    }
  }
}

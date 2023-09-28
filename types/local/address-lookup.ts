export interface Address {
  mpan: string
  uprn: number
  proNumber: number
  houseNo: string
  houseName: string
  streetName: string
  county: string
  country: string
  postCode: string
  dno: number
  supplierName: string
  supplierNumber: string
  isInUkpnDno: boolean
}

export interface AddressSubmit {
  addressLine1: string
  addressLine2: string
  addressLine3: string
  addressLine4: string
  mpan: string
  postcode: string
  manuallyEnteredAddress: boolean
}

export interface PostcodeLookUpApi {
  Addresses: Address[]
  Message: string
}

export enum AddressLookUpForm {
  DEFAULT = 'default',
  ALLOW = 'allow',
  MANUAL = 'manual',
  MANUAL_DNO = 'manualDno',
}

export enum DNO {
  EMPTY = '',
  EELC = 'eelc',
  LOND = 'lond',
  SEEB = 'seeb',
  EMEB = 'emeb',
  MANW = 'manw',
  MIDE = 'mide',
  NEEB = 'neeb',
  NORW = 'norw',
  HYDE = 'hyde',
  SPOW = 'spow',
  SOUT = 'sout',
  SWAE = 'swae',
  SWEB = 'sweb',
  YELG = 'yelg',
  LENG = 'leng',
  GUCL = 'gucl',
  ETCL = 'etcl',
  HARL = 'harl',
  IPNL = 'ipnl',
  ISLEOFMAN = 'isleofman',
}

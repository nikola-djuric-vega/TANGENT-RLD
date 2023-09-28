export const setPostcodeInLocalStorage = (postcode: string) => {
  localStorage.setItem('RLDPostcode', JSON.stringify({ postcode }))
}

export const getPostcodeFromLocalStorage = () => {
  const rldPostcode: { postcode: string } = JSON.parse(
    localStorage.getItem(`RLDPostcode`)!
  )
  return rldPostcode
}

export const removePostcodeFromLocalStorage = () => {
  localStorage.removeItem('RLDPostcode')
}

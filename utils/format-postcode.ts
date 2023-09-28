export const formatPostcode = (poscode: string): string => {
  return poscode.replace(/\s+/g, '').toUpperCase()
}

export const formatSearchPostcode = (postcode: string) => {
  let searchPostcode = formatPostcode(postcode)

  if (
    searchPostcode.length === 5 ||
    searchPostcode.length === 6 ||
    searchPostcode.length === 7
  ) {
    const lastPartOfPostcode = searchPostcode.slice(-3)
    searchPostcode = searchPostcode.slice(0, -3) + ' ' + lastPartOfPostcode
    return searchPostcode
  } else {
    return searchPostcode
  }
}

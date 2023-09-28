export const replaceUkpnG81Prefix = (text: string) => {
  const reg = /(<a href="\/ukpn\/)|(<a href="\/g81\/)/gm
  const expected = '<a href="/'
  const result = text?.replace(reg, expected)

  return result
}

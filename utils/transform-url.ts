/*
 * https://ukpn.visualstudio.com/Redwing/_wiki/wikis/Redwing.wiki/119/Routing-multiple-sites-from-the-same-repo
 *
 * Exmaples:
 * Converts "/my/route/" in to "/my/route"
 * Converts "/ukpn/my/route/" in to "/my/route"
 * Converts "/ukpn/" in to "/"
 */

export const transformUrl = (routeUrl: string) => {
  const urlRegex = /^\/*(ukpn|g81)\/*/
  let url = routeUrl

  if (url.match(urlRegex)) {
    url = url.replace(urlRegex, '/')
  }

  if (!url.startsWith('/') && !url.startsWith('http')) {
    url = `/${url}`
  }

  if (url !== '/' && url.endsWith('/')) {
    url = url.substring(0, url.length - 1)
  }

  return url
}

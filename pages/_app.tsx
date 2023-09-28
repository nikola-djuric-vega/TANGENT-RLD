import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { RLDBlobGlobalDataProvider } from '_context/rld-blob-global-data'
import CookieBanner from '_organism/CookieBanner/CookieBanner'
import { parseCookies, setCookie } from 'nookies'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [acceptCookies, setAcceptCookies] = useState(false)

  function handleDeny() {
    setCookie(null, 'cookieResponseRLD', 'false', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    setIsVisible(false)
    setAcceptCookies(false)
  }

  function handleAgree() {
    setCookie(null, 'cookieResponseRLD', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    setIsVisible(false)
    setAcceptCookies(true)
  }

  useEffect(() => {
    const cookies = parseCookies()
    if (
      typeof cookies.cookieResponseRLD === 'undefined' ||
      cookies.cookieResponseRLD === 'false'
    ) {
      setIsVisible(true)
    }
    if (cookies.cookieResponseRLD === 'true') {
      setAcceptCookies(true)
    }
  }, [])

  return (
    <>
      {!!process.env.NEXT_PUBLIC_GTM_ID && acceptCookies && (
        <Script
          id="gtmTag"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
          }}
          strategy="afterInteractive"
        />
      )}
      {!!process.env.NEXT_PUBLIC_RUM_KEY && acceptCookies && (
        <Script
          id="rumScript"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,r,k,h,m){ if(w.performance && w.performance.timing && w.performance.navigation) { w[r] = w[r] || function(){(w[r].q = w[r].q || []).push(arguments)}; h=d.createElement('script');h.async=true;h.setAttribute('src',s+k); d.getElementsByTagName('head')[0].appendChild(h); (m = window.onerror),(window.onerror = function (b, c, d, f, g) { m && m(b, c, d, f, g),g || (g = new Error(b)),(w[r].q = w[r].q || []).push(["captureException",g]);}) } })(window,document,'//static.site24x7rum.eu/beacon/site24x7rum-min.js?appKey=','s247r','${process.env.NEXT_PUBLIC_RUM_KEY}');`,
          }}
          strategy="afterInteractive"
        />
      )}
      <RLDBlobGlobalDataProvider>
        <Component {...pageProps} />
        <CookieBanner
          handleAgree={handleAgree}
          handleDeny={handleDeny}
          visible={isVisible}
        />
      </RLDBlobGlobalDataProvider>
    </>
  )
}

export default MyApp

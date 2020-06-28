// import styles
import '../style/global.scss'

// settings for FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// settings for ga
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
import Router from 'next/router'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

import { ApplicationInsights } from '@microsoft/applicationinsights-web'

export declare global {
  interface Window {
    dataLayer?: any
    gtag?: any
    appInsights?: ApplicationInsights
  }
}

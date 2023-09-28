export interface AiTrackEventParams {
  name: string
  properties: { [key: string]: any }
}

export const aiTrackEvent = ({ name, properties }: AiTrackEventParams) => {
  window.appInsights?.trackEvent({
    name,
    properties,
  })

  // Flush so that the event is sent to AI immediately
  window.appInsights?.flush()
}

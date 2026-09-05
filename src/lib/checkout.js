// Parâmetros de tracking/origem repassados ao checkout — nada além disso (ex: nome, cm_min, cm_max ficam de fora).
const TRACKING_PARAMS_ALLOWLIST = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'src',
  'sck',
  'vtid',
  'gclid',
  'fbclid',
]

export function buildCheckoutUrl(baseUrl) {
  const currentParams = new URLSearchParams(window.location.search)
  const trackingParams = new URLSearchParams()

  for (const key of TRACKING_PARAMS_ALLOWLIST) {
    const value = currentParams.get(key)
    if (value) trackingParams.set(key, value)
  }

  const trackingQuery = trackingParams.toString()
  if (!trackingQuery) return baseUrl

  const separator = baseUrl.includes('?') ? '&' : '?'
  return `${baseUrl}${separator}${trackingQuery}`
}

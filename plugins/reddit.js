export default function () {
  !function (w, d) {
    if (!w.rdt) {
      var p = w.rdt = function () {p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments)}
      p.callQueue = []
      var t = d.createElement('script')
      t.src = 'https://www.redditstatic.com/ads/pixel.js', t.async = !0
      var s = d.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(t, s)
    }
  }(window, document)
  rdt('init', 't2_q1u87k3', {
    'optOut': false,
    'useDecimalCurrencyValues': true,
    'aaid': '<AAID-HERE>',
    'email': '<EMAIL-HERE>',
    'externalId': '<EXTERNAL-ID-HERE>',
    'idfa': '<IDFA-HERE>'
  })
  rdt('track', 'PageVisit')
}

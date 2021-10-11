import fetchJsonp from 'fetch-jsonp'

export default async function GetImg(tag) {
  const endpoint =
    'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' +
    tag +
    '&tagmode=any'

  const result = await fetchJsonp(endpoint, {
    jsonpCallback: 'jsoncallback',
    timeout: 3000,
  })
  return result.json()
}

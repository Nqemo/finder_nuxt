import fetchJsonp from 'fetch-jsonp'
import { config } from '../constants/config'

export default async function GetImg(tag) {
  const endpoint = config.api + '?format=json&tags=' + tag + '&tagmode=any'

  // call the method fetchJsonp and wait to obtain the values
  const result = await fetchJsonp(endpoint, {
    jsonpCallback: 'jsoncallback',
    timeout: 3000,
  })

  // return formatted value
  return result.json()
}

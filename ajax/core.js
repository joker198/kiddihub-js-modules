/**
 * @author joker20
 * Core of ajax module
 */
export default {
  /**
   * Create XHR Object
   * @param {String} method GET | POST | PUT | DELETE
   * @param {String} url
   * @param {Function} success
   * @param {Function} error
   */
  create(method, url, success=null, error=null) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.responseType='json'
    xhr.onload = function () {
      if (xhr.status>=400) error!=null?error(xhr.response):console.log(`Error: ${xhr.status}`)
      else if (success!=null) success(xhr.response)
    }
    return xhr
  }
}
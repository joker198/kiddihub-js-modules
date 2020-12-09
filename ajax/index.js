import core from './core.js'
/**
 * @author joker20
 */
var __Ajax__ = function () {
  /**
   * Make GET request
   * @param {String} url
   * @param {Function} success
   * @param {Function} error
   */
  this.get = function(url, success=null, error=null) {
    let xhr = core.create('GET', url, success, error)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send()
  }
  /**
   * Make POST request
   * @param {String} url
   * @param {*} data
   * @param {Function} success
   * @param {Function} error
   * @param {String} type multipart | json
   */
  this.post = function(url, data={}, success=null, error=null, type='json') {
    let xhr = core.create('POST', url, success, error)
    switch (type) {
      case 'multipart':
        xhr.setRequestHeader('Content-Type', 'multipart/form-data')
        break;
      case 'json':
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        data = JSON.stringify(data)
        break;
    }
    xhr.send(data)
  }
  /**
   * Make PUT request
   * @param {String} url
   * @param {*} data
   * @param {Function} success
   * @param {Function} error
   */
  this.put = function(url, data={}, success=null, error=null) {
    let xhr = core.create('PUT', url, success, error)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send(JSON.stringify(data))
  }
  /**
   * Make DELETE request
   * @param {String} url
   * @param {Function} success
   * @param {Function} error
   */
  this.delete = function(url, success=null, error=null) {
    let xhr = core.create('DELETE', url, success, error)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send()
  }
}
export default __Ajax__
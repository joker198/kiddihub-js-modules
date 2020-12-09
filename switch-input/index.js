/**
 * @param {Element} element
 */
var __SwitchInput__ = function(element) {
  var self = element
  var nipple = document.createElement('span')
  nipple.setAttribute('nipple', '')
  element.appendChild(nipple)
  self.__defineGetter__('nodeName', function () {
    return 'INPUT'
  })
  self.__defineGetter__('type', function () {
    return 'checkbox'
  })
  self.__defineGetter__('name', function () {
    return self.getAttribute('name')
  })
  self.__defineGetter__('checked', function () {
    return self.hasAttribute('checked')
  })
  self.__defineSetter__('checked', function (val) {
    val?self.setAttribute('checked', ''):self.removeAttribute('checked')
  })
  self.__defineGetter__('value', function () {
    return self.getAttribute('value')
  })
  self.__defineSetter__('value', function (val) {
    self.setAttribute('value', val)
  })
  self.addEventListener('click', function() {
    self.checked = !self.checked
    self.dispatchEvent(new Event('input'))
  })
  this.on = function(event, listener) {
    self.addEventListener(event, listener)
  }
}
export default __SwitchInput__
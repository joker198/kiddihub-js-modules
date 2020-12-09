import templates from './templates.js'
/**
 * Render stars input
 * @param {Element} self
 * @param {Number} val
 */
function render(self, val) {
  self.querySelectorAll('[item]').forEach((star, index) => {
    if (index < val) star.classList.add('active')
    else star.classList.remove('active')
  })
}
var __StarInput__ = function (element) {
  var self = element
  self.length = parseInt(self.getAttribute('length'))
  self.value = parseInt(self.getAttribute('value'))
  // 
  self.__defineGetter__('nodeName', function () {
    return 'INPUT'
  })
  self.__defineGetter__('type', function () {
    return 'stars'
  })
  self.__defineGetter__('name', function () {
    return self.getAttribute('name')
  })
  this.__defineGetter__('value', function () {
    return self.value
  })
  this.__defineSetter__('value', function (val) {
    let current_value = self.value
    self.value = val
    render(self, val)
    self.dispatchEvent(new Event('input'))
    if (current_value!=val) self.dispatchEvent(new Event('change'))
  })
  this.__defineGetter__('length', function () {
    return self.length
  })
  //
  for (let i = 0; i < self.length; i++) {
    self.innerHTML += (i < self.value) ? templates.star(true) : templates.star()
  }
  // 
  self.querySelectorAll('[item]').forEach((el, index) => {
    el.addEventListener('mouseover', e => render(self, index + 1))
    el.addEventListener('mouseleave', e => render(self, this.value))
    el.addEventListener('click', e => { this.value = index + 1 })
  })
  this.on = function (event, listener) {
    self.addEventListener(event, listener)
  }
}
export default __StarInput__
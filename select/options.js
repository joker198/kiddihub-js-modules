/**
 * @param {Element} element
 */
var __Options__ = function (element, value) {
  var self = element
  var options = self.querySelectorAll('c-option')
  var selected = {}
  //
  options.forEach(option => {
    option.value = option.getAttribute('value')
    if (option.value==value||option.hasAttribute('selected')) choose(option)
    option.addEventListener('click', function () { choose(this) })
  })
  if (selected.value==undefined) {
    selected = options[0]
    selected.setAttribute('selected', '')
  }
  function choose(option) {
    options.forEach(opt => opt.removeAttribute('selected'))
    option.setAttribute('selected', '')
    self.classList.remove('active')
    selected = option
    self.dispatchEvent(new Event('input'))
  }
  this.show = function () {
    self.classList.add('active')
  }
  this.hide = function () {
    self.classList.remove('active')
  }
  this.toggle = function () {
    self.classList.toggle('active')
  }
  this.__defineGetter__('selected', function () {
    return selected
  })
  this.on = function (event, listener) {
    self.addEventListener(event, listener)
  }
  this.__defineGetter__('options', function () {
    return options
  })
}
export default function (element, value) {
  return new __Options__(element, value)
}
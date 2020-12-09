import Options from './options.js'
/**
 * @author joker20
 * @param {Element} element
 */
var __CSelect__ = function (element) {
  var self = element
  self.value = element.getAttribute('value')
  self.removeAttribute('value')

  self.__defineGetter__('nodeName', function () {
    return 'SELECT'
  })
  self.__defineGetter__('type', function () {
    return 'select-one'
  })
  self.__defineGetter__('name', function () {
    return self.getAttribute('name')
  })
  this.__defineSetter__('value', function (value) {
    self.value = value
  })
  this.__defineGetter__('value', function () {
    return self.value
  })
  this.__defineGetter__('id', function () {
    return self.getAttribute('id')
  })
  //
  var selected = document.createElement('c-selected')
  var list = document.createElement('c-list')
  list.innerHTML = element.innerHTML
  element.innerHTML = ''
  element.appendChild(selected)
  element.appendChild(list)

  var list = Options(element.querySelector('c-list'), self.value)
  // 
  self.value = list.selected.value
  selected.innerHTML = list.selected.innerHTML
  // 
  list.on('input', function () { choose(list.selected) })
  // 
  function choose() {
    let current = self.value
    self.value = list.selected.value
    selected.innerHTML = list.selected.innerHTML
    if (self.value!=current) self.dispatchEvent(new Event('change'))
    self.dispatchEvent(new Event('input'))
  }
  selected.addEventListener('click', function () { list.toggle() })
  this.on = function (event, listener) {
    self.addEventListener(event, listener)
  }
}
export default __CSelect__
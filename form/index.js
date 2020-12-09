import process from './process.js'
/**
 * @author joker20
 * @param {Element} element
 */
var __CForm__ = function(element) {
  var self = element
  var legal_entity = [
    'input', 'select', 'textarea', 'c-select',
    'star-input', 'range-input', 'switch-input'
  ].join(', ')
  //
  if (!form || form.nodeName !== "FORM") throw "Element is not a Form"
  if (self.hasAttribute('prevent')) self.addEventListener('submit', e => e.preventDefault())
  self.__defineGetter__('formdata', function () {
    return new FormData(self)
  })
  self.serialize = () => {
    return this.serialize()
  }
  this.__defineGetter__('formdata', function () {
    return new FormData(self)
  })
  this.serialize = function() {
    let data = {}
    let entities = self.querySelectorAll(legal_entity)
    entities.forEach(function(el) {
      if (el.name=="") return;
      switch (el.nodeName) {
        case 'INPUT':
          process.input(el, data)
          break;
        case 'TEXTAREA':
          process.textarea(el, data)
          break;
        case 'SELECT':
          process.select(el, data)
          break;
      }
    })
    return data
  }
  this.on = function(event, listener) {
    self.addEventListener(event, listener)
  }
}
export default __CForm__
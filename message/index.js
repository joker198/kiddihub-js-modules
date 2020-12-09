/**
 * @author joker20
 * @param {Element} element
 */
var __Message__ = function (element) {
  var self = element
  var titleEl = element.querySelector('[title]')
  var contentEl = element.querySelector('[content]')

  this.__defineSetter__('title', function (title) {
    titleEl.innerText = title
  })
  this.__defineGetter__('title', function () {
    return titleEl.innerText
  })

  this.__defineSetter__('content', function (content) {
    contentEl.innerHTML = content
  })
  this.__defineGetter__('content', function () {
    return contentEl.innerHTML
  })
  
  var _timeout
  this.show = function (timeout=null) {
    if (timeout==null) self.classList.add('show')
    else {
      self.classList.add('show')
      _timeout = setTimeout(() => {
        self.classList.remove('show')
      }, timeout);
    }
  }
  this.hide = function () {
    clearTimeout(_timeout)
    self.classList.remove('show')
  }
}
export default function (element) {
  return new __Message__(element)
}
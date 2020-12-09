/**
 * @author joker20
 * @param {Element} element
 */
var __Element__ = function (element) {
  var self = element
  self.value = element.getAttribute('value')
  /** */
  this.__defineGetter__('value', () => self.value)
  this.__defineSetter__('value', value => self.value = value)
  /** */
  this.__defineGetter__('html', () => self.innerHTML)
  this.__defineSetter__('html', html => self.innerHTML = html)
  /** */
  this.__defineGetter__('text', () => self.innerText)
  this.__defineSetter__('text', text => self.innerText = text)
  /** */
  this.__defineGetter__('id', () => self.getAttribute('id'))
  this.__defineSetter__('id', id => self.setAttribute('id', id))
  /** */
  this.__defineGetter__('name', () => self.getAttribute('name'))
  this.__defineSetter__('name', name => self.setAttribute('name', name))
  /** */
  this.__defineGetter__('href', () => self.getAttribute('href'))
  this.__defineSetter__('href', href => self.setAttribute('href', href))
  /** */
  this.__defineGetter__('raw', () => self)
  /** */
  this.__defineGetter__('class', () => self.classList)
  /** */
  this.__defineGetter__('css', () => self.style)
  /** */
  this.__defineGetter__('parent', () => self.parentElement)
  /** */
  this.__defineGetter__('exist', () => self!=null)
  /**
   * @param {String} selector
   */
  this.first = selector => self.querySelector(selector)
  /**
   * @param {String} selector
   */
  this.find = selector => self.querySelectorAll(selector)
  /**
   * Emit event on element
   * @param {String} event
   * @param {*} data
   */
  this.emit = (event, data = null) => self.dispatchEvent(new CustomEvent(event, {detail: data}))
  /**
   * Listen event on element
   * @param {String} event
   * @param {Function} listener
   */
  this.on = (event, listener) => self.addEventListener(event, e => listener(e, e.detail))
  /**
   * Show element
   * @param {String} display display style
   */
  this.show = (display='block') => self.style.display=display
  /**
   * Toggle element
   * @param {String} display display style
   */
  this.toggle = (display='block') => self.style.display=self.style.display=='none'?display:'none'
  /**
   * Hide element
   */
  this.hide = () => self.style.display='none'
  /**
   * Remove element
   */
  this.remove = () => self.remove()
  /**
   * Get or set attribute of element
   * @param {String} name
   * @param {String} value
   */
  this.attr = (name, value) => {
    return value==undefined?self.getAttribute(name):self.setAttribute(name, value)
  }
  /**
   * Check if element has attribute
   * @param {String} name
   */
  this.hasAttr = name => self.hasAttribute(name)
  /**
   * Remove attribute
   * @param {String} name
   */
  this.rmAttr = name => self.removeAttribute(name)
  /**
   * Check if element has class
   * @param {String} name
   */
  this.hasClass = name => self.classList.contains(name)
  /**
   * Set or access element dataset
   * @param {String} name
   * @param {String} value
   */
  this.data = (name, value) => value==undefined?self.dataset[name]:(self.dataset[name]=value)
  /**
   * Replace current element by new element
   * @param {Element} element
   */
  this.replace = element => self.replaceWith(element)
  /**
   * Append child
   * @param {Element} element
   */
  this.append = element =>self.appendChild(element)
  /**
   * Get bounding rectangle of element
   */
  this.boundingRect = () => self.getBoundingClientRect()
}
export default __Element__

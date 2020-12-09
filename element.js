class __El__ {
  /**
   * @author joker20
   * @param {Element | String} el
   */
  constructor (el) {
    this._el = typeof el=='object'?el:document.querySelector(el)
  }
  get raw () {
    return this._el
  }
  set html (html) {
    this._el.innerHTML = html
  }
  get html () {
    return this._el.innerHTML
  }
  set text (text) {
    this._el.innerText = text
  }
  get text () {
    return this._el.innerText
  }
  set value (value) {
    this._el.value = value
  }
  get value () {
    return this._el.value
  }
  set id(val) {
    this._el.id = val
  }
  get id () {
    return this._el.id==undefined?'':this._el.id
  }
  get name () {
    return this.attr('name')==undefined?'':this.attr('name')
  }
  get parent () {
    return this._el.parentElement
  }
  get exist () {
    return this._el!=null
  }
  get href () {
    return this._el.href
  }
  set href (value) {
    this._el.href = value
  }
  /**
   * Set style attribute
   * @param {String} name style attribute
   * @param {*} value
   */
  css(name, value) {
    this._el.style[name] = value
  }
  /**
   * Get first child element by selector
   * @param {String} selector 
   */
  first (selector) {
    return this._el.querySelector(selector)
  }
  /**
   * Get childs element by selector
   * @param {String} selector 
   */
  find (selector) {
    return this._el.querySelectorAll(selector)
  }
  /**
   * Assign event listener to element
   * @param {String} event
   * @param {Function} listener
   */
  on (event, listener) {
    return this._el.addEventListener(event, listener)
  }
  /**
   * Hide element
   */
  hide () {
    this._el.style.display='none'
  }
  /**
   * Show element
   * @param {String} display display style
   */
  show (display='block') {
    this._el.style.display=display
  }
  /**
   * Toggle element
   * @param {String} display display style
   */
  toggle (display='block') {
    this._el.style.display=this._el.style.display=='none'?display:'none'
  }
  /**
   * Remove element
   */
  remove () {
    this._el.remove()
  }
  /**
   * Set or access element attribute
   * @param {String} name
   * @param {String} value
   */
  attr (name, value=null) {
    if (value==null) return this._el.getAttribute(name)
    this._el.setAttribute(name, value)
  }
  hasAttr (name) {
    return this._el.hasAttribute(name)
  }
  /**
   * Remove attribute
   * @param {String} name 
   */
  rmAttr (name) {
    this._el.removeAttribute(name)
  }
  /**
   * Set or access element dataset
   * @param {String} name 
   * @param {String} value 
   */
  data (name, value=null) {
    if (value==null) return this._el.dataset[name]
    this._el.dataset[name]=value
  }
  /**
   * Add class by name
   * @param {String} name class name
   */
  addClass (name) {
    this._el.classList.add(name)
  }
  /**
   * Remove class by name
   * @param {String} name class name
   */
  removeClass (name) {
    this._el.classList.remove(name)
  }
  /**
   * Toggle class by name
   * @param {String} name class name
   */
  toggleClass (name) {
    this._el.classList.toggle(name)
  }
  /**
   * Check if element class list has a class
   * @param {String} name 
   */
  hasClass (name) {
    return this._el.classList.contains(name)
  }
  /**
   * Change class
   * @param {String} from current class name
   * @param {String} to new class name
   */
  changeClass(from, to) {
    this._el.classList.replace(from, to)
  }
  /**
   * Replace current element by new element
   * @param {Element} el 
   */
  replace (el) {
    this._el.replaceWith(el)
  }
  /**
   * Append child
   * @param {Element} el 
   */
  append (el) {
    this._el.appendChild(el)
  }
  /**
   * Get bounding rectangle of element
   */
  boundingRect () {
    return this._el.getBoundingClientRect()
  }
}

export default function (selector) {
  return new __El__(selector)
}
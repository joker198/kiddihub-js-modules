import $ from '../core.js'
import __Modal__ from './modal.js'
import templates from './templates.js'

const __element = {
  box: {},
  modals: []
}
const __config = {
  delay: 200
}
/**
 * Private methods
 */
const __methods = {
  hide(modal) {
    modal.classList.remove('show')
    setTimeout(function () {
      modal.style.display='none'
      modal.visible = false
      if (modal.visible) modal.dispatchEvent(new Event('hide-modal'))
    }, __config.delay)
  },
  hide_all() {
    __element.modals.forEach(element => {
      element.style.display='none'
      element.classList.remove('show')
      if (element.visible) element.dispatchEvent(new Event('hide-modal'))
    })
    __element.box.show()
  },
  /**
   * 
   * @param {Element} modal 
   */
  show(modal) {
    modal.visible = true
    modal.style.display='block'
    modal.classList.add('show')
    modal.dispatchEvent(new Event('show-modal'))
  }
}
export default {
  get box () {
    return __element.box
  },
  init (lock = false) {
    this.createBox(lock)
    $.find('[modal]').forEach(el => this.create(el))
    return this
  },
  /**
   * Create modal box
   * @param {Boolean} lock
   */
  createBox(lock = false) {
    __element.box = templates.box()
    $.first('body').append(__element.box)

    __element.box.show = function () {
      $.lock()
      this.style.display='flex'
    }
    __element.box.hide = function () {
      $.unlock()
      this.style.display='none'
    }

    if (lock) return true
    $.on(__element.box, 'click', e => { 
      __element.modals.forEach(modal => {
        __methods.hide(modal)
      })
      setTimeout(function () {
        __element.box.hide()
      }, __config.delay)
    })
  },
  create (element) {
    element.remove()
    __element.box.append(element)
    element.__defineGetter__('type', function() {
      return 'modal'
    })
    element.visible = false
    element.show = function () {
      __methods.hide_all()
      __methods.show(element)
    }
    element.hide = function () {
      __methods.hide(element)
      this.classList.remove('show')
      setTimeout(() => {
        __element.box.hide()
      }, __config.delay)
    }

    $.find('[close]', element).forEach(act => {
      $.on(act, 'click', e => element.hide())
    })
    $.on(element, 'click', e => e.stopPropagation())

    __element.modals.push(element)
  },
  /**
   * Show modal
   * @param {String} selector
   */
  show (selector) {
    $.first(selector).show()
  },
  /**
   * Hide modal
   * @param {String} selector 
   */
  hide (selector) {
    $.first(selector).hide()
  }
}

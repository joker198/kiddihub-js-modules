import templates from './templates.js'
/**
 * @author joker20
 * @param {Number} delay in seconds
 * @param {Boolean} lock
 */
var __ModalBox__ = function (delay, lock = false) {
  var self = templates.box()
  $.first('body').appendChild(self)
  self = $(self)
  var modals = []

  this.__defineGetter__('modals', () => modals)
  this.__defineGetter__('lock', () => _lock)
  this.__defineSetter__('lock', value => {
    if (!value) {
      self.raw.onclick = () => {
        modals.forEach(modal => modal.hide())
        setTimeout(() => this.hide(), delay)
      }
    } else {
      self.raw.onclick = () => true
    }
  })

  this.show = () => {
    self.show('flex')
    $.lock()
  }
  this.hide = () => {
    self.hide()
    $.unlock()
  }
  /**
   * Append Modal
   * @param {__Modal__} modal
   */
  this.append = modal => {
    modal.raw.remove()
    self.append(modal.raw)
    modals.push(modal.raw)
  }
  if (!lock) {
    self.raw.onclick = () => {
      modals.forEach(modal => modal.hide())
      setTimeout(() => this.hide(), delay)
    }
  } else {
    self.raw.onclick = () => true
  }
}
export default __ModalBox__

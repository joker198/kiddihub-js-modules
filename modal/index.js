import $ from '../core.js'
import Modal from './modal.js'
import ModalBox from './modal-box.js'

var modal_box;
const __config = {
  delay: 200
}
export default {
  get delay() {
    return __config.delay
  },
  set lock(value) {
    modal_box.lock = value
  },
  init(lock = false) {
    modal_box = new ModalBox(this.delay, lock)
    $.find('[modal]').forEach(el => {
      modal_box.append(new Modal(el, this.delay, modal_box))
    })
    return this
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
  },
  /**
   * @param {Element} element
   */
  create (element) {
    modal_box.append(new Modal(element, this.delay, modal_box))
  }
}
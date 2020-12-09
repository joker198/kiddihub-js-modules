import _Query from './core.js'
import CForm from './form/index.js'
import _Validate from './validate/index.js'
import StarInput from './star-input/index.js'
import RangeInput from './range-input/index.js'
import _Step from './steps/index.js'
import CSelect from './select/index.js'
import Message from './message/index.js'
import Ajax from './ajax/index.js'
import Gallary from './gallary/index.js'
import SwitchInput from './switch-input/index.js'
import _Modal from './modal/index.js'
import CheckInput from './check-input/index.js'

window.ajax = new Ajax()
window.$ = _Query
window.$_BODY = $.first('body')
window._Validate = _Validate
window.forms = []
window.$modal = _Modal.init()

$.find('form').forEach(form => {
  forms.push(new CForm(form))
})

window.star_input = new StarInput($.first('star-input'))

$.find('range-input').forEach(el => {
  new RangeInput(el)
})
$.find('check-input').forEach(el => {
  new CheckInput(el)
})
window.steps = new _Step($.first('.steps-contain'))

window.cselect = new CSelect($.first('c-select'))

window.$message = new Message($.first('[message]'))

$.find('switch-input').forEach(el => {
  let input = new SwitchInput(el)
})

window.gallary = new Gallary(document.querySelector('.gallary'))

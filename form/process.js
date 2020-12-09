/**
 * @author joker20
 * Form data entinies process module
 */
export default {
  /**
   * Get value from input to obj
   * @param {Element} el
   * @param {Object} obj 
   */
  input(el, obj) {
    switch (el.type) {
      case 'text':
      case 'hidden':
      case 'password':
      case 'email':
      case 'date':
      case 'url':
      case 'tel':
      case 'week':
      case 'time':
      case 'month':
      case 'range':
      case 'search':
      case 'number':
      case 'stars':
      case 'datetime-local':
      case 'color':
        obj[el.name] = el.value;
        break;
      case 'checkbox':
      case 'radio':
        if (el.checked) obj[el.name] = el.value
        break;
      case 'file':
        break;
      }
  },
  /**
   * Get value from textarea to obj
   * @param {Element} el
   * @param {Object} obj 
   */
  textarea(el, obj) {
    obj[el.name] = el.value
  },
  /**
   * Get value from select to obj
   * @param {Element} el
   * @param {Object} obj 
   */
  select(el, obj) {
    switch (el.type) {
      case 'select-one':
          obj[el.name] = el.value
        break;
      case 'select-multiple':
          el.options.forEach(option => {
            if (option.selected) obj[el.name] = option.value
          })
          break;
      }
  }
}
import rules from './rules.js'
/**
 * Validator module
 * @author joker20
 */
export default {
  /**
   * Check if string is email
   * @param {String} str
   * @return Boolean
   */
  email(str) {
    return (str=="")?false:rules.email.test(str)
  },
  /**
   * Check if string is phone
   * @param {String} str
   * @return Boolean
   */
  phone(str) {
    return (str=="")?false:rules.phone.test(str)
  },
  /**
   * Check if string is url
   * @param {String} str
   * @return Boolean
   */
  url(str) {
    return (str=="")?false:rules.url.test(str)
  }
}
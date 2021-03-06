import { Directive } from 'vue'

const vFocus: Directive = {
  mounted(el: HTMLElement) {
    el.focus && el.focus()
  },
  updated(el: HTMLElement) {
    el.focus && el.focus()
  }
}
export default vFocus

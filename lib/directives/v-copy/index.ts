import { Directive } from 'vue'

let clickHandler: () => void

const copyHandler = (value: string): void => {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      window.alert('Copy successful')
    })
    .catch(() => {
      window.alert('Copy failed')
    })
}

const vCopy: Directive = {
  mounted(el, binding) {
    clickHandler = () => {
      copyHandler(binding.value)
    }
    el.addEventListener('click', clickHandler)
  },
  updated(el, binding) {
    el.removeEventListener('click', clickHandler)
    clickHandler = () => {
      copyHandler(binding.value)
    }
    el.addEventListener('click', clickHandler)
  }
}
export default vCopy

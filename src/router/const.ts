import vCopy from '../pages/v-copy/index.vue'
import vFocus from '../pages/v-focus/index.vue'
import vDebounce from '../pages/v-debounce/index.vue'
import vLongPress from '../pages/v-longpress/index.vue'
import vLoading from '../pages/v-loading/index.vue'
import Readme from '../pages/readme/index.vue'
import vImgLazyLoad from '../pages/v-imglazyload/index.vue'

export default [
  { path: '/', component: Readme, name: 'Readme' },
  { path: '/copy', component: vCopy, name: 'v-copy' },
  { path: '/focus', component: vFocus, name: 'v-focus' },
  { path: '/debounce', component: vDebounce, name: 'v-debounce' },
  { path: '/longpress', component: vLongPress, name: 'v-longpress' },
  { path: '/loading', component: vLoading, name: 'v-loading' },
  { path: '/imglazyload', component: vImgLazyLoad, name: 'v-imglazyload' }
]
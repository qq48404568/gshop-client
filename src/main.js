import Vue from 'vue'
import {Button} from 'mint-ui';
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer'; //加载mockServer即可

Vue.config.productionTip = false
const loadimage = require('./common/imgs/loading.gif')
Vue.component(Button.name,Button) // <mt-button>
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: errorimage,
  loading: loadimage,
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

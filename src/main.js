import Vue from 'vue'
import {Button} from 'mint-ui';
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component(Button.name,Button) // <mt-button>
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

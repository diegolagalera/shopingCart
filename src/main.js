import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import utils from '@/utils'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$utils = utils // this.$utils


new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

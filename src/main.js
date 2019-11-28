import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
import '@mdi/font/css/materialdesignicons.css'
import ElementUI from 'element-ui'
import GAuth from 'vue-google-oauth2'
import 'element-ui/lib/theme-chalk/index.css'
import PrettyCheckbox from 'pretty-checkbox-vue'
import VModal from 'vue-js-modal'
import firebase from 'firebase'
Vue.config.productionTip = false
const config = {
  apiKey: '',
  authDomain: 'wasay.site',
  databasrURL: '',
  projectID: '149578749039-8ki9dmmfnod66fl59hd6mduedr3rvre3.apps.googleusercontent.com',
  storageBucket: '',
  messagingSenderId: ''
}
firebase.initializeApp(config)
const AuthOption = {
  clientId: '149578749039-8ki9dmmfnod66fl59hd6mduedr3rvre3.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(VModal)
Vue.use(GAuth, AuthOption)
Vue.use(PrettyCheckbox)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

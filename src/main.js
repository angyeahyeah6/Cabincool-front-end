import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
import '@mdi/font/css/materialdesignicons.css'
import ElementUI from 'element-ui'
// import GAuth from 'vue-google-oauth2'
import 'element-ui/lib/theme-chalk/index.css'
import PrettyCheckbox from 'pretty-checkbox-vue'
import VModal from 'vue-js-modal'
import firebase from 'firebase'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false
const config = {
  apiKey: 'AIzaSyCe5K3yJqXFwF-TOQbPx62naQHQaZLWf8Q',
  authDomain: 'ntu-db.firebaseapp.com',
  databaseURL: 'https://ntu-db.firebaseio.com',
  projectId: 'ntu-db',
  storageBucket: 'ntu-db.appspot.com',
  messagingSenderId: '342761563926',
  appId: '1:342761563926:web:00daddc583417999af9237',
  measurementId: 'G-J7Q9QXZCT8'
}
firebase.initializeApp(config)
firebase.analytics()
Vue.use(VModal)

Vue.use(PrettyCheckbox)
Vue.use(ElementUI)
Vue.config.productionTip = false

// global variable
Vue.prototype.$questions = []
Vue.prototype.$search = ''

// chat area

// o誒誒你這邊會跳錯 不能這樣寫

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

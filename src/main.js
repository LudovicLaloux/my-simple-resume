import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import messages from "./plugins/messages"
import VueI18n from "vue-i18n"

Vue.config.productionTip = false
Vue.use(VueI18n)

// internationalization module, used to translate the app
const i18n = new VueI18n({
  locale: "fr", // default local
  messages
})

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

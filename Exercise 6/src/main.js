import Vue from 'vue'
import App from './App.vue'

import Header from './Components/Shared/Header.vue'
import Servers from './Components/Server/Servers.vue'
import Footer from './Components/Shared/Footer.vue'

Vue.component('app-header', Header);
Vue.component('app-servers', Servers);
Vue.component('app-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})

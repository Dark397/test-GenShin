import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';
axios.interceptors.request.use(config => {
    config.headers.Authorzation = window.sessionStorage.getItem('token');
    return config
})

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
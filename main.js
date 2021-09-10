import Vue from 'vue'
import App from './App'
import ccUI from 'cc-ui-uni-app'
import store from './store/index.js'
import bus from './bus/index.js'
import utils from 'utils/util.js'
import io from '@hyoga/uni-socket.io'


const socket = io('http://localhost:3000', {
  query: {},
  transports: [ 'websocket', 'polling' ],
  timeout: 5000,
});

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$bus = bus
Vue.prototype.$utils=utils
Vue.prototype.$socket=socket

Vue.use(ccUI)
App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()

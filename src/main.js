import Vue from 'vue'
import App from './App.vue'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import getHotels from './api/getHotels'

window.getHotels = getHotels
window.hotelOptions = {
  checkinDate: '2020-12-01',
  checkoutDate: '2020-12-02',
  latitude: 34.7024898,
  longitude: 135.4937619,
  adultNum: 3,
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

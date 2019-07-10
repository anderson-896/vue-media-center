// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vTinySlider from 'vue-tiny-slider'

Vue.config.productionTip = false
const VueTinySlider = {
  install(Vue, options) {
    Vue.component('VueTinySlider', vTinySlider)
  }
}
Vue.use(VueTinySlider);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

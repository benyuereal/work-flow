// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import  'element-ui/lib/theme-chalk/index.css'
import '../static/css/common.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)
Vue.use(iView);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

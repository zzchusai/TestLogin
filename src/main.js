// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'summernote'
import 'summernote/dist/lang/summernote-zh-CN'
import 'summernote/dist/summernote.css'
import "element-ui/lib/theme-chalk/index.css";
// import VueResource from 'vue-resource';

import Message from 'element-ui';

import reg from './components/common/reg';
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(VueResource);
let $http=axios.create({});
Vue.prototype.$http=$http;
Vue.prototype.Host='/api'
Vue.prototype.axios=axios;

Vue.prototype.reg = reg;
Vue.prototype.Message = Message;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

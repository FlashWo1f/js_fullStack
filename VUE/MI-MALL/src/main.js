// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Search } from 'vant';
import { Tab, Tabs } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tab).use(Tabs);
Vue.use(Search);

Vue.config.productionTip = false
Vue.prototype.$http = axios // 将axios挂载到vue的原型链上
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

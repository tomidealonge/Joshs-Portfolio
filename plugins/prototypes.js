import Vue from 'vue'

import Splitting from 'splitting'
import VueToast from 'vue-toast-notification'

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

import 'vue-toast-notification/dist/theme-default.css'

Splitting()
// import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast)
Vue.prototype.$splitting = Splitting

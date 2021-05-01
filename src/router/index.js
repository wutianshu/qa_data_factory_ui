import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Order from '../page/order'
import Tools from '../page/tools'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '', redirect: HelloWorld},
    {path: '', name: 'Order', component: Order},
    {path: '/order', name: 'Order', component: Order},
    {path: '/tools', name: 'Tools', component: Tools}
  ]
})

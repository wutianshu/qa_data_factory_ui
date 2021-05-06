import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Security from '../page/security '
import Tools from '../page/tools'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '', redirect: HelloWorld},
    {path: '', name: 'Order', component: Security},
    {path: '/security', name: 'Order', component: Security},
    {path: '/tools', name: 'Tools', component: Tools}
  ]
})

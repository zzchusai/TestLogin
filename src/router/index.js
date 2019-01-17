import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        redirect:'/login'
      },{
        path:'/',
        component:resolve=>require(['../components/login.vue'],resolve)
      }, {
        path: '/login',//登录
        component: resolve => require(['../components/login.vue'], resolve)
      }
    ]
})

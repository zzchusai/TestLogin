import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router= new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        redirect:'/login'
      },{
        path:'/home',
        component:resolve=>require(['../components/home.vue'],resolve),
        children:[
          {
            path:'/userList',
            component:resolve=>require(['../components/pages/userList.vue'],resolve),
            // meta:{
            //   keepAlive=true
            // }
          },
          {
            path:'/userDetails',
            component:resolve=>require(['../components/pages/userDetails.vue'],resolve),
            // meta:{
            //   keepAlive:false
            // }
          }
        ]
      },
      {
        path: '/login',//登录
        component: resolve => require(['../components/login.vue'], resolve)
      }
    ]
})

router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    next()
  }else{
    let access_token = localStorage.getItem('access-token');
    if(access_token==null||access_token==''){
      next('/login')
    }else{
      next()
    }
  }
})

export default router;

import Vue from 'vue'
import Router from 'vue-router'
import register from './views/register.vue'
import index from './views/index.vue'
import notfound from './views/404.vue'
import login from './views/login.vue'
import Home from './views/Home.vue'
import infoshow from './views/infoshow.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'/home',
          name:'home',
          component:Home
        },
        {
        path:'infoshow',
        name:'infoshow',
        component:infoshow
        }
      ]

    },
    {
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path:'*',
      name:'notfound',
      component: notfound
    }
  ]
});
// router.beforeEach((to,from,next)=>{
//     const islogin = localStorage.eleToken ? true :false;
//     if(to.path == "/login"|| to.path == "/register"){
//       next();
//     }else{
//       islogin ? next() :next('/login');
//     }   
// })
export default  router; 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 引入路由文件
// import Main from '@/components/Main.vue'
import General from '@/views/home/General.vue'
import Boss from "@/views/boss/Boss.vue"
import Indent from '@/views/indent/Indent.vue'
import Login from "@/components/Login.vue"
import Product from '@/views/product/Product.vue'

// 创建所需路由
const router = new VueRouter({
    routes: [
        {
            path:"/general",
            component:General 
        },
        // 重定向
        {
            path:"/",
            redirect:"/general"
            
        },
        {
            path: '/indent',
            component: Indent
        },
        {
            path: '/boss',
            component: Boss
        },
        {
            path:"/product",
            component:Product
        },
        {
            path:"/login",
            components:{
                login:Login
            }
        },
            
    ]
})

// 登录拦截
router.beforeEach((to, from, next)=>{
    if (to.path === '/login') {
      console.log('未登录')
      next()
    } else {
      let res = localStorage.getItem('login')
      if (res && JSON.parse(res).isLogin) {
        next()
      } else {
        next('/login')
      }
      console.log('已登录')
    }
  })

// 抛出路由
export default router;

import Vue from 'vue'
import Router from 'vue-router'
import Main from '../Main.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'home',
          component: resolve => require(['../pages/home.vue'], resolve)
        }
      ],
      redirect: '/home'
    }
  ]
})

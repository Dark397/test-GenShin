import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Home from '@/views/home/home.vue'
import Role from '@/views/role/role.vue'
import News from '@/views/news/news.vue'
Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/Role',
            component: Role
        },
        {
            path: '/News',
            component: News
        }
    ],

    //跳转页面后置顶
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
})
export default router
router.beforeEach((to, from, next) => {
    /* 路由发生变化时修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
import { createRouter, createWebHistory } from 'vue-router';
import home from '../components/home.vue';
import my from '../components/my.vue';
import index from '../components/index.vue';
import userinfo from '../components/userinfo.vue';
import order from '../components/order.vue';
import orderdetail from '../components/orderdetail.vue';

const routerHistory = createWebHistory("#")
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name:"index",
            component: index
        },
        {
            path: '/userinfo',
            name:"userinfo",
            component: userinfo
            
        },
        {
            path: '/order',
            name:"order",
            component: order
            
        },
        {
            path: '/order/detail',
            name:"orderdetail",
            component: orderdetail
            
        },
        {
            path: '/my',
            name:"my",
            component: my
        }
    ]
  })
  export default router

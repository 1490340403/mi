import Vue from 'vue'
import Router from 'vue-router'
//import Index from './page/index.vue'
//import Home from './page/home.vue'
//import Detail from './page/detail.vue'
//import Product from './page/product.vue'
//import Cart from './page/cart.vue'
// import Order from './page/order.vue'
//import OrderConfirm from './page/orderConfirm.vue'
//import OrderList from './page/list.vue'
//import OrderPay from './page/orderPay.vue'
//import Apipay from './page/alipay.vue'
//import Login from './page/login.vue'
Vue.use(Router)
export default new Router({
   routes:[{
       path:'/',
       name:'home',
       component:()=>import('./page/home.vue'),
       redirect:'/index',
       children:[{
           path:'/index',
           name:'Index',
           component:()=>import('./page/index.vue')
       },{
            path:'/detail/:id',
            name:'Detail',
            component:()=>import('./page/detail.vue')
       },{
            path:'/product/:id',
            name:'Product',
            component:()=>import('./page/product.vue')
       }
    ]
   },{
       path:'/order',
       name:'Order',
       component:()=>import('./page/order.vue'),
       redirect:'/order/cart',
       children:[{
            path:'cart',
            name:"Cart",
            component:()=>import('./page/cart.vue')
        },{
           path:"confirm",
           name:'OrderConfirm',
           component:()=>import('./page/orderConfirm.vue')
       },{
           path:'pay',
           name:'OrderPay',
           component:()=>import('./page/orderPay.vue')
       },{
           path:'apipay',
           name:"Apipay",
           component:()=>import('./page/alipay.vue')
       },{
           path:'list',
           name:'List',
           component:()=>import('./page/list.vue')
       }]
   },{
       path:'/login',
       name:'login',
       component:()=>import('./page/login.vue')
   }
]
})


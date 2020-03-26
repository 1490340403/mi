import Vue from 'vue'
import Router from 'vue-router'
import Index from './page/index.vue'
import Home from './page/home.vue'
import Detail from './page/detail.vue'
import Product from './page/product.vue'
import Cart from './page/cart.vue'
 import Order from './page/order.vue'
import OrderConfirm from './page/orderConfirm.vue'
import OrderList from './page/orderList.vue'
import OrderPay from './page/orderPay.vue'
import Apipay from './page/alipay.vue'
import Login from './page/login.vue'
Vue.use(Router)
export default new Router({
   routes:[{
       path:'/',
       name:'home',
       component:Home,
       redirect:'/index',
       children:[{
           path:'/index',
           name:'Index',
           component:Index
       },{
            path:'/detail/:id',
            name:'Detail',
            component:Detail
       },{
            path:'/product/:id',
            name:'Product',
            component:Product
       }
    ]
   },{
       path:'/order',
       name:'Order',
       component:Order,
       children:[{
           path:'list',
           name:'OrderList',
           component:OrderList,
       },{
           path:"confirm",
           name:'OrderConfirm',
           component:OrderConfirm
       },{
           path:'pay',
           name:'OrderPay',
           component:OrderPay
       },{
           path:'apipay',
           name:"Apipay",
           component:Apipay
       },{
        path:'cart',
        name:"Cart",
        component:Cart
    }]
   },{
       path:'/login',
       name:'login',
       component:Login
   }
]
})


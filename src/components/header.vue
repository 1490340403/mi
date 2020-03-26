<template>
    <div class="header-container">
        <div class="header-box">
            <div class="nav-header">
                <div class="header-left">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="header-right">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <!-- <a href="javascript:;"></a> -->
                    <a href="javascript:;" v-if="username">退出</a>
                    <a href="javascript:;" v-if="!username" @click="goLogin">登陆</a>
                    <a href="javascript:;" v-if="username" @click="goOrderList">我的订单</a>
                    <a href="javascript:;" class="cart" @click="goCart">
                        <span class="icon-cart"></span>
                        购物车(0)
                    </a>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="logo">
                <div class="logoLeft"></div>
            </div>
            <div class="nav-list">
                <div class="menu-item">
                    <a href="javascript:;">小米手机</a>
                    <ul class="children"> 
                        <li v-for="(item,index) in phoneList" :key="index">
                            <img :src="item.mainImage">
                            <div class="name">{{item.name}}</div>
                            <div class="price">{{item.price| moneyFormat}}</div>
                        </li>
                    </ul>
                    
                </div>
                <div class="menu-item">
                    <a href="javascript:;">RedMi红米</a>
                </div>
                <div class="menu-item">
                    <a href="javascript:;">电视</a>
                </div>
            </div>
            <div class="search">
                <input type="text"/>
                <a href="javascript:;"></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phoneList:[],
            username:'8'
        }
    },
    created(){
        this.getProductList()
    },
    filters: {
                moneyFormat(val) {
                     if(!val)return '0.00';
                    return '￥' + val.toFixed(2) + '元';
                }
            },
    methods:{
        getProductList(){
            this.axios.get('/products',{
            params:{
                categoryId:'100012',
                pageSize:6
            }
            }).then((res)=>{
                this.phoneList = res.list;
            })
        },
        goOrderList(){
            this.$router.push('/order/list')
        },
        goLogin(){
            this.$router.push('/login')
        },
        goCart(){
            this.$router.push('/order/cart')
        }
    }
}
</script>
<style scoped lang="scss">
.header-container{
    width:100%; 
    .header-box{
        width:100%;
        background:#333;
        .nav-header{
        height:39px;
        width: 1226px;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        a{
            font-size: 12px;
            color:#b0b0b0;
            display: inline-block;
            margin-right:17px ;
            height:39px;
            line-height:39px;
            &:hover{
                color:#fff;
            }
            &.cart{
                width: 110px;
                background-color: #f60;
                text-align: center;
                color: #fff;
                margin-right: 0;
                .icon-cart{
                    display: inline-block;
                    width:16px;
                    height:12px;
                    background:url('/imgs/icon-cart-checked.png') no-repeat center;
                    background-size:contain;
                }
            }
        }
    }
}
    .header{
        width:1226px;
        height: 112px;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .logo{
            width:55px;
            background:#f60;
            .logoLeft{
                width:110px;
                height:55px;
                transition: margin 0.3s;
                &:hover{
                        margin-left:-55px;
                    }
                &:before{
                    content:'';
                    display: inline-block;
                    width:55px;
                    height:55px;
                    background:url('/imgs/mi-logo.png') no-repeat 50%;
                    background-size: contain;
                }
                &:after{
                    content:'';
                    display: inline-block;
                    width:55px;
                    height:55px;
                    background:url('/imgs/mi-home.png') no-repeat 50%;
                    background-size: contain;
                }
            }
        }
        .nav-list{
            display: flex;
            width: 643px;
            padding-left: 209px;
            .menu-item{
                display: inline-block;
                color: #333;
                font-weight: 700;
                font-size: 16px;
                line-height: 112px;
                margin-right: 20px;
                &:hover{
                    a{
                        color:#f60;
                    }
                    .children{
                        opacity: 1;
                        height: 220px;
                    }
                }
                a{
                    color:#333;
                    font-weight: bold;
               }
               .children{
                   height: 0;
                   width:1226px;
                   border:1px solid #ccc;
                   display: flex;
                   position: absolute;
                   top:112px;
                   left: 0px;
                   z-index: 10;
                   opacity: 0;
                   transition: all .3s;
                   overflow: hidden;
                   li{
                       position: relative;
                       flex:1;
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       img{
                           height:110px;
                           width:auto;
                           margin: 30px 0 30px;
                       }
                       .name{
                           font-size:12px;
                           color:#333;
                           line-height: 12px;
                           margin-bottom:10px;
                       }
                       .price{
                            font-size:12px;
                            color:#f60;
                            line-height: 12px;
                       }
                       &:after{
                            content: " ";
                            position: absolute;
                            top: 28px;
                            right: 0;
                            border-left: 1px solid #d7d7d7;
                            height: 100px;
                            width: 1px;
                       }
                       &:last-child:after{
                        border:none;
                       }
                   }
               }
            }
        }
        .search{
            width:319px;
            height:50px;
            line-height:50px;
            border: 1px solid #e0e0e0;
            input{
                border:none;
                box-sizing: border-box;
                border-right: 1px solid #e0e0e0;
                width: 264px;
                height: 50px;
                padding-left: 14px;
            }
            a{
                display: inline-block;
                width:18px;
                height: 18px;
                margin-left: 16px;
                background:url('/imgs/icon-search.png') no-repeat 50%;
                background-size:18px;
            }
        }
    }
}
</style>
<template>
    <div class="container">
        <div class="bannerBox">
            <div class="nav-menu">
                <ul class="menu-wrap">
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                        <div class="children">
                            <ul>
                                <li v-for="(item,index) in smallList" :key="index" @click="goDetail(item.id)">
                                    <a href="javascript:;">
                                        <img :src="item.img" alt=""> 
                                        {{item.title}}
                                     </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                    </li>
                </ul>
            </div>
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(item,index) in slideList" :key="index" @click="goDetail(item.id)">
                <img :src="item.img"/>
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <ul class="ads">
            <li v-for="(item,index) in adsList" :key="index" @click="goDetail(item.id)">
                <img :src="item.img"/>
            </li>
        </ul>
        <div class="banner" @click="goDetail(30)">
            <img src="/imgs/banner-1.png"/>
        </div>
        <div class="contentBox">
            <h2>手机</h2>
            <div class="content">
                <div class="content-left" @click="goDetail(35)">
                    <img src="/imgs/mix-alpha.jpg"/>
                </div>
                <div class="content-right">
                    <ul>
                        <li v-for="(item,index) in phoneList" :key="index">
                            <img :src="item.mainImage"/>
                            <div class="name">{{item.name}}</div>
                            <div class="subtitle">{{item.subtitle}}</div>
                            <div class="price" @clicl="addCar(item.id)">{{item.price}}元</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <service/>
    </div>
</template>
<script>

import Service from '../components/service.vue'
export default {
  components:{
    Service
  },
  mounted(){

  },
  created(){
  //     console.log(this,90)
  // this.axios.get('/mock/user/login.json').then(res=>{
  //   console.log(res)
  // })
  // this.axios.post('/user/login1').then(res=>{
  //     console.log(res)
  // })
  // this.axios.get('/user/login').then(res=>{
  //     console.log(res)
  // })
  this.init()
},
 methods:{
     goDetail(id){
         this.$router.push('/detail/'+id)
     },
     init(){
          this.axios.get('/products',{
            params:{
                categoryId:100012,
                pageSize:14
            }
            }).then((res)=>{
            res.list = res.list.slice(6,14);
            this.phoneList = [...res.list.slice(0,4),...res.list.slice(4,8)];
        })
     },
     addCar(){
         
     }
 },

 data() {
      return {
        swiperOption: {
          autoplay:true,
          loop : true,
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
         slideList:[
          {
            id:'42',
            img:'/imgs/slider/slide-1.jpg'
          },
          {
            id:'45',
            img:'/imgs/slider/slide-2.jpg'
          },
          {
            id:'46',
            img:'/imgs/slider/slide-3.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-4.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-1.jpg'
          }
        ],
        smallList:[
            {
                id:30,
                title:'小米CC9',
                img:'/imgs/item-box-1.png'
            },
               {
                id:31,
                title:'小米CC9',
                img:'/imgs/item-box-2.png'
            },
               {
                id:32,
                title:'Redmi K20 Pro',
                img:'/imgs/item-box-3.jpg'
            },
               {
                id:33,
                title:'移动4G专区',
                img:'/imgs/item-box-4.jpg'
            }, {
                id:30,
                title:'小米CC9',
                img:'/imgs/item-box-1.png'
            },
               {
                id:31,
                title:'小米CC9',
                img:'/imgs/item-box-2.png'
            },
               {
                id:32,
                title:'Redmi K20 Pro',
                img:'/imgs/item-box-3.jpg'
            },
               {
                id:33,
                title:'移动4G专区',
                img:'/imgs/item-box-4.jpg'
            },
        ],
        adsList:[
          {
            id:33,
            img:'/imgs/ads/ads-1.png'
          },{
            id:48,
            img:'/imgs/ads/ads-2.jpg'
          },{
            id:45,
            img:'/imgs/ads/ads-3.png'
          },{
            id:47,
            img:'/imgs/ads/ads-4.jpg'
          }
        ],
        phoneList:[]
      }
    }
}
</script>
<style scoped lang="scss">
.container{
  width:1226px;
  margin:0 auto;
  .bannerBox{
    width:100%;
    position: relative;
    .nav-menu{
        position:absolute;
        width:264px;
        height:451px;
        box-sizing: border-box;
        left:0;
        top:0;
        z-index: 9;
        background-color: rgba(85,88,90,.48);
        padding:26px 0;
        .menu-wrap{
            .menu-item{
                line-height: 50px;
                color:#fff;
                &:hover{
                    background:orangered;
                    .children{
                        display: block;
                    }
                }
                a{
                    color:#fff;
                    display: block;
                    padding-left:30px;
                    position: relative;
                    &:after{
                            position: absolute;
                            right: 30px;
                            top: 17.5px;
                            content: " ";
                            display: inline-block;
                            width: 10px;
                            height: 15px;
                            background: url(/imgs/icon-arrow.png) no-repeat 50%;
                            background-size: contain;
                    }
                }
                .children{
                    position: absolute;
                    left:264px;
                    width:980px;
                    top:0;
                    height:451px;
                    background:#fff;
                    z-index: 9;
                    display: none;
                    ul{
                        width:100%;
                        display: flex;
                        flex-wrap:wrap;
                        overflow: hidden;
                        li{
                            width:25%;
                             
                             margin-bottom:20px;
                            a{
                                width:100%;
                                color:#333;
                                img{
                                    width:80px;
                                    height:80px;
                                    vertical-align: middle;
                                    margin-right:10px;
                                }
                            }
                            
                        }
                    }
                }
            }
        }
    }
    .swiper-container {
        height: 451px;
        .swiper-button-prev{
            left:274px;
        }
        img{
            width:100%;
            height:100%;
        }
    }
  }
  .ads{
      width:100%;
      display: flex;
      margin:20px 0;
      li{
          width: 296px;
          height: 167px;
          margin-right:14px;
          &:last-child{
              margin-right:0;
          }
          img{
              width: 296px;
              height: 167px;
          }
      }
  }
  .banner{
      width:100%;
      height: 130x;
      margin:20px 0;
      img{
          width:100%;
          height:100px;
      }
  }
  .contentBox{
      .content{
          display: flex;
          background:#f5f5f5;
          .content-left{
              width: 224px;
              height:619px;
              img{
                  width: 224px;
                  height:619px;
              }
          }
          .content-right{
              width:986px;
              margin-left:17px;
              ul{
                   display: flex;
                   flex-wrap: wrap;
                   li{
                        width: 236px;
                        height: 302px;
                        background:#fff;
                        margin-left:10px;
                        margin-bottom:15px;
                        text-align: center;
                        img{
                            width: 100%;
                            height: 195px;
                        }
                        .name{
                            font-size:16px;
                            font-weight: bold;
                            margin:10px 0;
                        }
                        .subtitle{
                            color:#999;
                            margin:10px 0;
                        }
                        .price{
                            color:red;
                            &:after{
                                   display: inline-block;
                                    width: 22px;
                                    height: 22px;
                                    background: url(/imgs/icon-cart-hover.png) no-repeat 50%;
                                    background-size: contain;
                                    content: " ";
                                    margin-left: 5px;
                                    vertical-align: middle;
                                }
                        }
                    }
              }   
          }
      }
  }
}
</style>
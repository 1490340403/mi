<template>
    <div class="product">
        <div class="container">
            <Params>
                <template v-slot:buy>
                    <button class="btn" @click="goDetail">立即购买</button>
                </template>
            </Params>
        </div>
        <div class="bg-1"></div>
        <div class="bg-2"></div>
        <div class="bg-3"></div>
        <div class="item-swiper">
            <swiper :options="swiperOption">
                <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <p class="desc">小米8 AI变焦双摄拍摄</p>
        </div>
        <div class="item-video">
            <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div class="video-bg" @click="showSlide"></div>
            <div class="video-box" >
                <div class="overlay" v-if="slide"></div>
                <div class="video" :class="{'show':slide}">
                    <span class="icon-close" @click="closeVideo"></span>
                    <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Params from '../components/parms.vue'
export default {
    data(){
        return{
            product:{},
            swiperOption:{
                autoplay:true,
                slidesPerView:3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
            slide:false
        }
    },
    components:{
        Params
    },
    methods:{
        goDetail(){
            const {id}=this.$route.params
            this.$router.push(`/detail/${id}`)
        },
        initData(){
            const {id}=this.$route.params
            this.axios.get('/products/'+id).then((res)=>{
                this.product=res
            })
        },
        closeVideo(){
            this.slide=false
        },
        showSlide(){
            this.slide=true
        }
    },
    created(){
        this.initData()
    }
}
</script>
<style scoped lang="scss">
.product{
    width:100%;
    border-top: 1px solid #e5e5e5;
    .container{
        width:1226px;
        margin:0 auto;
        line-height: 70px;
        .btn{
            display: inline-block;
            width: 110px;
            line-height: 30px;
            text-align: center;
            background-color: #f60;
            color: #fff;
            border: none;
            cursor: pointer;
            margin-left:10px;
        }
    }
    .bg-1{
        background: url(/imgs/product/product-bg-1.png) no-repeat 50%;
        height: 718px;
        text-align: center;
    }
    .bg-2{
        background: url(/imgs/product/product-bg-2.png) no-repeat 50%;
        height: 480px;
        background-size: 1226px 397px;
    }
    .bg-3{
        background: url(/imgs/product/product-bg-3.png) no-repeat 50%;
        height: 638px;
        background-size: cover;
    }
    .item-swiper{
        margin:36px auto 52px;
        .desc{
          font-size:18px;
          color:#333333;
          text-align:center;
        }
        img{
          width:100%;
        }
    }
    .item-video{
        height: 1044px;
        background-color: #070708;
        margin-bottom: 76px;
        color: #fff;
        text-align: center;
        h2{
          font-size:60px;
          padding-top:82px;
          margin-bottom:47px;
        }
        p{
          font-size:24px;
          margin-bottom:58px;
        }
        .video-bg{
          background:url('/imgs/product/gallery-1.png') no-repeat center;
          background-size:cover;
          width:1226px;
          height:540px;
          margin:0 auto 120px;
          cursor:pointer;
        }
        .video-box{
            
            .overlay{
                position: fixed;
                top:0;
                left:0;
                width:100%;
                height: 100%;
                background:#ccc;
                opacity: .4;
                z-index: 10;
            }
            .video{
                width: 1000px;
                height: 536px;
                position: fixed;
                left:50%;
                top:-50%;
                transform:translate(-50%,-50%);
                z-index: 11;
                transition: all 0.6s;
                opacity:0;
                &.show{
                    opacity: 1;
                    top:50%
                }
                .icon-close{
                    position:absolute;
                    top:20px;
                    right:20px;
                    width:20px;
                    height:20px;
                    background: url('/imgs/icon-close.png');
                    background-size:20px 20px;
                    cursor:pointer;
                    z-index:12;
                    }
                video{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    outline:none;
                }
            }
        }
    }
}
</style>
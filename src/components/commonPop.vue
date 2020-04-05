<template >
    <transition name="slide">
        <div class="popBox" v-if="showPop">
            <div class="pop" >
                <div class="popHeader">{{title}}
                    <div class="close" @click="close"></div>
                </div>
                <div  class="popBody" :class="{'bigs':big}">
                    <slot name="body">
                        
                    </slot>
                </div>
                <div class="popFooter">
                    <div class="btn1" @click="goCar">{{btn1}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
   props:{
       showPop:{
           type:Boolean,
           default:false
       },
      
       title:{
           type:String,
           default:''
       },
       btn1:{
           type:String,
           default:''
       },
       big:{
           type:Boolean,
           default:false
       }
   },
   created(){
       
   },
   methods:{
       goCar(){
           this.$emit('goCar')
       },
       close(){
           this.$emit('close')
       }
   }
}
</script>

<style lang="scss">

.popBox{
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    position: fixed;
    z-index: 999;
    left:0;
    top:0;
    transition: all .5s;
    &.slide-enter-active{
        top:0;
    }
    &.slide-leave-active{
        top:-100%;
    }
    &.slide-enter{
        top:-100%;
    }
    .pop{
        width:660px;
        background: #fff;
        position: absolute;
        left:50%;
        top:50%;
        box-sizing: border-box;
        transform: translate(-50%,-50%);
        .popHeader{
            height: 60px;
            background-color: #f5f5f5;
            padding: 0 25px;
            line-height: 60px;
            font-size: 16px;
            width:100%;
            box-sizing: border-box;
            position: relative;
            .close{
                position: absolute;
                top: 23px;
                right: 25px;
                width: 14px;
                height: 14px;
                z-index: 9999;
                background: url('/imgs/icon-close.png') no-repeat 50%;
                background-size: contain;
                transition: all .3s;
                &:hover{
                    transform: scale(1.2);
                }
            }
        }
        .popBody{
             padding: 42px 40px 54px;
             box-sizing: border-box;
             font-size: 14px;
             &.bigs{
                height:350px;
            }
        }
        .popFooter{
            height: 82px;
            line-height: 82px;
            text-align: center;
            background-color: #f5f5f5;
            .btn1{
                display: inline-block;
                width: 110px;
                line-height: 30px;
                text-align: center;
                background-color: #f60;
                color: #fff;
                border: none;
                cursor: pointer;
            }
        }
    }
}
</style>
<template>
  <div class="params_box" :class="{'isFixed':isFixed}">
      <div class="container">
        <div class="params_title">小米CC9</div>
        <div class="params">
            <a src="javascript:;">概述</a><span>|</span>
            <a src="javascript:;">参数</a><span>|</span>
            <a src="javascript:;">用户评价</a>
            <slot name="buy"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isFixed:false
        }
    },
    created(){
        window.addEventListener('scroll',this.scrolls)
    },
    destroyed(){
        window.removeEventListener('scroll',this.scrolls,false)
    },
    methods:{
        scrolls(){
            let scrollTop=document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>151){
                this.isFixed=true
            }else{
                this.isFixed=false
            }
        }
    }
}
</script>
<style lang="scss">
.params_box{
    background:#fff;
    line-height: 70px;
    &.isFixed{
        position: fixed;
        top:0;
        width:100%;
    }
    .container{
        width:1226px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .params_title{
            font-size: 18px;
            color: #333;
            line-height: 70px;
            font-weight: 700;
        }
        .params{
            a{
                color:#666;
            }
            span{
                margin:0 10px;
            }
        }

    }
}
</style>
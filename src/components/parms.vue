<template>
  <div class="params_box">
      <div class="params_title">小米CC9</div>
      <div class="params">
          <a src="javascript:;">概述</a><span>|</span>
          <a src="javascript:;">参数</a><span>|</span>
          <a src="javascript:;">用户评价</a>
          <slot name="buy"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.params_box{
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    .params_title{
        font-size: 18px;
        color: #333;
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
</style>
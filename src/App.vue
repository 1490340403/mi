<template>
  <div id="app">
       <router-view></router-view>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      shopSum:0
    }
  },
  created(){
    if(this.$cookie.get('userId')){
      this.getUser()
      this.getSum()
    }
  },
  methods:{
    ...mapActions(['storeUser','storeShopNum']),
    getUser(){
      this.axios.get('/user').then((res)=>{
        this.storeUser(res.username)
      })
    },
    getSum(){
      this.axios.get('/carts/products/sum').then((res)=>{
        //alert(res)
        this.$store.dispatch('storeShopNum',res)
       // this.storeShopNum(res)
      })
    }
  }
}
</script>

<style>
@import './assets/reset.scss';

</style>

<template>
  <div id="app">
       <router-view></router-view>
  </div>
</template>

<script>


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
    getUser(){
      this.axios.get('/user').then(()=>{})
    },
    getSum(){
      this.axios.get('/carts/products/sum').then(()=>{

      })
    }
  }
}
</script>

<style>
@import './assets/reset.scss';

</style>

<template>
    <div>
        <Header/>
          <router-view/>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/footer.vue'
import Header from '../components/header.vue'
export default {
    components:{
      Footer,
      Header
    }
}
</script>
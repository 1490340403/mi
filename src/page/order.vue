<template>
    <div>
        <CatHeader/>
        <router-view/>
        <Footer/>
    </div>
</template>
<script>
import CatHeader from '../components/catHeader'
import Footer from '../components/footer'
export default {
    components:{
        CatHeader,
        Footer
    }
}
</script>
<style scoped>

</style>
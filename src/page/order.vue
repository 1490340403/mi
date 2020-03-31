<template>
    <div>
        <router-view/>
        <Service/>
        <Footer/>
    </div>
</template>
<script>

import Footer from '../components/footer'
import Service from '../components/service'
export default {
    components:{
        Service,
        Footer
    }
}
</script>
<style scoped>

</style>
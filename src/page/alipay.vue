<template>
    <div>
        <Loading v-if="show"></Loading>
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
import Loading from '../components/Loading'
export default {
    components:{
        Loading
    },
    data(){
        return{
            id:this.$route.query.orderId,
            show:true,
            content:''
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.axios.post('/pay',{
                orderId:this.id,
                orderName:'vue支付宝',
                amount:0.01,
                payType:1
            }).then((res)=>{
                this.content=res.content
                 setTimeout(()=>{
                    document.forms[0].submit();
                },100)
            })
        }
    }
}
</script>
<style scoped>

</style>
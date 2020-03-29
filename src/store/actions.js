export default{
    storeUser({commit},username){
        commit('storeUser',username)
    },
    storeShopNum({commit},shopNum){
        commit('storeShopNum',shopNum)
    }
}
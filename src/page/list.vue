<template>
  <div class="order-list">
    <CatHeader title="订单列表">
        <template v-slot:tip>
          <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
        </template>
    </CatHeader>
     <div class="wrapper">
      <div class="container">
        <div class="order-box"  >
           <Loading v-if="loding"/>
          <div class="order" v-for="(item,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                 {{item.createTime}}
                <span>|</span>
                 {{item.receiverName}}
                <span>|</span>
                订单号：{{item.orderNo}}
                <span>|</span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(items,indexs) in item.orderItemVoList" :key='indexs'>
                  <div class="good-img">
                    <img v-lazy="items.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{items.productName}}</div>
                    <div class="p-money">{{items.totalPrice}} X {{items.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;">未支付</a>
              </div>
            </div>
          </div>
           <NoData v-if="noData"></NoData>
           <!-- <div class="pagination" v-if="this.total>10">
            <el-pagination
                background
                layout="prev, pager, next"
                @current-change="changePage"
                :total="this.total">
              </el-pagination>
           </div> -->
           <div class="paginations"  
              v-infinite-scroll="loadMore" 
              v-show="show"
              infinite-scroll-disabled="busy" 
              infinite-scroll-distance="410" 
           >
             <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" >
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatHeader from '../components/catHeader'
import NoData from '../components/NoData'
import Loading from '../components/Loading'
import infiniteScroll from 'vue-infinite-scroll'
export default {
  name: 'app',
  components: {
    CatHeader,
    NoData,
    Loading
  },
  directives: {
    infiniteScroll
  },
  data(){
    return {
      pageSize:10,
      pageNum:1,
      list:[],
      noData:false,
      loding:true,
      total:0,
      busy: false,
      show:false
    }
  },
  created(){
    this.getList()
  },
  methods:{
    loadMore(){
      this.busy=true
      setTimeout(()=>{
        this.pageNum++
        this.getLists()
      },500)
    },
    getLists(){
       let {pageSize,pageNum}=this
       this.show=true
      let params={
        pageNum,
        pageSize
      }
      this.axios.get('/orders',{params}).then((res)=>{
        this.loding=false
        this.show=false
        this.list=[...this.list,...res.list]
        this.busy=false;
        // if(res.hasNextPage){
        //     this.busy=false;
        //   }else{
        //     this.busy=true;
        //   }
      })
    },
    changePage(pageNum){
      this.pageNum=pageNum
      this.getList()
      window.scroll(0,0);
    },
    getList(){
      let {pageSize,pageNum}=this
      let params={
        pageNum,
        pageSize
      }
      this.axios.get('/orders',{params}).then((res)=>{
        this.loding=false
        this.list=res.list
        this.total=res.total
        if(res.list&&res.list==0){
          this.noData=true
        }
      })
    }
  }
}
</script>

<style lang="scss">
 .order-list{
    .wrapper{
      background-color: #f5f5f5;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .pagination{
          text-align: right;
        }
        .paginations{
          text-align: center;
        }
        .order{
          border: 1px solid #d7d7d7;
          background-color: #fff;
          margin-bottom: 31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            height: 74px;
            line-height: 74px;
            background-color: #fffaf7;
            padding: 0 43px;
            font-size: 16px;
            color:#666;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
             font-size:26px;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                box-sizing: border-box;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                }
              }
            }
            .good-state{
              margin-top:40px;
              font-size: 20px;
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
  .container{
    width:1226px;
    margin:0 auto;
  }
  .fl{
    float:left;
  }
  .fr{
    float:right;
    height: 74x;
    line-height: 74px;
    font-size: 20px;
    color: #f60;
    
    a{
        color: #f60;
        
    }
  }
  .clearfix:before, .clearfix:after {
    content: "";
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
}
</style>

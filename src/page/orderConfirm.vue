<template>
    <div class="orderConfirm">
        <CatHeader title="订单确认">
            <template v-slot:tip>
                <span>请认真填写收货地址</span>
            </template>
        </CatHeader>
         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <h2 class="addr-title">收货地址</h2>
            <div class="addr-list clearfix">
              <div class="addr-info" v-for="(item,index) in location" :key="index" :class="{checked:index==indexss}" @click="indexss=index">
                <h2>{{item.receiverName}}</h2>
                <div class="phone">{{item.receiverMobile}}</div>
                <div class="street">{{item.receiverProvince +' '+item.receiverCity+' '+
                    item.receiverDistrict}}<br>{{item.receiverAddress}}</div>
                <div class="action">
                  <a href="javascript:;" class="fl" @click="del(item)">
                    <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                  </a>
                  <a href="javascript:;" class="fr" @click="edit(1,item)">
                    <svg class="icon icon-edit"><use xlink:href="#icon-edit"></use></svg>
                  </a>
                </div>
              </div>
             
              <div class="addr-add" @click="add">
                <div class="icon-add"></div>
                <div>添加新地址</div>
              </div>
            </div>
          </div>
          <div class="item-good">
            <h2>商品</h2>
            <ul>
              <li v-for="(item,index) in cartProductVoList" :key="index">
                <div class="good-name">
                  <img :src="item.productMainImage" alt="">
                  <span>{{item.productName +' '+item.productName}}</span>
                </div>
                <div class="good-price">{{item.productPrice}}元x{{item.quantity}}</div>
                <div class="good-total">{{item.productPrice}}元</div>
              </li>
             
            </ul>
          </div>
          <div class="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h2>发票</h2>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
          </div>
          <div class="detail">
            <div class="item">
              <span class="item-name">商品件数：</span>
              <span class="item-val">{{totalNum}}件</span>
            </div>
            <div class="item">
              <span class="item-name">商品总价：</span>
              <span class="item-val">{{cartTotalPrice}}元</span>
            </div>
            <div class="item">
              <span class="item-name">优惠活动：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item">
              <span class="item-name">运费：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item-total">
              <span class="item-name">应付总额：</span>
              <span class="item-val">{{cartTotalPrice}}元</span>
            </div>
          </div>
          <div class="btn-group">
            <a href="/#/order/cart" class="btn btn-default btn-large">返回购物车</a>
            <a href="javascript:;" class="btn btn-large" @click="sub">去结算</a>
          </div>
        </div>
      </div>
      </div>
      <CommonPop  title="新增确认" big=true btn1="确定" :showPop="showPop" @close="close" @goCar="confirm">
          <template v-slot:body >
            <div class="message">
              <input type="text" placeholder="姓名" v-model="receiverName"/>
              <input type="text" placeholder="手机号" v-model="receiverMobile"/>
            </div>
            <div class="select">
              <select name="province" v-model="receiverProvince">
                <option value ="北京">北京</option>
                <option value ="上海">上海</option>
                <option value ="天津">天津</option>
              </select>
               <select name="city" v-model="receiverCity" >
                <option value ="昌平">昌平</option>
                <option value ="宝山">宝山</option>
                <option value ="天津">天津</option>
              </select>
               <select name="district" v-model="receiverDistrict">
                <option value ="第一街道">第一街道</option>
                <option value ="第二街道">第二街道</option>
                <option value ="河北">河北</option>
              </select>
            </div>
            <textarea name="street" v-model="receiverAddress"></textarea>
            <input type="text" placeholder="邮编" class="youbian" v-model="receiverZip"/>
          </template>
      </CommonPop>
   </div>
    
</template>
<script>
import CatHeader from '../components/catHeader'
import CommonPop from '../components/commonPop'
export default {
    components:{
        CatHeader,
        CommonPop
    },
    data(){
        return{
            cartProductVoList:[],
            cartTotalPrice:0,
            totalNum:0,
            selectList:[],
            location:[],
            showPop:false,
            receiverAddress:"",
            receiverCity:"",
            receiverDistrict:"",
            receiverMobile:"",
            receiverName:"",
            
            receiverProvince:"",
            receiverZip:"",
            indexs:1,//1编辑2新增3删除
            indx:0,//删除更新id
            indexss:0
        }
    },
    created(){
        this.getCartList()
        this.getLocation()
    },
    methods:{
        getCartList(){
            this.axios.get('/carts').then(res=>{
                this.cartProductVoList=res.cartProductVoList
                this.cartTotalPrice=res.cartTotalPrice
                this.selectList=this.cartProductVoList.filter(item=>item.productSelected==true)
                this.selectList.map(item=>{
                    this.totalNum+=item.quantity
                })
            })
        },
        getLocation(){
            this.axios.get('/shippings').then(res=>{
                this.location=res.list
            })
        },
        close(){
            this.showPop=false
        },
        confirm(){
          const {indx,receiverAddress,receiverCity,receiverDistrict,receiverName,receiverMobile,receiverProvince,receiverZip,indexs}=this
          if(!receiverName){
            this.$message.error('请填写姓名')
          }else if(!receiverMobile){
            this.$message.error('请填电话')
          }else if(!receiverDistrict){
            this.$message.error('请填写区')
          }else if(!receiverAddress){
            this.$message.error('请填写地址')
          }else if(!receiverCity){
            this.$message.error('请填写城市')
          }else if(!receiverProvince){
            this.$message.error('请填写省')
          }else if(!receiverZip){
            this.$message.error('请填写邮编')
          }
          var url=''
          var method=''
          var params={}
          if(indexs==1){
             method='put'
             url=`/shippings/${indx}`

          }else if(indexs==2){
            method="post"
            url='/shippings'
          }else{
            method='delete'
            url=`/shippings/${indx}`
          }
          if(indexs==1||indexs==2){
            params={
              receiverAddress,
              receiverCity,
              receiverDistrict,
              receiverName,
              receiverMobile,
              receiverProvince,
              receiverZip,
            }
          }
        this.axios[method](url,params).then(()=>{
          this.$message.success('更新成功')
          this.showPop=false
          this.getLocation()
        });
        },
        del(item){
          this.indexs=3
           this.indx=item.id
          this.axios.delete(`/shippings/${item.id}`).then(()=>{
          this.$message.success('更新成功')
          
          this.getLocation()
        });
        },
        edit(i,item){
          this.indexs=i
          this.showPop=true
           this.receiverAddress=item.receiverAddress
            this.receiverCity=item.receiverCity
           this.receiverDistrict=item.receiverDistrict
            this.receiverMobile=item.receiverMobile
            this.receiverName=item.receiverName
           
            this.receiverProvince=item.receiverProvince
            this.receiverZip=item.receiverZip
            this.indx=item.id
        },
        add(){
          this.indexs=2
          this.showPop=true
          this.receiverAddress=''
          this.receiverCity=''
           this.receiverDistrict=''
            this.receiverMobile=''
            this.receiverName=''
           
            this.receiverProvince=''
            this.receiverZip=''
        },
        sub(){
           let item = this.location[this.indexss];
          if(!item){
            this.$message.error('请选择一个收货地址');
            return;
          }
          this.axios.post('/orders',{
            shippingId:item.id
          }).then((res)=>{
            this.$router.push({
              path:`/order/pay`,
              query:{
              orderNo:res.orderNo
            }
            })
          })
        }
    }
}
</script>
<style scoped lang="scss">
.wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:84px;
      .order-box{
        background-color:#ffffff;
        padding-left: 40px;
        padding-bottom: 40px;
        .addr-title{
          font-size: 20px;
          color: #333333;
          font-weight: 200;
          margin-bottom:21px;
        }
        .item-address{
          padding-top: 38px;
          .addr-list{
            .addr-info,.addr-add{
              box-sizing:border-box;
              float: left;
              width:271px;
              height:180px;
              border:1px solid #E5E5E5;
              margin-right: 15px;
              padding: 15px 24px;
              font-size: 14px;
              color:#757575;
            }
            .addr-info{
              cursor:pointer;
              h2{
                height:27px;
                font-size:18px;
                font-weight: 300;
                color:#333;
                margin-bottom:10px;
              }
              .street{
                height:50px;
              }
              .action{
                height:50px;
                line-height:50px;
                .icon{
                  width: 20px;
                  height: 20px;
                  fill: #666666;
                  vertical-align: middle;
                  &:hover{
                    fill: #FF6700;
                  }
                }
              }
              &.checked{
                border:1px solid #ff6700;
              }
            }
            .addr-add{
              text-align:center;
              color: #999999;
              cursor:pointer;
              .icon-add{
                width:30px;
                height:30px;
                border-radius:50%;
                background:url('/imgs/icon-add.png') #E0E0E0 no-repeat center;
                background-size:14px;
                margin: 0 auto;
                margin-top: 45px;
                margin-bottom: 10px;
              }
            }
          }
        }
        .item-good{
          margin-top:34px;
          border-bottom: 1px solid #E5E5E5;
          padding-bottom: 12px;
          h2{
            border-bottom:1px solid #E5E5E5;
            padding-bottom: 5px;
          }
          li{
            display:flex;
            align-items: center;
            height:40px;
            line-height:40px;
            margin-top:10px;
            font-size:16px;
            color:#333333;
            .good-name{
              flex:5;
              img{
                width:30px;
                height:30px;
                vertical-align:middle;
              }
            }
            .good-price{
              flex:2;
            }
            .good-total{
              padding-right:44px;
              color:#FF6600;
            }
          }
        }
        .item-shipping,.item-invoice{
          margin-top:31px;
          line-height: 20px;
          h2{
            display: inline-block;
            margin-right: 71px;
            font-size: 20px;
            width: 80px;
          }
          span,a{
            font-size:16px;
            color:#FF6700;
            margin-right:23px;
          }
        }
        .detail{
          padding: 50px 44px 33px 0;
          border-bottom: 1px solid #f5f5f5;
          text-align: right;
          font-size: 16px;
          color: #666666;
          .item-val{
            color:#FF6700;
          }
          .item{
            line-height: 15px;
            margin-bottom: 12px;
          }
          .item-val{
            display:inline-block;
            width:100px;
          }
          .item-total{
            .item-val{
              font-size:28px;
            }
          }
        }
        .btn-group{
          margin-top: 37px;
          text-align: right;
        }
      }
    }
    .edit-wrap{
      font-size:14px;
      .item{
        margin-bottom:15px;
        .input{
          display:inline-block;
          width:283px;
          height:40px;
          line-height:40px;
          padding-left:15px;
          border:1px solid #E5E5E5;
          &+.input{
            margin-left:14px;
          }
        }
        select{
          height:40px;
          line-height:40px;
          border:1px solid #E5E5E5;
          margin-right:15px;
        }
        textarea{
          height:62px;
          width:100%;
          padding:13px 15px;
          box-sizing:border-box;
          border:1px solid #E5E5E5;
        }
      }
    }
    .fl{
        float:left;
    }
    .fr{
        float:right;
    }
   .clearfix:after{content:'';display:block;clear:both;}
   .clearfix{zoom:1;}
   .btn{
       width: 202px;
       height: 50px;
       line-height: 50px;
       display: inline-block;
       font-size: 18px;
       text-align: center;
       color:#fff;
       margin-right: 20px;
       &:first-child{
           background:#ccc;
       }
       &:last-child{
          background-color: #f60;
       }
   }
   .container{
       width:1226px;
       margin:0 auto;
   }
   .message{
     input{
       display: inline-block;
       width: 283px;
       height: 40px;
       line-height: 40px;
       padding-left: 15px;
       border: 1px solid #e5e5e5;
       box-sizing: border-box;
       &:last-child{
         margin-left: 14px;
       }
     }
   }
   .select{
     margin:20px 0;
     select{
      height: 40px;
      line-height: 40px;
      border: 1px solid #e5e5e5;
      margin-right: 15px;
     }
   }
   textarea{
      height:62px;
      width:100%;
      padding:13px 15px;
      box-sizing:border-box;
      border:1px solid #E5E5E5;
  }
  .youbian{
    display: inline-block;
    width: 283px;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    border: 1px solid #e5e5e5;
    margin:20px 0;
  }
</style>
<template>
    <div class="footer">
        <div class="logo">
            <img src="/imgs/logo-footer.png"/>
            <div class="shopName">小米商城</div>
        </div>
        <ul class="link">
            <li><a href="javascript:;">河畔一角主页</a><span>|</span></li>
            <li><a href="javascript:;">Vue全栈课程</a><span>|</span></li>
            <li><a href="javascript:;">React全家桶课程</a><span>|</span></li>
            <li><a href="javascript:;">微信支付专项课程（H5+小程序+Node+Mongo）</a><span></span></li>
        </ul>
        <div class="copyRight">
            Copyright ©2019 <span class="org">mi.futurefe.com</span> All Rights Reserved.
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .footer{
        height: 234px;
        border-top: 4px solid #f60;
        background-color: #333;
        color: #999;
        font-size: 16px;
        text-align: center;
        font-size:16px;
        .logo{
            img{
                margin-top:30px;
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .link{
            margin: 20px;
            li{
                display: inline-block;
                a{
                    color: #999;
                }
                span{
                    margin:0 20px;
                }
            }
        }
        .org{
            color:#f60;
        }
    }
</style>
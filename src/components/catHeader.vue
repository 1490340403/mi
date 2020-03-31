<template>
    <div class="catheader">
        <div class="container">
            <div class="logo">
                <div class="logoLeft"></div>
            </div>
            <div class="title">
                <a href="javasccript:;">{{title}}</a>
                <slot name="tip"></slot>
            </div>
            <div class="name">{{username}}</div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:{
        title:String
    },
    computed:mapState(['username'])
}
</script>
<style scoped lang="scss">
.catheader{
    padding: 30px 0;
    border-bottom: 2px solid #f60;
    .container{
        width:1226px;
        margin:0 auto;
        line-height:55px;
        height:55px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
            width:55px;
            background:#f60;
            .logoLeft{
                width:110px;
                height:55px;
                transition: margin 0.3s;
                &:hover{
                        margin-left:-55px;
                    }
                &:before{
                    content:'';
                    display: inline-block;
                    width:55px;
                    height:55px;
                    background:url('/imgs/mi-logo.png') no-repeat 50%;
                    background-size: contain;
                }
                &:after{
                    content:'';
                    display: inline-block;
                    width:55px;
                    height:55px;
                    background:url('/imgs/mi-home.png') no-repeat 50%;
                    background-size: contain;
                }
            }
        }
        .title{
            margin-left:-450px;
            a{
                font-size: 28px;
                color: #333;
            }
            span{
                    font-size: 14px;
                    margin-left: 17px;
                    color: #999;
                    font-weight: 200;
            }
        }
        .name{
            color: #666;
            font-size: 16px;
        }  
    }
}
</style>
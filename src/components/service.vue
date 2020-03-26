<template>
    <div class="service">
        <ul>
            <li>
                <span class="icon-setting"></span>
                预约维修服务
            </li>
            <li>
                <span class="icon-7day"></span>
                7天无理由退货
            </li>
            <li>
                <span class="icon-15day"></span>
                15天免费换货
            </li>
            <li>
                <span class="icon-post"></span>
                满150元包邮
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.service{
    width:1226px;
    padding: 33px 0;
    color: #666;
    font-size: 16px;
    background:#fff;
    margin:0 auto;
    li{
        display: inline-block;
        width: 24.9%;
        text-align: center;
        border-right: 1px solid #e5e5e5;
        .icon-setting{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background:url('/imgs/icon-setting.png') no-repeat center;
            background-size:contain;
        }
        .icon-7day{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background:url('/imgs/icon-7day.png') no-repeat center;
            background-size:contain;
        }
        .icon-15day{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background:url('/imgs/icon-15day.png') no-repeat center;
            background-size:contain;
        }
        .icon-post{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background:url('/imgs/icon-post.png') no-repeat center;
            background-size:contain;
        }
    }
}
</style>
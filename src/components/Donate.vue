<template>
    <div class="donate-background">
        <div class="display-area">
            <h1>累積金額</h1>
            <h1 class=highlight>NT$ 100</h1>
        </div>
        <div class="display-area-second">
            <div class="contain-box">
                <h1>投票額度</h1>
                <h1 class="highlight"> 1 <img class="login-btn__logo" src="../assets/google-login.png">
                </h1>
            </div>
            <div>
                <div class="contain-box">
                    <h1>剩餘時間</h1>
                    <h1 class=highlight>5天 10小時</h1>
                </div>
            </div>
        </div>
        <button class="btn_donate">贊助</button>
        <button class="btn_add-on">附加問題</button>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.donate-background {
    height: 420px;
    width: 370px;;
    float: right;
    background:#435058;
    z-index: 2;
    .display-area {
        position: relative;
        top:15%;
        .highlight{
            color: #C6F4F1;
            font-size: 24px;
            margin-top:10px;
        }
    }
    .display-area-second {
        position: relative;
        top:25%;
        display: flex;
        .contain-box{
            margin-right:20%;
            .h1{
                display: flex;
                img{
                    height:30px;
                    width:30px;
                }
            }
            .highlight{
                color: #C6F4F1;
                font-size: 24px;
                margin-top:10px;
                width:150%;
            }
        }
    }
}
.btn_donate {
    background: #C6F4F1;
    position: relative;
    top:150px;
    display: block;
    height:50px;
    margin-top:20px;
    width:80%;
    box-shadow: 0px 0px 10px #aaa;
    &:hover {
        background: white;
        color:#435058;
        cursor: pointer;
    }
}
.btn_add-on {
    background: transparent;
    color:white;
    border:2px solid #C6F4F1;
    position: relative;
    top:150px;
    display: block;
    height:50px;
    margin-top:20px;
    width:80%;
    box-shadow: 0px 0px 8px #aaa;
    &:hover {
        background: white;
        color:#435058;
        border:2px solid white;
        cursor: pointer;
    }
}
</style>

<template>
    <div class="donate-container">
        <div class="display-area">
            <h1>累積金額</h1>
            <h1 class=highlight>NT$ {{this.donate.donateAmount}}</h1>
        </div>
        <div class="display-area-second">
            <div class="contain-box">
                <h1>投票額度</h1>
                <h1 class="highlight"> {{this.donate.voteAmount}} <img src="../../assets/star.png">
                </h1>
            </div>
            <div>
                <div class="contain-box">
                    <h1>剩餘時間</h1>
                    <h1 class=highlight>{{Math.floor(this.donate.remainTime/24)}}天 {{this.donate.remainTime - 24*Math.floor(this.donate.remainTime/24)}}小時</h1>
                </div>
            </div>
        </div>
        <router-link class="router-link" :to="{ name: 'donate', params: { id: id }}">
            <button class="btn_donate">贊助</button>
        </router-link>
        <button class="btn_add-on">附加問題</button>
    </div>
</template>
<script>
export default {
  props: {
    qid: {
      type: Number
    },
    donate: {
      type: Object
    }
  }
}
</script>
<style lang="scss">
.donate-container {
    height: 420px;
    float: right;
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
            padding-right:60px;
            .h1{
                display: flex;
                margin-top:10px;
            }
            img{
                height:30px;
                width:30px;
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
    width: 265px;
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
    width: 265px;
    box-shadow: 0px 0px 8px #aaa;
    &:hover {
        background: white;
        color:#435058;
        border:2px solid white;
        cursor: pointer;
    }
}
</style>

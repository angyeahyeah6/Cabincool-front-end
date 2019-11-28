<template>
    <div>
        <el-row>
            <el-col :span="9" :offset="2">
                <div class="do-display-container">
                    <h1 class="do-title">{{ donateTitle }}</h1>
                </div>
                <div class="do-display-text-container">
                  <h1 class="title-2" style="display: inline;">累積金額</h1>
                  <h1 class="title-2" style="display: inline; margin: 20px;">NT$ {{grandTotal}}</h1>
                  <h1 v-if="singleGet == true" class="title-2" style="display: inline; margin: 20px; font-size: 14px;">第一名獨得</h1>
                  <h1 v-else></h1>
                </div>
                <div class="do-display-text-container">
                  <h1 class="title-2" style="display: inline;">剩餘時間</h1>
                  <h1 class="title-2" style="display: inline; margin: 20px;">{{Math.floor(this.remainTime/24)}}天 {{this.remainTime - 24*Math.floor(this.remainTime/24)}}小時</h1>
                </div>
            </el-col>
            <el-col :span="1" :offset="1">
              <div class="divide-line"></div>
            </el-col>
            <el-col :span="9" :offset="2">
              <div class="filling-area" style="margin-top:90px;font-size: 24px;line-height: 35px;">
                <h1 class="title-2" style="display: inline; margin-right: 30px;">您要投</h1>
                <h1 class="title-2" style="font-size: 36px;display: inline;margin-bottom: 100px;">NT</h1>
                <input v-model="inputAmount" type="number" class="money-input" autofocus>
                <h1 class="title-2" style="margin-left: 90px;">= {{starAmount}} <img class="in-line" src="../assets/star_dark.png"></h1>
             </div>
             <router-link class="router-link" :to="{ name: 'payment'}">
              <button class="next-button" style="background: #435058; color:white;">下一步</button>
             </router-link>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      donateTitle: '霍金說：「人類大腦可脫離人體而獨立存在..」思維複製到人工智慧上面,碳基生命進化為矽基生命,可行？',
      grandTotal: 100,
      remainTime: 130,
      inputAmount: '',
      starAmount: 5,
      singleGet: true
    }
  },
  watch: {
    inputAmount: function (newAmount, oldAmount) {
      this.starAmount = this.inputAmount / 5
    }
  },
  addEvent ({ type, target }) {
    this.inputAmount = target.value
  }
}
</script>>
<style lang="scss">
.next-button{
    float:center;
    height:50px;
    border: 2px solid #435058;
    box-sizing: border-box;
    width: 160px;
    margin: 10px;
    margin-top:200px;
    margin-left: 80px;
    &:hover {
        cursor: pointer;
    }
}
.divide-line{
  height: 600px;
  width:0;
  border-left: 1px solid #435058;
  margin-top: 30px;
}
.do-display-text-container{
  margin-left: 90px;
  align-self: center;
  width: 350px;
  margin-top: 30px;
  font-size: 24px;
}
el-row{
    margin-left: 100px;
    margin-right: 100px;
    color: #435058;
}
.word-section{
  margin-top:30px;
  float: right;
  width: 100%;
}
.title-2{
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 5px;
  color: #435058;
  align-self: center;
}
.do-display-container{
    height: 370px;
    width: 80%;
    background: url('../assets/stand.png') no-repeat center;
    background-size: 100%;
    padding: 5%;
    margin-top: 30px;
    .do-title{
      margin-top: 10%;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 34px;
      text-align: justify;
      color: #435058;
    }
}
</style>

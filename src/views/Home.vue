<template>
<div>
  <div>
    <el-row class="home-section">
      <el-col :span="15">
        <p class="bigword">每個奇思異想都值得專家細心回答</p>
        <p class="smallword">Cabincool 幫您媒合各領域的專家。只需要提出您的奇思異想以及付出少量的金額，<br>我們就會幫您媒合有興趣的專家並鼓勵他們來回答問題以賺取獎金！<br> 透過綠界金融更使在 Caboncool 上的付款、取款流程達到前所未有的簡便</p>
        <router-link class="router-link" :to="{ name: 'questionList'}">
          <button class="submit-button-2" style="">看看其他人都問了什麼</button>
        </router-link>
      </el-col>
      <img src="../assets/banner.png" class="home-img">
    </el-row>
  </div>
  <div>
    <el-row>
        <el-col :span="11">
          <div class="home-container">
            <h1 class="title-18" >我要發問</h1>
              <input type="text" class="input-4" placeholder="  問題內容">
                <router-link class="router-link" :to="{ name: 'home'}">
                <button class="submit-button-1" style="margin-top:60px;height:37px">送出</button>
                </router-link>
            </div>
        </el-col>
        <el-col :span="2">
            <div style="margin-top:100px;">
            <h1 class="title-2" >或</h1>
            <div class="verti-line"></div>
            </div>
        </el-col>
        <el-col :span="11">
          <div class="home-container">
            <h1 class="title-18" >熱門問題</h1>
          </div>
          <el-row>
            <el-col :span="4">
              <h1>社會</h1>
              <h1>商業</h1>
              <h1>健康</h1>
              <h1>科技</h1>
            </el-col>
            <el-col :span="4">
              <h1>科學</h1>
              <h1>設計</h1>
              <h1>其他</h1>
            </el-col>
          </el-row>
          <img src="../assets/截圖 2019-11-29 04.03.28.png" class="home-img">
        </el-col>
    </el-row>
  </div>
  <div>
    <el-row class="home-section">
      <el-col :span="8">
        <img src="../assets/fun1.png" width="50%">
        <h1 class="title-18" >小小問題大大解答</h1>
        <h1 class="title-18" >在 Cabincool 上我們透過獎金制度吸引現實世界中真正的專家，並透過評分制度選出最佳的答案，讓您每一個問題都有著最高品質的答案。</h1>
      </el-col>
      <el-col :span="8">
        <img src="../assets/fun2.png" width="50%">
        <h1 class="title-18" >市場機制下的評選機制</h1>
        <h1 class="title-18" >提問者可以設定要怎麼分配獎金與如何選擇答案，不同於其他平台，Cabincool 可以選擇開放一般使用者也加入評選，透過眾人的智慧選出最好的答案！</h1>
      </el-col>
      <el-col :span="8">
        <img src="../assets/fun3.png" width="50%">
        <h1 class="title-18" >回答問題以賺取獎金</h1>
        <h1 class="title-18" >您可以在 Cabincool 上尋找有趣的問題，並在任一您習慣的平台（如 Medium）上發表回覆的文章，就有機會可以讓您的回答被眾人看見並且賺取獎金。</h1>
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang="scss">
.home-section{
  background: #FBFBFB;
  height: 420px;
}
.bigword{
  font-size: 44px;
  line-height: 65px;
  margin-top: 90px;
}
.smallword{
  font-size: 16px;
  line-height: 25px;
  margin-top: 15px;
}
.submit-button-2{
    margin-top: 28px;
    height:37px;
    border: 2px solid #435058;
    box-sizing: border-box;
    width: 210px;
    display: block;
    background: #435058;
    color:white;
    &:hover {
        cursor: pointer;
    }
}
.home-img{
    margin-top: 90px;
    margin-left: 4.5%;
    width: 26vw;
}
.title-18{
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #435058;
  margin-top: 60px;
}
.input-4{
  margin-bottom: 5%;
  margin-top: 60px;
  width: 100%;
  height:40px;
  background: #FBFBFB;
  border: 2px solid #435058;
  box-sizing: border-box;
  outline: none;
  &:focus{
      background: white;
  }
}
.home-container{
    padding:50px;
}
.home-next{
  margin-top: 60px;
}
</style>

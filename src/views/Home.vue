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
            <h1 class="title-18" >我要發問</h1>
              <input type="text" class="input-4" placeholder="  問題內容">
                <router-link class="router-link" :to="{ name: 'home'}">
                <button class="submit-button-1" style="margin-top:60px;height:37px">送出</button>
                </router-link>
            </div>
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

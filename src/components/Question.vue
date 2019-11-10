<template>
  <div class="question-background">
    <div class="question-container">
        <div class="name_container">
          <img src="../assets/selfie.png">
          <h1 class="name">李惟慈</h1>
          <h2>2019/02/04  23:52</h2>
          <h1 class="category"># 科學</h1>
        </div>
        <br>
        <div class="title">
          <h1>霍金說：「人類大腦可脫離人體而獨立存在..」思維複製到人工智慧上面,碳基生命進化為矽基生命,可行？</h1>
          <h2>
            意識不僅存在於大腦中也有可能在宇宙中存在；兩個質子間會互相傳輸能量影響彼此，根據熱力學第二定律的推理，不同溫差的物質會使能量達到平衡，此為量子糾纏。意識很可能是量子糾纏形成的聯結。宇宙間每個粒子在大霹靂時都存在過量子糾纏的狀態，一旦某個外因的刺激仍有可能重建量子糾纏關係，因此人工智慧複製人類思維，使碳基生命進化為矽基生命有待驗證。
          </h2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
.question-background {
  position: relative;
  left: 0;
  right: 0;
  width:73%;
  margin-top:0px;
  height:420px;
  background:#435058;
  color:white !important;
  .question-container{
    margin: auto;
    width:70%;
    left:20%;
    height:85%;
    margin-left:10%;
    margin-top:1%;
    color: white;
    display: block;
    // background: red;
    .name_container{
      display: flex;
      width:90%;
      height:25%;
      color: white;
      margin-top:5%;
      // background: green;
      img{
        width:50px;
        height:50px;
        margin-top:1%;
        padding:8px;
        border-radius: 50%;
      }
      .name{
        font-size: 18px;
        margin-top:4%;
        padding-left: 10px;
      }
      h2{
        color: grey;
        font-size: 15px;
        margin-top:4%;
        padding-left: 20px;
      }
      .category{
        position:relative;
        font-size: 18px;
        width:50%;
        left:45%;
        text-align:right;
        margin:5px;
        margin-top:50px;
        align-self: right;
      }
    }
    .title{
      margin-top:-1%;
      display: block;
      width:125%;
      left:20%;
      height:75%;
      // background: black;
      h1{
        font-size: 24px;
        margin:1%;
      }
      h2{
        font-size: 18px;
        margin-top:4%;
        line-height: 24px
      }
    }
  }
}
</style>

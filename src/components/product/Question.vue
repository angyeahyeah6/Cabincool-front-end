<template>
    <div class="question-container">
        <div class="name_container">
          <img src="../../assets/selfie.png">
          <h1 class="name">{{this.question.userName}}</h1>
          <h2>{{questionTime}}</h2>
          <h1 class="category"># {{this.question.questionCategory}}</h1>
        </div>
        <br>
        <div class="title">
          <h1>{{this.question.questionTitle}}</h1>
          <h2>
            {{this.question.questionDescription}}
          </h2>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    question: {
      type: Object
    }
  },
  data () {
    return {
      questionTime: '2019/02/04  23:52',
      questionCategory: '科學',
      questionTitle: '霍金說：「人類大腦可脫離人體而獨立存在..」思維複製到人工智慧上面,碳基生命進化為矽基生命,可行？',
      questionDescription: '意識不僅存在於大腦中也有可能在宇宙中存在；兩個質子間會互相傳輸能量影響彼此，根據熱力學第二定律的推理，不同溫差的物質會使能量達到平衡，此為量子糾纏。意識很可能是量子糾纏形成的聯結。宇宙間每個粒子在大霹靂時都存在過量子糾纏的狀態，一旦某個外因的刺激仍有可能重建量子糾纏關係，因此人工智慧複製人類思維，使碳基生命進化為矽基生命有待驗證。'
    }
  },
  computed: {
    ...mapState({
      userName: state => state.userName
    })
  }
}
</script>
<style lang="scss">
.question-container{
  margin: auto;
  height:400px;
  display: block;
  .name_container{
    display: flex;
    height:25%;
    margin-top:5%;
    img{
      width:50px;
      height:50px;
      padding:8px;
      border-radius: 50%;
    }
    .name{
      font-size: 18px;
      margin-top:2%;
      padding:8px;
    }
    h2{
      color: grey;
      font-size: 15px;
      margin-top:2%;
      padding:8px;
    }
    .category{
      position:relative;
      font-size: 18px;
      margin-top:2%;
      align-self: right;
      padding:8px;
    }
  }
  .title{
    display: block;
    height:75%;
    h1{
      font-size: 24px;
      margin:1%;
      font-family: 'Noto Serif TC';
      font-style: normal;
      font-weight: normal;
      line-height: 34px;
    }
    h2{
      margin-top:4%;
      padding-left:1%;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
    }
  }
}
</style>

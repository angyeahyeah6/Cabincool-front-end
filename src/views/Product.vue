<template>
<div id = "product">
    <el-row class="first-section">
      <el-col :span="18">
        <Question v-bind:question="question"></Question>
      </el-col>
      <el-col :span="5" :offset="1">
        <Donate v-bind:donate="donate" :qid="question.id"></Donate>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <div v-for="(answer ,x) in answers" :key="x">
          <Answer v-bind:answer="answer"></Answer>
        </div>
        <Respond v-bind:profile="profile"></Respond>
      </el-col>
      <el-col :span="6">
        <div v-for="(addOn ,x) in addOns" :key="x">
          <AddOn v-bind:addOn="addOn"></AddOn>
        </div>
      </el-col>
    </el-row>
</div>
</template>

<script>
import Answer from '../components/product/Answer'
import Question from '../components/product/Question'
import Donate from '../components/product/DonateSection'
import AddOn from '../components/product/AddOn'
import Respond from '../components/product/Respond'
export default {
  name: 'product',
  components: {
    Answer,
    Question,
    Donate,
    AddOn,
    Respond
  },
  data () {
    return {
      addOns: [{
        addOnAmount: 30,
        addOnDes: '意識不僅存在於大腦中也有可能在宇宙中存在；兩個質子間會互相傳輸能量影響彼此，根據熱力學第二定律的推理，不同溫差的物質會使能量達到平衡，此為量子糾纏。意識很可能是量子糾纏形成的聯結。宇宙間每個粒子在大霹靂時都存在過量子糾纏的狀態，一旦某個外因的刺激仍有可能重建量子糾纏關係，因此人工智慧複製人類思維，使碳基生命進化為矽基生命有待驗證。'
      }],
      donate: {
        donateAmount: 100,
        voteAmount: 1,
        remainTime: 26
      },
      question: {
        id: 1,
        questionOwner: '李惟慈',
        questionTime: '2019/02/04  23:52',
        questionCategory: '科學',
        questionTitle: '霍金說：「人類大腦可脫離人體而獨立存在..」思維複製到人工智慧上面,碳基生命進化為矽基生命,可行？',
        questionDescription: '意識不僅存在於大腦中也有可能在宇宙中存在；兩個質子間會互相傳輸能量影響彼此，根據熱力學第二定律的推理，不同溫差的物質會使能量達到平衡，此為量子糾纏。意識很可能是量子糾纏形成的聯結。宇宙間每個粒子在大霹靂時都存在過量子糾纏的狀態，一旦某個外因的刺激仍有可能重建量子糾纏關係，因此人工智慧複製人類思維，使碳基生命進化為矽基生命有待驗證。'
      },
      answers: [{
        answerName: '李惟慈',
        answerOrder: 1,
        answerTime: '2019/02/04  23:52',
        answerDetail: '理解"可以 讓我們 控制自己的行為 得以讓我們 所理解的事物/行為可以變得更有效率. 例如說: 我們理解"燃燒過程" 所以我們可以製造機械來控制"燃燒過程" 讓它變得更有效率.',
        answerLink: 'https://medium.com/py…/inserting-code-in-medium-f1ebed3262e8',
        answerDes: '在文章中嵌入程式的幾個推薦方式'
      },
      {
        answerName: '陳怡蓁',
        answerOrder: 2,
        answerTime: '2019/02/05  10:02',
        answerDetail: '理解"可以 讓我們 控制自己的行為 得以讓我們 所理解的事物/行為可以變得更有效率. 例如說: 我們理解"燃燒過程" 所以我們可以製造機械來控制"燃燒過程" 讓它變得更有效率.',
        answerLink: 'https://medium.com/py…/inserting-code-in-medium-f1ebed3262e8',
        answerDes: '在文章中嵌入程式的幾個推薦方式'
      }]
    }
  }
}
</script>
<style lang="scss">
.first-section{
  background: #435058;
  color:white;
}
.second-section{
  background: white;
  color:black;
}
.el-row {
  padding-left: 100px;
  padding-right:100px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
// .header {
//   background:#435058 !important;
//   color: white;
//   .search {
//     &__input {
//       background: #435058;
//     }
//   }
// }
</style>

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
        <Respond></Respond>
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
import { url } from '../url'
import { router } from '../router'
export default {
  name: 'product',
  mounted () {
    console.log(url + 'api/questions/' + this.$route.params.id)
    fetch(url + 'api/questions/' + this.$route.params.id, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }).then(data => data.json().then(
      data => {
        this.question = data
      }
    ))
    fetch(url + 'api/questions/' + this.$route.params.id + '/answers', {
      method: 'get',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(data => data.json().then(
      data => {
        console.log(data)
        for (var l = 0; l < data.length; l++) {
          fetch(url + 'api/questions/' + this.$route.params.id + '/answers' + String(data[l]), {
            method: 'get',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then(data => data.json().then(
            data => {
              console.log(data)
              this.answers.push(data)
            }
          ))
          fetch('/api/questions/' + this.$route.params.id + '/answers/' + String(data[l]) + 'vote', {
            method: 'get',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then(data => data.json().then(
            data => {
              this.answers[l].starAmount = data.count
            }
          ))
        }
      }
    ))
  },
  components: {
    Answer,
    Question,
    Donate,
    AddOn,
    Respond
  },
  data () {
    return {
      // addOns: [{
      //   addOnAmount: 30,
      //   addOnDes: '意識不僅存在於大腦中也有可能在宇宙中存在；兩個質子間會互相傳輸能量影響彼此，根據熱力學第二定律的推理，不同溫差的物質會使能量達到平衡，此為量子糾纏。意識很可能是量子糾纏形成的聯結。宇宙間每個粒子在大霹靂時都存在過量子糾纏的狀態，一旦某個外因的刺激仍有可能重建量子糾纏關係，因此人工智慧複製人類思維，使碳基生命進化為矽基生命有待驗證。'
      // }],
      donate: {
      },
      question: {
      },
      answers: [{
        id: '',
        name: '李惟慈',
        time: '2019/02/04  23:52',
        description: '.',
        link: 'https://hackmd.io/B6k3Eyk9SMSp3AU3RyktIw?both',
        starAmount: 5

      },
      {
        id: '',
        name: '李惟慈',
        time: '2019/02/04  23:52',
        description: '.',
        link: 'https://hackmd.io',
        starAmount: 5

      }]
    }
  },
  methods: {
    makeDonateCard () {
      fetch(url + 'api/questions/' + this.$route.params.id + '/donate', {
        method: 'post',
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        body: this.card
      }).then(router.push('questionList/'))
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
.question-container .title h1 {
  font-family: 'Noto Serif TC', serif !important;
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

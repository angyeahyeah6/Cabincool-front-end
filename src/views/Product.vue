<template>
<div id="app">
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
import { router } from '../router/index'
export default {
  name: 'product',
  mounted () {
    // console.log(url + 'api/questions/' + this.$route.params.id)
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
        // console.log(data)
        for (var l = 0; l < data.length; l++) {
          fetch(url + 'api/questions/' + this.$route.params.id + '/answers/' + String(data[l]), {
            method: 'get',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then(data => data.json().then(
            data => {
              // console.log(data)
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
    fetch(url + 'api/questions/' + this.$route.params.id + '/donate', {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }).then(data => data.json().then(
      data => {
        this.donate.donateAmount = 100
        this.donate.remainTime = 30
        this.donate.voteAmount = this.donate.donateAmount / 5
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
      addOns: [{
        addOnAmount: 30,
        addOnDes: '意識不僅存在於大腦中也有可能在宇宙中存在；兩個質子間會互相傳輸能量影響彼此，根據熱力學第二定律的推理，不同溫差的物質會使能量達到平衡，此為量子糾纏。意識很可能是量子糾纏形成的聯結。宇宙間每個粒子在大霹靂時都存在過量子糾纏的狀態，一旦某個外因的刺激仍有可能重建量子糾纏關係，因此人工智慧複製人類思維，使碳基生命進化為矽基生命有待驗證。'
      }],
      donate: {
        donateAmount: 100,
        voteAmount: 20,
        remainTime: 30
      },
      question: {
      },
      answers: []
      //   id: 1,
      //   name: 'Jessie Tang',
      //   time: '2019/11/29  14:03',
      //   description: '區塊鍊要真的實際應用，還要面對許多實際問題，可以參考這篇Medium。',
      //   link: 'https://medium.com/@tino28082000/%E4%BB%80%E9%BA%BC%E6%98%AF%E5%8D%80%E5%A1%8A%E9%8F%88%E5%88%86%E5%8F%89-c155f2cc0a8b',
      //   starAmount: 5

      // },
      // {
      //   id: 2,
      //   name: '蔡瑋宏',
      //   time: '2019/11/29  16:37',
      //   description: '其實區塊鍊的前景還是樂觀的拉，只是還沒有適合的商業模型。',
      //   link: 'https://iknow.stpi.narl.org.tw/Post/Read.aspx?PostID=14929',
      //   starAmount: 5

      // },
      // {
      //   id: 3,
      //   name: '李信穎',
      //   time: '2019/02/04  21:52',
      //   description: '區塊鍊對非科技背景的人來說有沒有其價值，值得討論。',
      //   link: 'https://medium.com/@astromnhsu/033-7c88ae2a90c0',
      //   starAmount: 5

      // }]
    }
  },
  methods: {
    makeDonateCard () {
      fetch(url + 'api/3/' + this.$route.params.id + '/donate', {
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
}
.question-container .title h1 {
  font-family: 'Noto Serif TC', serif !important;
}
</style>

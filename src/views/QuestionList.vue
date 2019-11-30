<template>
  <div>
    <el-row class="menu">
      <ol>
        <li @click="displayCategory('社會')" :class="{choose:isActive[0]}">社會</li>
        <li @click="displayCategory('商業')" :class="{choose:isActive[1]}">商業</li>
        <li @click="displayCategory('科技')" :class="{choose:isActive[2]}">科技</li>
        <li @click="displayCategory('科學')" :class="{choose:isActive[3]}">科學</li>
        <li @click="displayCategory('健康')" :class="{choose:isActive[4]}">健康</li>
        <li @click="displayCategory('設計')" :class="{choose:isActive[5]}">設計</li>
        <li @click="displayCategory('其他')" :class="{choose:isActive[6]}">其他</li>
      </ol>
    </el-row>
    <el-row>
      <ol class="menu_2">
        <li @click="filterHot()" :class="{choose:isHot}">熱門</li>
        <li @click="filterNew()" :class="{choose:isnew}">最新</li>
      </ol>
    </el-row>
    <el-row>
      <div v-for="(question ,x) in filterQuestions" :key="x">
        <router-link @click="saveQId(question.id)" class="router-link" :to="{ name: 'product', params: { id: question.id }}">
        <el-col :span="5" v-if="question.finished==true && x % 4 === 0">
          <div class="single-question">
            <h1 class="category"># {{question.category}} {{x}}</h1>
            <h1 v-if="question.title<40" class="questionTitle">{{question.title}}</h1>
            <h1 v-else class="questionTitle">{{question.title.substring(0,40)}} ...</h1>
            <div class="toBottom">
              <h1 class="name">{{question.name}}</h1>
              <h1 class="name">{{question.time}}</h1>
              <div class="line"></div>
                <h1>最佳解答</h1>
                <h1>{{question.preView}}</h1>
              </div>
          </div>
        </el-col>
        <el-col :span="5" :offset="1" v-else-if="question.finished===true && x % 4 !== 0">
          <div class="single-question">
            <h1 class="category"># {{question.category}} {{x}}</h1>
            <h1 v-if="question.title<40" class="questionTitle">{{question.title}}</h1>
            <h1 v-else class="questionTitle">{{question.title.substring(0,40)}} ...</h1>
            <div class="toBottom">
            <h1 class="name">{{question.name}}</h1>
            <h1 class="name">{{question.time}}</h1>
            <div class="line"></div>
            <h1>最佳解答</h1>
            <h1 v-if="question.preView<15">{{question.preView}}</h1>
            <h1 v-else>{{question.preView.substring(0,15)}}</h1>
            </div>
          </div>
        </el-col>
        <el-col :span="5" v-else-if="question.finished===false && x % 4 === 0">
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
            <h1 v-if="question.title<40" class="questionTitle">{{question.title}}</h1>
            <h1 v-else class="questionTitle">{{question.title.substring(0,40)}} ...</h1>
            <div class="toBottom">
            <h1 class="name">{{question.name}}</h1>
            <span><h1>NT {{question.amount}}</h1><h1 class="name">{{ question.time }}</h1></span>
            </div>
          </div>
        </el-col>
        <el-col :span="5" :offset="1" v-else>
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
            <h1 v-if="question.title<40" class="questionTitle">{{question.title}}</h1>
            <h1 v-else class="questionTitle">{{question.title.substring(0,40)}} ...</h1>
            <div class="toBottom">
            <h1 class="name">{{question.name}}</h1>
            <span><h1>NT {{question.amount}}</h1><h1 class="name">{{ question.time }}</h1></span>
            </div>
          </div>
        </el-col>
        </router-link>
      </div>
    </el-row>
  </div>
</template>

<script>
import { url } from '../url'
export default {
  name: 'questionList',
  isHot: false,
  isNew: false,
  method: {
    saveQId (id) {
      localStorage.setItem('questionId', id)
      console.log(id)
    }
  },
  mounted () {
    fetch(url + 'api/questions', {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    })
      .then(data => {
        data.json().then((data) => {
          for (var i = 0; i < data.length; i++) {
            fetch(url + 'api/questions/' + String(data[i]), {
              method: 'get',
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(data => data.json().then(data => {
              console.log(data)
              this.questions.push(data)
            }))
          }
        })
      }
      )
  },
  data () {
    return {
      isActive: [ false, false, false, false, false, false, false ],
      questions: [],
      filterQuestions: []
    }
  },
  created () {
    this.filterQuestions = this.questions
  },
  methods: {
    displayCategory: function (filterCate) {
      this.filterQuestions = []
      for (var i = 0; i < this.questions.length; i++) {
        if (this.questions[i].category === filterCate) {
          this.filterQuestions.push(this.questions[i])
        }
      }
      for (var l = 0; l < this.isActive.length; l++) {
        this.isActive[l] = false
      }
      this.isActive[['社會', '商業', '科技', '科學', '健康', '設計', '其他'].indexOf(filterCate)] = true
    },
    filterNew: function () {
      this.filterQuestions.sort(
        function (a, b) {
          return b.time - a.time
        }
      )
      this.isHot = false
      this.isNew = true
    },
    filterHot: function () {
      this.filterQuestions.sort(
        function (a, b) {
          return b.clickCount - a.clickCount
        }
      )
      this.isNew = false
      this.isHot = true
    }
  }
}
</script>
<style lang="scss">
.choose{
  color: #07BAC5;
}
.toBottom{
  // margin-top: 50%;
  bottom: 0;
  align-self: end;
}
.header {
    color: #435058 !important;
}
.router-link{
  color: #435058 !important;
}
ol{
    font-family: 'Noto Serif TC';
    padding: 20px;
    text-align: center;
    align-self: center;
    font-size: 18px;
    line-height: 26px;
}
ol li{
  display: inline;
  margin: 0 10px;
  padding: 0 10px;
  &:hover {
        color: #07BAC5;
        cursor: pointer;
    }
}
.single-question .questionTitle{
  font-family: 'Noto Serif TC' !important;
}
.el-row {
  padding-left: 100px;
  padding-right:100px;
}
.menu{
  border-bottom: 1px solid #435058;
  height:50px;
  padding:15px;
}
.menu_2{
  float: left;
  li{
    &:hover {
        color: #07BAC5;
        cursor: pointer;
    }
  }
}
.single-question{
  height: 360px ;
  border: 2px solid #E5E5E5;
  padding: 10px;
  transition: background 0.2s;
  &:hover {
    background: #E5E5E5;
    cursor: pointer;
  }
  &:focus{
    // background: #848C8E;
    background: red;
  }
  h1{
    margin:5px;
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: normal;
  }
  .questionTitle{
    font-size: 18px;
    line-height: 26px;
    text-align: justify;
  }
  .name{
    text-align: right;
  }
  .line{
    border: 1px solid #848C8E;
  }
}

</style>

<template>
  <div>
    <el-row class="menu">
      <ol>
        <li @click="displayCategory('社會')">社會</li>
        <li @click="displayCategory('商業')">商業</li>
        <li @click="displayCategory('科技')">科技</li>
        <li @click="displayCategory('科學')">科學</li>
        <li @click="displayCategory('健康')">健康</li>
        <li @click="displayCategory('設計')">設計</li>
        <li @click="displayCategory('其他')">其他</li>
      </ol>
    </el-row>
    <el-row>
      <ol class="menu_2">
        <li @click="filterHot()">熱門</li>
        <li @click="filterNew()">最新</li>
      </ol>
    </el-row>
    <el-row>
      <div v-for="(question ,x) in filterQuestions" :key="x">
        <router-link class="router-link" :to="{ name: 'product', params: { id: question.id }}">
        <el-col :span="5" v-if="question.fixed==true && x % 4 === 0">
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
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
        <el-col :span="5" :offset="1" v-else-if="question.fixed===true && x % 4 !== 0">
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
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
        <el-col :span="5" v-else-if="question.fixed===false && x % 4 === 0">
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

export default {
  name: 'questionList',
  computed: {
    dateParser: function (dt) {
      var DD = ('0' + dt.getDate()).slice(-2)
      var MM = ('0' + (dt.getMonth() + 1)).slice(-2)
      var YYYY = dt.getFullYear()
      var hh = ('0' + dt.getHours()).slice(-2)
      var mm = ('0' + dt.getMinutes()).slice(-2)
      var ss = ('0' + dt.getSeconds()).slice(-2)
      var dateString = YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss
      console.log(dateString)
      return (dateString)
    }
  },
  data () {
    return {
      questions: [{
        id: 1,
        fixed: true,
        category: '社會',
        title: '霍金說：「人類大腦可脫離人體而獨立存在..」思維複製到人工智慧上面,碳基生命進化為矽基生命,可行？',
        name: '張盛閎',
        time: new Date('2019/10/25 23:52'),
        preView: '在大數據文章中嵌入程式的幾個推....',
        clickCount: 20
      },
      {
        id: 2,
        fixed: false,
        category: '科學',
        title: '霍金說：「人類大腦可脫離人體而獨立存在..」思維複製到人工智慧上面,碳基生命進化為矽基生命,可行？',
        name: '張盛閎',
        amount: 100,
        time: new Date('2019/10/25 23:55'),
        clickCount: 1000
      }],
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
    },
    filterNew: function () {
      this.filterQuestions.sort(
        function (a, b) {
          return b.time - a.time
        }
      )
    },
    filterHot: function () {
      this.filterQuestions.sort(
        function (a, b) {
          return b.clickCount - a.clickCount
        }
      )
    }
  }
}
</script>
<style lang="scss">
.toBottom{
  margin-top: 50%;
  bottom: 0;
}
.header {
    color: #435058 !important;
}
.router-link{
  color: #435058 !important;
}
ol{
    font-family: 'Noto Sans TC';
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

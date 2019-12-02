<template>
  <div id="app">
    <!--<el-row>
      <ol class="menu_2">
        <li @click="filterHot()">熱門</li>
        <li @click="filterNew()">最新</li>
      </ol>
    </el-row>-->
    <h1 class="title-1">搜尋結果: {{search}}</h1>
    <el-row>
      <div v-for="(question ,x) in filterbysearch" :key="x">
        <router-link @click="saveQId(question.id)" class="router-link" :to="{ name: 'product', params: { id: question.id }}">
        <el-col :span="5" v-if="question.finished==true && x % 4 === 0">
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
            <h1 v-if="question.title.length <50" class="questionTitle">{{question.title}}</h1>
            <h1 v-else class="questionTitle">{{question.title.substring(0,50)}} ...</h1>
            <div class="toBottom">
              <h1 class="name">{{question.author_name}}</h1>
              <h1 class="name">{{question.time}}</h1>
              <div class="line"></div>
                <h1>最佳解答</h1>
                <h1>{{question.preView}}</h1>
              </div>
          </div>
        </el-col>
        <el-col :span="5" :offset="1" v-else-if="question.finished==true && x % 4 !== 0">
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
            <h1 v-if="question.title.length<50" class="questionTitle">{{question.title}}</h1>
            <h1 v-else class="questionTitle">{{question.title.substring(0,50)}} ...</h1>
            <div class="toBottom">
            <h1 class="name">{{question.author_name}}</h1>
            <h1 class="name">{{question.time}}</h1>
            <div class="line"></div>
            <h1>最佳解答</h1>
            <h1 v-if="question.preView<15">{{question.preView}}</h1>
            <h1 v-else>{{question.preView.substring(0,15)}}</h1>
            </div>
          </div>
        </el-col>
        <el-col :span="5" v-else-if="question.finished==false && x % 4 == 0">
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
            <h1 v-if="question.title.length<50" class="questionTitle">{{question.title}}</h1>
            <h1 v-else class="questionTitle">{{question.title.substring(0,50)}} ...</h1>
            <div class="toBottom">
            <h1 class="name">{{question.author_name}}</h1>
            <span><h1>NT {{question.totalAmount}}</h1><h1 class="name">{{ question.time }}</h1></span>
            </div>
          </div>
        </el-col>
        <el-col :span="5" :offset="1" v-else>
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
            <h1 v-if="question.title.length<50" class="questionTitle">{{question.title}}</h1>
            <h1 v-else class="questionTitle">{{question.title.substring(0,50)}} ...</h1>
            <div class="toBottom">
            <h1 class="name">{{question.author_name}}</h1>
            <span><h1>NT {{question.totalAmount}}</h1><h1 class="name">{{ question.time }}</h1></span>
            </div>
          </div>
        </el-col>
        </router-link>
      </div>
    </el-row>
  </div>
</template>

<script>
// import { url } from '../url'
export default {
  data: () => ({
    search: '2',
    isActive: [ false, false, false, false, false, false, false ],
    filterQuestions: []
  }),
  name: 'searchresult',
  created () {
    this.filterQuestions = this.$questions
    this.search = this.$search
  },
  computed: {
    filterbysearch: function () {
      return this.filterQuestions.filter((question) => {
        return question.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
/* method: {
    saveQId (id) {
      localStorage.setItem('questionId', id)
    }
  },
  mounted () {
    this.search = this.$search
    console.log('result: ' + this.$search)
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
            var temp = {}
            fetch(url + 'api/questions/' + String(data[i]), {
              method: 'get',
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(data => data.json().then(data => {
              if (Date(data.time) > Date.now()) {
                data.finished = true
              } else {
                data.finished = false
              }
              temp = data
            }))
            fetch(url + 'api/questions/' + String(data[i]) + 'donate', {
              method: 'get',
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(data => data.json().then(data => {
              temp.remainTime = 30
              temp.totalAmount = Math.floor(Math.random()) * 100
              this.$questions.push(temp)
              // console.log(temp)
            }))
          }
        })
      }
      )
  },
  created () {
    this.filterQuestions = this.$questions
  },
  methods: {
    displayCategory: function (filterCate) {
      this.filterQuestions = []
      for (var i = 0; i < this.$questions.length; i++) {
        if (this.$questions[i].category === filterCate) {
          this.filterQuestions.push(this.$questions[i])
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
  },
  computed: {
    filterbysearch: function () {
      return this.filterQuestions.filter((question) => {
        return question.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  } */
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
  color: #435058;
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
  margin: 1em 0 1em 0;
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

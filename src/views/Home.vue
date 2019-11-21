<template>
  <div>
    <el-row class="menu">
      <ol>
        <li>社會</li>
        <li>商業</li>
        <li>科技</li>
        <li>科學</li>
        <li>健康</li>
        <li>設計</li>
        <li>其他</li>
      </ol>
    </el-row>
    <el-row>
      <ol class="menu_2">
        <li>熱門</li>
        <li>最新</li>
      </ol>
    </el-row>
    <el-row>
      <div v-for="(question ,x) in questions" :key="x">
        <el-col :span="5" v-if="question.fixed==1">
          <div class="single-question">
            <h1 class="category"># {{question.category}}</h1>
            <h1 class="questionTitle">{{question.title}}</h1>
            <h1 class="name">{{question.name}}</h1>
            <h1 class="name">{{question.time}}</h1>
            <div class="line"></div>
            <h1>最佳解答</h1>
            <h1>{{question.preView}}</h1>
          </div>
        </el-col>
        <el-col :span="5" :offset="1" v-else>
          <div class="single-question">
            <h1 class="category">#{{question.category}}</h1>
            <h1 class="questionTitle">{{question.title}}</h1>
            <h1 class="name">{{question.name}}</h1>
            <span><h1>NT {{question.amount}}</h1><h1 class="name">{{question.time}}</h1></span>
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      questions: [{
        fixed: true,
        category: '科學',
        title: '霍金說：「人類大腦可脫離人體而獨立存在..」思維複製到人工智慧上面,碳基生命進化為矽基生命,可行？',
        name: '張盛閎',
        time: '2019/10/25 23:52',
        preView: '在大數據文章中嵌入程式的幾個推....'
      },
      {
        fixed: false,
        category: '科學',
        title: '霍金說：「人類大腦可脫離人體而獨立存在..」思維複製到人工智慧上面,碳基生命進化為矽基生命,可行？',
        name: '張盛閎',
        amount: 100,
        time: '2019/10/25 23:52'
      }]
    }
  }
}
</script>
<style lang="scss">
.header {
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

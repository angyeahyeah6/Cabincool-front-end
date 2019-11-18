<template>
<div id = "product">
    <el-row class="first-section">
      <el-col :span="18">
        <Question></Question>
      </el-col>
      <el-col :span="6">
        <Donate></Donate>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <Answer></Answer>
        <Respond></Respond>
      </el-col>
      <el-col :span="6">
        <AddOn></AddOn>
      </el-col>
    </el-row>
</div>
</template>

<script>
import Answer from '../components/product/Answer'
import Question from '../components/product/Question'
import Donate from '../components/product/Donate'
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
      answerdetail: {
        answerName: '李惟慈',
        answerOrder: 1,
        answerTime: '2019/02/04  23:52'
      },
      answerText: {
        answerDetail: '理解"可以 讓我們 控制自己的行為 得以讓我們 所理解的事物/行為可以變得更有效率. 例如說: 我們理解"燃燒過程" 所以我們可以製造機械來控制"燃燒過程" 讓它變得更有效率.',
        answerLink: 'https://medium.com/py…/inserting-code-in-medium-f1ebed3262e8'
      }
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
  color:#435058;
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
.grid-content {
  border-radius: 4px;
  min-height: 36px;
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

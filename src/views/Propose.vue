<template>
    <el-row>
        <form>
            <el-col :span="10">
                <div class="filling-area">
                    <h1 class="title-1">提問</h1>
                    <h1 class="title-2">問題標題</h1>
                    <input v-model="data.title" type="text" >
                    <h1 class="title-2">問題分類</h1>
                    <select @change="handleChange">
                        <option value="社會"> - </option>
                        <option value="社會">社會</option>
                        <option value="科學">科學</option>
                        <option value="科技">科技</option>
                        <option value="商業">商業</option>
                        <option value="健康">健康</option>
                        <option value="設計">設計</option>
                        <option value="其他">其他</option>
                    </select>
                    <h1 class="title-2">發問期間</h1>
                    <div style="margin-bottom: 10px; display: block;">
                        <p-radio v-model="data.remainTime" value="week" class="p-default p-round p-thick" name="time">一週</p-radio><br>
                        <p-radio v-model="data.remainTime" value="twiceWeek" class="p-default p-round p-thick" name="time">雙週</p-radio><br>
                        <p-radio v-model="data.remainTime" value="month" class="p-default p-round p-thick" name="time">一個月</p-radio>
                    </div>
                    <h1 class="title-2">問題內容</h1>
                    <input v-model="data.description" type="class" style="height: 150px;">
                </div>
            </el-col>
            <el-col :span="12" :offset="2">
                <el-row>
                    <el-col :span="16">
                        <div class="filling-area">
                            <h1 class="title-2" style="margin-top: 75px;">投票機制</h1>
                            <p-radio v-model="data.winRule" value=false class="p-default p-round p-thick" name="time">第一名獨得</p-radio><br>
                            <p-radio v-model="data.winRule" value=true class="p-default p-round p-thick" name="time">依 <img class="in-line" src="../assets/star.png"> 比例分配</p-radio><br>
                            <p-check v-model="data.haveBasicVote" class="p-switch p-default">允許訪客擁有1 <img class="in-line" src="../assets/star.png"> 投票權</p-check>
                        </div>
                        <div class="filling-area" style="margin-top:50px;">
                            <h1 class="title-2" style="display: inline; margin-right: 30px;">您要投</h1>
                            <h1 class="title-2" style="font-size: 36px;display: inline;">NT</h1>
                            <input v-model="inputAmount" type="number" class="money-input" autofocus>
                            <h1 class="title-2" style="margin-left: 90px;">= {{starAmount}} <img class="in-line" src="../assets/star.png"></h1>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="stepper-container">
                            <div class="stepper-line"></div>
                            <div style="margin-top:-220px;">
                                <div class="stepper-dot-now"></div>
                                <div class="stepper-dot"></div>
                                <div class="stepper-dot"></div>
                                <div class="stepper-dot"></div>
                            </div>
                        </div>
                        <div class="stepper-words">
                            <h1>提案</h1>
                            <h1>審核</h1>
                            <h1>發問</h1>
                            <h1>分配獎金</h1>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <router-link class="router-link" :to="{ name: 'payment'}">
                        <button @click="makeQuestion" class="submit-button" style="background: #435058; color:white;">下一步</button>
                        </router-link>
                        <button class="submit-button" hidden>儲存草稿</button>
                    </el-col>
                </el-row>
            </el-col>
        </form>
    </el-row>
</template>
<script>
import { url } from '../url'
export default {
  data () {
    return {
      inputAmount: '',
      starAmount: 0,
      data: {
        title: '',
        category: '',
        remainTime: '',
        description: '',
        winRule: '',
        haveBasicVote: false,
        voteAmmount: '',
        startAmount: ''
      }
    }
  },
  methods: {
    handleChange (e) {
    //   console.log(this.data.remainTime)
      if (e.target.options.selectedIndex > -1) {
        this.data.category = e.target.options[e.target.options.selectedIndex].value
      }
      console.log(this.data.title)
      console.log(this.data)
    },
    makeQuestion () {
      fetch(url + '/api/questions', {
        method: 'post',
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        body: this.data
      }).then(data => data.json().data)
        .then((data) => {
          for (var i; i <= data.length; i++) {
            fetch(url + '/api/questions' + data[i], {
              method: 'post'
            })
          }
        })
    }
  },
  watch: {
    inputAmount: function (newAmount, oldAmount) {
      this.starAmount = this.inputAmount / 5
      this.data.voteAmmount = this.inputAmount
      this.data.startAmount = this.inputAmount / 5
    }
    // title: function (newAmount, oldAmount) {
    //   this.data.title = newAmount
    //   console.log(this.data.title)
    // },
    // remainTime: function () {
    //   console.log(this.remainTime)
    //   //   this.data.remainTime = e.target
    //   console.log(this.data.remainTime)
    // }
  }
}
</script>
<style lang="scss">
@import '~pretty-checkbox/src/pretty-checkbox.scss';
.submit-button{
    float:right;
    height:50px;
    border: 2px solid #435058;
    box-sizing: border-box;
    width: 160px;
    margin: 10px;
    margin-top:70px;
    &:hover {
        cursor: pointer;
    }
}
.stepper-words{
    margin-top:75px;
    float: right;
    margin-right:-90px;
    h1{
        margin-bottom: 50px;
    }
}
.stepper-container{
    margin-top: 75px;
    float:right;
    .stepper-dot-now{
        width: 16px;
        height:16px;
        border-radius: 50%;
        background: #435058;
        margin-bottom:50px;
    }
    .stepper-dot{
        width: 16px;
        height:16px;
        border-radius: 50%;
        background: #C6F4F1;
        margin-bottom: 50px;
    }
    .stepper-line{
        border-left: 1px solid #07BAC5;
        height:200px;
        margin:8px;
    }
}

.p-default{
    margin-bottom: 20px;
    margin-top:15px;
}
p-radio{
    width:10px;
    border: 2px solid #435058;
    box-sizing: border-box;
    color: #435058;
}
.el-row {
  padding-left: 100px;
  padding-right:100px;
}
.filling-area{
    color: #435058;
    .money-input{
        border: transparent;
        height: 100px;
        background: transparent;
        border: none;
        outline: none;
        margin: 10px;
        margin-left:160px;
        font-size: 96px;
        color:#435058;
    }
    .title-1{
        font-size: 24px;
        line-height: 35px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .title-2{
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 5px;
    }
    input{
        margin-bottom: 5%;
        width: 100%;
        height:40px;
        background: #FBFBFB;
        border: 2px solid #435058;
        box-sizing: border-box;
        outline: none;
        &:focus{
            background: white;
        }
    }
    select{
        margin-bottom: 5%;
        width: 100%;
        height:40px;
        background: #FBFBFB;
        border: 2px solid #435058;
        box-sizing: border-box;
    }
}
.in-line{
    width: 15px;
    height: 15px;
}
</style>

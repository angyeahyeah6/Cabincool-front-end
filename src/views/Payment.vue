<template>
<div>
    <el-row>
        <el-col :span="11">
            <h1 class="title-3">信用卡付款</h1>
            <div class="pay-container">
                <h1 class="title-2">卡號</h1>
                <input v-model="card.cardNo" type="text" class="input-1">
                <div class="block-0">
                    <div class="block-1">
                        <h1 class="title-2" style="margin-top:40px; width:50%;">有效日期</h1>
                        <input v-model="card.validYear" type="text" class="input-1" style="display: inline; width:40%;">
                        <h1 class="title-2" style="display: inline; font-size:30px;"> / </h1>
                        <input v-model="card.validMonth" type="text" class="input-1" style="display: inline; width:40%;">
                    </div>
                    <div class="block-1" style="float:right; width:40px"></div>
                    <div class="block-1">
                        <h1 class="title-2" style="margin-top:40px; width:60%;">背面末三碼</h1>
                        <input v-model="card.securityCode" type="text" class="input-1" style="display: inline; width:90%;">
                    </div>
                </div>
                <!-- <router-link class="router-link" :to="{ name: 'questionList'}"> -->
                <button @click="makeDonateCard" class="submit-button-1">下一步</button>
                <!-- </router-link> -->
            </div>
        </el-col>
        <el-col :span="2">
            <div style="margin-top:100px;">
            <h1 class="title-2" >或</h1>
            <div class="verti-line"></div>
            </div>
        </el-col>
        <el-col :span="11">
            <h1 class="title-3">超商代碼繳費</h1>
            <div class="pay-container" style="padding:80px;">
                <h1 class="title-2" style="text-algin:center; margin-bottom: 50px;">請至ibon機臺輸入代碼，產生繳費單後至櫃檯繳費</h1>
                <h1 class="title-2">ibon代碼</h1>
                <input type="text" class="input-2" value="LLL123 456 789 999" disabled>
                <h1 class="title-2" style="margin-top:20px;">繳費期限</h1>
                <input type="text" class="input-2" value="2019-11-14" disabled>
                <!-- <router-link class="router-link" :to="{ name: 'questionList'}"> -->
                <button @click="makeDonateIbon" class="submit-button-1" style="margin-top:30px;">下一步</button>
                <!-- </router-link> -->
            </div>
        </el-col>
    </el-row>
</div>
</template>
<script>
import { url } from '../url'
import { router } from '../router/index'
export default {
  name: 'Payment',
  mounted: function () {
    console.log('hhh')
  },
  data () {
    return {
      card: {
        type: 'CreditCard',
        cardNo: '',
        validYear: '',
        validMonth: '',
        securityCode: ''
      },
      ibon: {
        type: 'ibon',
        code: 'LLL123 456 789 999',
        validTime: '2019-11-14'
      }
    }
  },
  method: {
    makeDonateCard () {
      fetch(url + 'api/questions/' + this.$route.params.id + '/donate', {
        method: 'post',
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        body: this.card
      }).then(router.push('questionList/'))
    },
    makeDonateIbon () {
      fetch(url + 'api/questions/' + this.$route.params.id + '/donate', {
        method: 'post',
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        body: this.ibon
      })
    }
  },
  watch: {
  }
}
</script>
<style lang="scss">
.verti-line{
    border-left:1px #435058 solid;
    height: 400px;
    margin-top: 50px;
    margin-left: 10px;
}
.title-3{
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    margin-top: 100px;
    color: #435058;
}
.block-0{
    display: flex;
}
.block-1{
    width: 60%;
    height: 200px;
}
.pay-container{
    padding:100px;
    margin-top: -50px;

}
.input-2{
    padding: 10px;
    margin-bottom: 5%;
    width: 100%;
    height:25px;
    background: #C6F4F1;
    outline: none;
    border: transparent;
    &:focus{
        background: white;
    }
    // &:valid{
    //   background: #C6F4F1;
    // }
}
.input-1{
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
    // &:valid{
    //   background: #C6F4F1;
    // }
}
.submit-button-1{
    text-align:center;
    height:50px;
    border: 2px solid #435058;
    box-sizing: border-box;
    width: 160px;
    margin: auto;
    display: block;
    background: #435058;
    color:white;
    &:hover {
        cursor: pointer;
    }
}
</style>

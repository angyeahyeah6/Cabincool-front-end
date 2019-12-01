<template>
<v-layout>
    <div class="respond-container">
        <div class="black-header">
            <img src="../../assets/selfie.png">
            <h1>{{this.userName}}</h1>
        </div>
        <div class="description">
            <input v-model="description" type="text" placeholder="  說明">
        </div>
        <div class="web-link">
            <input v-model="link" type="text" placeholder="  網址" style="height:25%;">
            <button class="submit-button-1" @click='makeRespond'>傳送</button>
        </div>
    </div>
    </v-layout>
</template>
<script>
// import { url } from '../../url'
// import router from '../../router'
export default {
  // mounted:{
  // },
  data: function () {
    return {
      userName: localStorage.getItem('userName'),
      description: '',
      link: ''
    }
  },
  props: {
    qid: {
      type: Number
    }
  },
  computed: {
  },
  method: {
    makeRespond () {
      console.log('product/' + this.$route.id)
      // fetch(url + 'api/questions/' + this.$route.params.id + '/answers', {
      //   method: 'post',
      //   headers: new Headers({
      //     'Authorization': 'Bearer ' + localStorage.getItem('token'),
      //     'Content-Type': 'application/json'
      //   }),
      //   body: JSON.stringify({
      //     'Name': localStorage.getItem('userName'),
      //     'description': this.description,
      //     'link': this.link
      //   })
      // })
      // router.push('questionList/' + this.$route.id)
    }
  }
}
</script>
<style lang="scss">
input{
  outline: none;
}
.respond-container{
    height: 500px;
    background :white;
    margin-top:50px;
    border: 1px solid #435058;
    .black-header{
        height: 78px;
        width:100%;
        background:#435058;
        img{
            margin:2%;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: inline;
        }
        h1{
            display: inline;
            color: white;
            vertical-align: 30px;
        }
    }
    .description{
        height:60%;
        width:100%;
        border-bottom:1px solid #435058;
    }
    .web-link{
        height:30%;
        width:100%;
    }
    input{
        width:99%;
        height:50%;
        border:transparent;
    }
}

</style>

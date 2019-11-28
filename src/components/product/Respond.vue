<template>
    <div class="respond-container">
        <div class="black-header">
            <img src="../../assets/selfie.png">
            <h1>{{userName}}</h1>
        </div>
        <div class="description">
            <input type="text" placeholder="  說明">
        </div>
        <div class="web-link">
            <input type="text" placeholder="  網址" style="height:25%;">
            <router-link class="router-link" :to="{ name: 'product', params: { id: qid }}">
              <button class="submit-button-1" style="float:right; margin-right:20px;" @click="reload">傳送</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  // mounted:{
  // },
  props: {
    qid: {
      type: Number
    }
  },
  computed: {
    ...mapState({
      userName: state => state.userName
    })
  },
  method: {
    reload () {
      window.location.reload()
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
        height:40%;
        width:100%;
    }
    input{
        width:99%;
        height:50%;
        border:transparent;
    }
}

</style>

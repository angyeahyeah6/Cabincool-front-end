<template>
    <div class="question-container">
        <div class="name_container">
          <img v-bind:src="this.question.avator_url">
          <h1 class="name">{{this.question.author_name}}</h1>
          <h2 class="time">{{this.question.time}}</h2>
          <h1 class="category" style="margin-left: 600px;"># {{this.question.category}}</h1>
        </div>
        <br>
        <div class="title">
          <h1>{{this.question.title}}</h1>
          <h2>
            {{this.question.description}}
          </h2>
        </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import { url } from '../../url'
export default {
  props: {
    question: {
      type: Object
    }
  },
  mounted: {

  },
  data () {
    return {
      mgSrc: '../../assets/selfie.png'
    }
  },
  method: {
    getSinQues () {
      fetch(url + '/api/questions/' + this.question.id, {
        method: 'get',
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        })
      }).then((data) => {

      })
    }
  }
}
</script>
<style lang="scss">
.question-container{
  margin: auto;
  height: 400px;
  display: block;
  .name_container{
    display: flex;
    margin-top:5%;
    img{
      // width:50px;
      height:50px;
      padding: 10px;
      border-radius: 50%;
    }
    .name{
      width: 50%;
      font-size: 18px;
      margin: 2% 0 2% 0;
    }
    .time{
      width: 50%;
      color: grey;
      font-size: 15px;
      margin: 2% 0 2% 0;
    }
    .category{
      width: 50%;
      position:relative;
      font-size: 18px;
      margin-top:2% 0 2% 0;
      align-self: right;
      padding:8px;
    }
  }
  .title{
    display: block;
    height:75%;
    h1{
      font-size: 24px;
      margin:1%;
      font-family: 'Noto Serif TC';
      font-style: normal;
      font-weight: normal;
      line-height: 34px;
    }
    h2{
      margin-top:4%;
      padding-left:1%;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
    }
  }
}
</style>

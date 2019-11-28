<template>
    <div class="question-container">
        <div class="name_container">
          <img src="../../assets/selfie.png">
          <h1 class="name">{{this.question.questionOwner}}</h1>
          <h2>{{questionTime}}</h2>
          <h1 class="category" style="margin-left: 600px;"># {{this.question.questionCategory}}</h1>
        </div>
        <br>
        <div class="title">
          <h1>{{this.question.questionTitle}}</h1>
          <h2>
            {{this.question.questionDescription}}
          </h2>
        </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  props: {
    question: {
      type: Object
    }
  },
  data () {
    return {
    }
  }
  // computed: {
  //   ...mapState({
  //     userName: state => state.userName
  //   })
  // }
}
</script>
<style lang="scss">
.question-container{
  margin: auto;
  height:400px;
  display: block;
  .name_container{
    display: flex;
    height:25%;
    margin-top:5%;
    img{
      width:50px;
      height:50px;
      padding:8px;
      border-radius: 50%;
    }
    .name{
      font-size: 18px;
      margin-top:2%;
      padding:8px;
    }
    h2{
      color: grey;
      font-size: 15px;
      margin-top:2%;
      padding:8px;
    }
    .category{
      position:relative;
      font-size: 18px;
      margin-top:2%;
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

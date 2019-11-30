<template>
  <div class="answer-background">
    <div style="display: block;">
    <img src="../../assets/star.png" class="voteStar" @click="addStar">
    <h1 class="voteNum">{{this.answer.starAmount}}</h1>
    </div>
    <div class="answer-container">
        <div class="ans-name_container">
          <img src="../../assets/selfie.png">
          <h1 class="ans-name">{{this.answer.name}}</h1>
          <h1 class="ans-name"># {{this.answer.answerOrder}}</h1>
          <h2>{{this.answer.time}}</h2>
        </div>
        <br>
        <div class="ans-text">
          <h1 class="detail">{{this.answer.description}}</h1>
          <h2>
            <a href="">{{this.answer.link}}</a>
          </h2>
          <h1 class="ans-des">
              <linkPrevue v-bind:url="answer.link"></linkPrevue>
          </h1>
        </div>
    </div>
  </div>
</template>
<script>
import linkPrevue from '../LinkPreview'
export default {
  name: 'Answer',
  components: {
    linkPrevue
  },
  props: {
    answer: {
      type: Object
    }
  },
  methods: {
    addStar: function () {
      this.answer.starAmount += 1
      fetch('/api/questions/' + this.$route.params.id + '/answers/' + this.answer.id + '/vote', {
        method: 'post',
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ 'voteStar': 1 })
      })
    }
  }
}
</script>

<style lang="scss">
.voteNum{
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #71C9CE;
  text-align: center;
}
.answer-background {
  font-size: 18px;
  position: relative;
  height:50%;
  line-height: 24px;
  margin: 3em 0 3em 0;
  display: flex;
  .answer-container{
    height:100%;
    margin: 0em 0.5em 0 1em;
    display: block;
    .ans-name_container{
      display: flex;
      width:100%;
      height:25%;
      img{
        width:50px;
        height:50px;
        padding:8px;
        border-radius: 50%;
      }
      .ans-name{
        font-size: 18px;
        margin-top:4%;
        padding-right: 10px;
        color:#435058;
      }
      h2{
          margin-top:4%;
          color:#848C8E;
      }
    }
    .ans-text{
      color:black;
      .detail{
        padding-top:2%;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
      }
    }
    h2{
        a{
            color: #435058;
            padding-top:2%;
        }
        font-size: 15px;
    }
    .ans-des{
        color:#1B858B;
        font-size: 18px;
        padding-top:1%;
    }
  }
}
.voteStar{
  width:40px;
  height:40px;
  cursor: pointer;
}
</style>

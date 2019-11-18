<template>
  <div class="answer-background">
    <div class="answer-container">
        <div class="ans-name_container">
          <img src="../../assets/selfie.png">
          <h1 class="ans-name">{{answerName}}</h1>
          <h1 class="ans-name">#1</h1>
          <h2>2019/02/04  23:52</h2>
        </div>
        <br>
        <div class="ans-text">
          <h1 class="detail">
              理解"可以 讓我們 控制自己的行為 得以讓我們 所理解的事物/行為可以變得更有效率. 例如說: 我們理解"燃燒過程" 所以我們可以製造機械來控制"燃燒過程" 讓它變得更有效率.
          </h1>
          <h2>
            <a href = "https://medium.com/py…/inserting-code-in-medium-f1ebed3262e8">
            https://medium.com/py…/inserting-code-in-medium-f1ebed3262e8
            </a>
          </h2>
          <h1 class="ans-des">
              <a>
                  在文章中嵌入程式的幾個推薦方式
              </a>
          </h1>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Answer'
  // props: {
  //   id: {
  //     type: Object,
  //     default: ''
  //   }
  // }
}
</script>

<style lang="scss">
.answer-background {
  font-size: 18px;
  position: relative;
  height:200px;
  line-height: 24px;
  .answer-container{
    margin: auto;
    height:100%;
    margin-top:1%;
    display: block;
    .ans-name_container{
      display: flex;
      width:90%;
      height:25%;
      img{
        width:50px;
        height:50px;
        margin-top:1%;
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
</style>

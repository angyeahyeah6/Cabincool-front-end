<template>
  <div class="answer-background">
    <div class="answer-container">
        <div class="ans-name_container">
          <img src="../assets/selfie.png">
          <h1 class="ans-name">李惟慈</h1>
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
}
</script>

<style lang="scss">
.answer-background {
  font-size: 18px;
  position: relative;
  margin:50px;
  left: 0;
  right: 0;
  height:200px;
  line-height: 24px;
  .answer-container{
    margin: auto;
    width:97%;
    height:100%;
    margin-right:10%;
    margin-left:13%;
    margin-top:1%;
    display: block;
    // background: red;
    .ans-name_container{
      display: flex;
      width:90%;
      height:25%;
      // background: green;
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
        padding-left: 10px;
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
    }
    h2{
        a{
            color: #435058;
        }
        font-size: 15px;
    }
    .ans-des{
        color:#1B858B;
        font-size: 18px;
    }
  }
}
</style>

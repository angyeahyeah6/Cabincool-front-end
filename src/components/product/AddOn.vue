<template>
    <div class="add_on_container">
        <div class="add_on_title">
            <h1 class="add_on-text">附加問題</h1>
            <h1 class="amount">NT$ {{this.addOn.addOnAmount}}</h1>
        </div>
        <div class="line"></div>
        <h2 class="add_on_des">{{this.addOn.addOnDes}}</h2>
    </div>
</template>
<script>
export default {
  props: {
    addOn: {
      type: Object
    }
  }
}
</script>
<style lang="scss">
.add_on_container{
    float: right;
    background:white;
    border: 1px solid #435058;
    width: 265px;
    height: 464px;
    margin-top:50px;
    .add_on_title{
        font-family: 'Noto Sans TC';
        display:flex;
        .add_on-text{
            margin:20px;
            font-size: 18px;
        }
        .amount{
            font-size: 24px;
            margin: 20px;
            margin-left:30px;
        }
    }
    h1{
        line-height: 26px;
        display: flex;
        color: #435058;
    }
    .line{
        border: 0.5px solid #435058;
        width: 265px;
    }
    .add_on_des{
        font-size: 18px;
        line-height: 26px;
        text-align: justify;
        margin:15px;
    }
}
</style>

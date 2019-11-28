<template>
<div>
  <img src="../assets/banner.png" >
  <h1>每個奇思異想都直得專家細心回答</h1>
  <h1>Cabincool 幫您媒合各領域的專家。只需要提出您的奇思異想以及付出少量的金額，我們就會幫您媒合有興趣的專家並鼓勵他們來回答問題以賺取獎金！ 透過綠界金融更使在 Caboncool 上的付款、取款流程達到前所未有的簡便</h1>
  <router-link class="router-link" :to="{ name: 'questionList'}">
    <button class="submit-button-1" style="">看看其他人都問了什麼</button>
  </router-link>
</div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang="scss">
</style>

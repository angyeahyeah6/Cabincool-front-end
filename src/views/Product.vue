<template style="color: white;">
<div>
  <section class="first-section">
    <Question></Question>
    <Donate></Donate>
  </section>
  <section class="second-section">
  <div class="answer_block">
    <Answer></Answer>
    <Answer></Answer>
  </div>
  <div class="addOn_block">
    <AddOn></AddOn>
  </div>
  </section>
</div>
</template>

<script>
import Answer from '../components/Answer'
import Question from '../components/Question'
import Donate from '../components/Donate'
import AddOn from '../components/Add-on'
export default {
  name: 'product',
  components: {
    Answer,
    Question,
    Donate,
    AddOn
  }
}
</script>
<style lang="scss">
$nav-height: 56px;
.first-section{
  display: flex;
  color:white;
}
.second-section{
  display: flex;
}
.answer_block{
  display: block;
  color:white;
}
// .header {
//   background:#435058 !important;
//   color: white;
//   .search {
//     &__input {
//       background: #435058;
//     }
//   }
// }
</style>

<template>
  <button class="login-btn">
    使用<img
      class="login-btn__logo"
      src="../assets/google-login.png"
    >登入
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.login-btn {
  display: flex;
  align-items: center;
  margin-left: 22px;
  padding: 10px 16px;
  border: 2px solid #435058;
  z-index: 1;
  outline: none;
  transition: 0.2s;
  &:hover {
    background: #848c8e;
    border: 2px solid #848c8e;
    color: white;
  }
  &:active {
    background: #435058;
    border: 2px solid #435058;
    color: white;
  }
  &__logo {
    width: 15px;
    padding: 0 8px;
  }
}
</style>

<template>
  <button class="login-btn">
    使用登入
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.login-btn {
  margin-left: 22px;
  padding: 10px 16px;
  border: 2px solid #435058;
  z-index: 1;
  &:hover {
    background: #848c8e;
    border: 2px solid #848c8e;
    color: white;
  }
  &:focus {
    background: #435058;
    border: 2px solid #435058;
    color: white;
    outline: none;
  }
}
</style>

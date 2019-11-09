<template>
  <button v-google-signin-button="clientId" class="login-btn">
    使用<img
      class="login-btn__logo"
      src="../assets/google-login.png"
    >登入</button>
</template>
<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: '149578749039-8ki9dmmfnod66fl59hd6mduedr3rvre3.apps.googleusercontent.com'
  }),
  methods: {
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      this.$alert(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-btn {
  display: flex;
  align-items: center;
  margin-left: 22px;
  padding: 6.5px 10px;
  border: 2px solid #435058;
  background: white;
  z-index: 1;
  outline: none;
  transition: 0.2s;
  color:black !important;
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

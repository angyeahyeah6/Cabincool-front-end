
<template>
  <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin>
</template>

<script>
import GoogleLogin from 'vue-google-login'
const CLIENT_ID = '149578749039-8ki9dmmfnod66fl59hd6mduedr3rvre3.apps.googleusercontent.com'
export default {
  data () {
    return {
      params: {
        client_id: CLIENT_ID
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    onSuccess (googleUser) {
      console.log(googleUser)
    },
    onFailure (err) {
      console.log(err)
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

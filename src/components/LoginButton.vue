<template>
  <button @click="signin" class="login-btn">
    使用<img
      class="login-btn__logo"
      src="../assets/google-login.png"
    >登入</button>
</template>

<script>
// import Vuex from 'vuex'
import firebase from 'firebase'
import { url } from '../url'
export default {
  data: () => ({
  }),
  methods: {
    // signin () {
    //   this.$gAuth
    //     .signIn()
    //     .then(GoogleUser => {
    //       console.log(GoogleUser)
    //     })
    //     .catch(err => {
    //       console.error(err)
    //     })
    // }
    signin () {
      console.log('inside')
      firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
        fetch(url + 'api/login', {
          method: 'post',
          body: JSON.stringify({
            'idToken': idToken
          })
        })
          .then(data =>
            fetch('wasay.site/api/users/info', {
              method: 'post',
              headers: new Headers({
                'Authorization': 'Bearer ' + data.json().data,
                'Content-Type': 'application/json'
              }) })
          )
      })
        .catch(function (error) {
          alert(error)
        })
    }
  }
}
</script>

<style lang="scss">
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

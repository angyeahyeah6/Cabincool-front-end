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
    clientId: '149578749039-8ki9dmmfnod66fl59hd6mduedr3rvre3.apps.googleusercontent.com',
    token: ''
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
    async signin () {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log(result.credential)
        if (result.credential) {
          var token = result.credential.idToken
          fetch(url + 'api/login', {
            method: 'post',
            body: JSON.stringify({
              'idToken': token
            }),
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then(data =>
            fetch(url + 'api/users/info', {
              method: 'post',
              headers: new Headers({
                'Authorization': 'Bearer ' + data.json().data.token,
                'Content-Type': 'application/json'
              })
            }).catch(
              function (error) {
                alert(error.code)
              }
            ).then(data => data.json().data)
              .then((data) => {
                localStorage.setItem('userName', data.userName)
                localStorage.setItem('photo', data.profilePhoto)
                localStorage.setItem('token', data.token)
              })
          )
        }
      })
    }
  }
}

// firebase.auth().signInWithRedirect(provider)
// firebase.auth().currentUser.getIdToken().then(function (idToken) {
//   console.log(idToken)
// })
//   } else {
//     console.log(this.idToken)
//   }
// }).catch(function (error) {
//   alert(error.code)
// })
//   }
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

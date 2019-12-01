<template>
  <header class="header">
    <div class="search">
      <input
        class="search__input"
        type="text"
        placeholder="Search"
        autocomplete="off"
      >
      <span class="search__icon mdi mdi-magnify"></span>
    </div>
    <router-link class="router-link" :to="{ name: 'home'}">
    <a
      class="title"
    ><img src="../assets/cabincool-logo.png" width="17%"></a></router-link>
    <ol class="nav">
      <li class="nav-word">
        <router-link class="router-link" :to="{ name: 'propose'}">
        <a>提問</a>
        </router-link>
      </li>
      <li class="nav-word">
        <router-link class="router-link" :to="{ name: 'questionList'}">
        <a>探索</a>
        </router-link>
      </li>
    </ol>
    <LoginButton></LoginButton>
  </header>
</template>

<script>
import LoginButton from '@/components/LoginButton'
export default {
  background: 'blue',
  components: {
    LoginButton
  }
}
</script>
<style lang="scss">
$nav-height: 56px;
.header {
  color:white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: $nav-height;
  width: 100%;
  padding: 0 100px;
  padding-bottom: 0;
  background: white;
  box-shadow: 0px 0px 10px #aaa;
  .search {
    display: flex;
    height: 100%;
    position: absolute;
    left: 100px;
    right: 100px;
    &__icon {
      position: absolute;
      left: 16px;
      top: 0;
      font-size: 24px;
      z-index: 11;
      line-height: $nav-height;
    }
    &__input {
      box-sizing: border-box;
      width: 45%;
      z-index: 11;
      background: transparent;
      padding-left: 48px;
      border: none;
      outline: none;
      background-image: linear-gradient(
        to right,
        #c6f4f1 75%,
        rgba(255, 255, 255, 0)
      );
      transition: width 0.3s, background 0.15s 0.15s;
      &:focus {
        width: 100%;
        background-color: #c6f4f1;
        color: black;
        &::placeholder {
          color: black;
        }
        & + .search__icon {
          color: black;
        }
      }
    }
  }

  .title {
    position: absolute;
    left: 46%;
    bottom:20%;
  }
  .nav {
    display: flex;
    list-style: none;
    padding: 0;
    margin-left: auto;
    z-index: 1;

    a {
      color: black;
      line-height: $nav-height;
      padding: 0 22px;
      text-decoration: none;
    }
  }
  .nav-word{
    padding: 0;
    margin: 0
  }
}
</style>

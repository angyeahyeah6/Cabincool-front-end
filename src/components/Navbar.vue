<template>
  <header class="header">
    <div class="search">
      <input
        class="search__input"
        type="text"
        autocomplete="off"
      >
      <span class="search__icon mdi mdi-magnify"></span>
    </div>
    <a
      href=""
      class="title"
    >Cabincool</a>
    <ol class="nav">
      <li>
        <a href="">提問</a>
      </li>
      <li>
        <a href="">探索</a>
      </li>
    </ol>
    <login-button></login-button>
  </header>
</template>

<script>
import LoginButton from '@/components/LoginButton'

export default {
  components: {
    LoginButton
  }
}
</script>

<style scoped lang="scss">

$nav-height: 56px;

.header {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: $nav-height;
  width: 100%;
  padding: 0 10%;
  background: white;
  box-shadow: 0px 0px 10px #aaa;
  .search {
    display: flex;
    height: 100%;
    position: absolute;
    left: 10%;
    right: 10%;
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
      width: 40%;
      z-index: 11;
      background: transparent;
      padding-left: 48px;
      border: none;
      outline: none;
      background-size: 200% 100%;
      background-position: 100% 0;
      background-image: linear-gradient(
        to right,
        #c6f4f1 66%,
        rgba(255, 255, 255, 0)
      );
      transition: width 0.5s, background 0.3s 0.3s;
      &:focus {
        width: 100%;
        background-color: #c6f4f1;
      }
    }
  }
  .title {
    position: absolute;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-decoration: none;
    color: #435058;
    z-index: 10px;
  }
  .nav {
    display: flex;
    list-style: none;
    padding: 0;
    margin-left: auto;
    z-index: 1;

    a {
      line-height: $nav-height;
      padding: 0 22px;
      text-decoration: none;
    }
  }
}
</style>

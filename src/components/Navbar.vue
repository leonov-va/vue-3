<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')"><b>Vue 3</b></div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/about')"
        >О Сайте</my-button
      >
      <my-button
        style="margin-left: 20px"
        @click="$router.push('/posts-with-store')"
        >Посты (с использованием vuex)</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
.navbar {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
}
.navbar__btns {
  margin-left: auto;
}
</style>

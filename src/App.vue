<template>
  <navbar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  overflow: hidden;
  padding: 28px;
}
.observer {
  height: 30px;
  background-color: green;
}
</style>

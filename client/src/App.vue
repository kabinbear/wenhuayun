<template>
  <div id="app">
    <router-view to="home">home</router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  component:{}
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>

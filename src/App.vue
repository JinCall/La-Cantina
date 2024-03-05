<template>
  <OptionMenu/>
</template>

<script>
/* eslint-disable */
import OptionMenu from './components/OptionMenu.vue';
export default {
  name: "App",
  components: {
    OptionMenu
}

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  background-image: radial-gradient(#e6e6e6 2px, transparent 2px);
  background-size: 45px 45px;
  font-family:HelveticaNeue,Helvetica Neue,helvetica,Sans-Serif;
  z-index: -1;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(189, 211, 224, 0.4);
  /* margin-top: 60px; */
}

:focus {
  outline: none;
}
/* .tns-item:nth-child(odd) {  
  background: #c8e1ff;
} */
</style>

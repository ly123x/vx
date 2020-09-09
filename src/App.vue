<template>
  <div id="app">
    <list-one v-bind:frames="frames"></list-one>
    <list-two v-bind:frames="frames"></list-two>
  </div>
</template>
<script>
import ListOne from "./components/list-one";
import ListTwo from "./components/list-two";
export default {
  name:'app',
  components:{
  "list-one": ListOne,
  "list-two": ListTwo
  },
  data(){
    return{
      frames:[
        {name:'Vue.js',star:15},
        {name:'React.js',star:13},
        {name:'Angular.js',star:12}
      ]
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul li{
  list-style: none;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

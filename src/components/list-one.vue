<template>
  <div id="list-one">
    <h2>框架排行(组件one)</h2>
    <ul>
      <li v-for="(frame, index) in frames" :key="index">
        <span class="name">{{frame.name}}</span>
        <span class="star">{{frame.star }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "Vuex";
export default {
  name: "list-one"
  
}
</script>

<style>
#list-one {
  background-color: #ffec44;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#list-one ul {
  padding: 0;
}
#list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background-color: rgba(225, 225, 225, 0.7);
}
.star {
  font-weight: bold;
  color: #e829cc;
}
</style>

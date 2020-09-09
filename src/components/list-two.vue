<template>
  <div id="list-two">
    <h2>框架排行(组件Two)</h2>
    <ul>
      <li v-for="(frame, index) in frames" :key="index">
        <span class="name">{{frame.name}}</span>
        <span class="star">{{frame.star}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "list-two"
}
</script>

<style>
#list-two {
  background-color: #b7fcff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#list-one ul {
  padding: 0;
  list-style-type: none;
}
#list-one li {
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

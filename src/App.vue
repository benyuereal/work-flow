<template>
  <div id="app">
    <div class="nav">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <ul>
        <!--<li><router-link to="/entrance">Entrance</router-link></li>-->
        <!--<li><router-link to="/procedure">Procedure</router-link></li>-->
        <!--<li><router-link to="/node">Node</router-link></li>-->
        <!--<li><router-link to="/entrance-procedure">Entrance-Procedure</router-link></li>-->
        <li><router-link to="/element-test">Element-Test</router-link></li>
        <li><router-link to="/entrance-test">entrance-Test</router-link></li>
        <li><router-link to="/node-test">node-Test</router-link></li>
        <li><router-link to="/execution">execution</router-link></li>






      </ul>
    </div>
    <!-- 路由匹配到的组件将渲染在这里 -->

    <router-view></router-view>

      </div>
</template>

<script>


  export default {


    name: 'app',
    data() {
      return {

      }

    },


  }


</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }



  h1, h2 {
    font-weight: normal;
    font-size: 18px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }


  a {
    color: #42b983;
  }



</style>

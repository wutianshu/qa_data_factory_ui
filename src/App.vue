<template>
  <div id="app">
    <div class="com-head">
      <NavMenu></NavMenu>
    </div>
    <div class="com-body">
      <!--<el-row>-->
        <!--<el-col :span="4"><div class="grid-content bg-purple-dark"></div></el-col>-->
        <!--<el-col :span="16"><router-view/></el-col>-->
        <router-view/>
        <!--<el-col :span="4"><div class="grid-content bg-purple-dark"></div></el-col>-->
      <!--</el-row>-->
    </div>
    <div class="com-footer">
      <div class="com-footer-content">
        <!--<span>&简化测试，效率至上&</span>-->
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Tools from '@/page/tools'
export default {
  name: 'App',
  components: {Tools, NavMenu}
}
</script>

<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--/*margin-top: 60px;*/-->
<!--}-->
<!--</style>-->

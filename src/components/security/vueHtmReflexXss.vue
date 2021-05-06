<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>v-html</span>
          </div>
          <el-input v-model="src" placeholder="请输入内容"></el-input>
          <div v-html="src"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: '<a href="http://www.baidu.com" target="_blank">链接</a>'
      // <img src='1.jpg' onerror="alert(1)">
    }
  }
}
</script>

<style scoped>

</style>

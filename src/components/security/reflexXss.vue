<template>
    <div>
      <el-row>
      <el-col :span="16" :offset="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>反射型xss</span>
          </div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="查询内容">
              <el-input v-model="formInline.info" placeholder="查询内容"></el-input>
            </el-form-item>
            <!--<el-form-item>-->
              <!--<el-button type="primary" @click="onSubmit">查询</el-button>-->
            <!--</el-form-item>-->
            <!--<el-form-item>-->
              <!--<el-button type="primary" @click="formReset">重置</el-button>-->
            <!--</el-form-item>-->
          </el-form>
          <span>您查询的是：{{ formInline.info }}</span>
        </el-card>
      </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
  name: 'reflexXss',
  data () {
    return {
      formInline: {info: ''}
    }
  }
}
</script>

<style scoped>

</style>

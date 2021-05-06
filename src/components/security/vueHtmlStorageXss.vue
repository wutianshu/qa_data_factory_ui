<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card class="box-card" v-loading="loading">
          <div slot="header" class="clearfix">
            <span>v-html存储型xss</span>
          </div>
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="输入id" prop="id">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">查询</el-button>
            <el-button  @click="formInit('form')">重置</el-button>
          </el-form-item>
        </el-form>
          <el-alert
            v-if="alertInfo.isShow"
            :title="alertInfo.txt"
            :type="alertInfo.type"
            center
            show-icon>
          </el-alert>
          <el-card class="box-card">
           <el-row :gutter="20" class="el-row">
             <el-col :span="12">
               <div>活动名称：</div>
               <div v-html="res.name"></div>
              <!--<el-input v-html="res.name" disabled>-->
                <!--<template slot="prepend">code</template>-->
              <!--</el-input>-->
             </el-col>
             <el-col :span="12">
               <div>返回结果：</div>
               <div v-html="res.returnInfo"></div>
              <!--<el-input v-model="res.returnInfo" disabled>-->
                <!--<template slot="prepend">info</template>-->
              <!--</el-input>-->
             </el-col>
           </el-row>
         </el-card>
    </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        id: 3
      },
      res: {name: '', returnInfo: ''},
      loading: false,
      alertInfo: {isShow: false, type: 'fail', txt: ''},
      interResult: 'success',
      rules: {
        id: [
          { required: true, message: '数字，必填项', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form)
          this.loading = true
          this.alertInfo = {isShow: false, type: 'fail', txt: ''}
          axios({
            method: 'get',
            url: '/tools/getPromotion/?id=' + this.form.id // 访问vue的8080端口，在config/index.js中设置转发到8000端口，并设置不跨域
          })
            .then(response => {
              if (response.data.returnCode === 0) {
                this.formInit('form')
                this.loading = false
                this.res.name = response.data.renturnData.data[0].name
                this.res.returnInfo = response.data.returnInfo
                this.alertInfo = {isShow: true, type: 'success', txt: response.data.returnInfo}
              } else {
                console.log(response.data)
                this.loading = false
                this.res = response.data
                this.alertInfo = {isShow: true, type: 'error', txt: response.data.returnInfo}
              }
            })
            .catch((error) => {
              console.log(error)
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    formInit (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  /*.box-card {*/
    /*width: 480px;*/
  /*}*/
</style>

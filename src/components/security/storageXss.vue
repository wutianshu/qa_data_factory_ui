<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>存储型xss</span>
          </div>
          <el-table
            v-loading="loading"
            :data="tableData"
            style="width: 100%">
              <el-table-column
                prop="id"
                label="id">
              </el-table-column>
              <el-table-column
                prop="name"
                label="名称">
              </el-table-column>
              <el-table-column
                prop="region"
                label="区域">
              </el-table-column>
              <el-table-column
                prop="resource"
                label="资源">
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型">
              </el-table-column>
              <el-table-column
                prop="desc"
                label="描述">
              </el-table-column>
              <el-table-column
                prop="start_time"
                label="开始时间">
              </el-table-column>
              <el-table-column
                prop="end_time"
                label="结束时间">
              </el-table-column>
            </el-table>
          <div class="block">
              <span class="demonstration"></span>
              <el-pagination
                layout="prev, pager, next"
                :page-size="size"
                :total="count"
                @current-change="handleCurrentChange">
              </el-pagination>
            </div>
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
      tableData: [],
      count: 0,
      size: 5,
      loading: false
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.loading = true
      axios({
        method: 'get',
        url: '/tools/getPromotion/?page=' + val // 访问vue的8080端口，在config/index.js中设置转发到8000端口，并设置不跨域
      })
        .then(response => {
          if (response.data.returnCode === 0) {
            this.tableData = response.data.renturnData.data
            this.count = response.data.renturnData.count
            this.loading = false
          } else {
            console.log(response.data)
            this.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
        })
    }
  }
}
</script>

<style>

</style>

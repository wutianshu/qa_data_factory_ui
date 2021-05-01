<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>打开对话框-获取表格</span>
          </div>
          <el-button type="text" @click="dialogVisible = true">获取活动信息</el-button>
          <el-dialog
            title="获取数据"
            :visible.sync="dialogVisible"
            width="80%"
            :before-close="handleClose">
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
                :total="count"
                @current-change="handleCurrentChange">
              </el-pagination>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
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
      dialogVisible: false,
      tableData: [],
      count: 0,
      loading: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
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
  },
  mounted () {
    axios({
      method: 'get',
      url: '/tools/getPromotion/' // 访问vue的8080端口，在config/index.js中设置转发到8000端口，并设置不跨域
    })
      .then(response => {
        if (response.data.returnCode === 0) {
          this.tableData = response.data.renturnData.data
          this.count = response.data.renturnData.count
        } else {
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>

</style>

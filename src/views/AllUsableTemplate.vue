<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id">
      </el-table-column>
      <el-table-column
        prop="available"
        label="可用状态">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述">
      </el-table-column>
      <el-table-column
        prop="category"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="productLine"
        label="产品线">
      </el-table-column>
      <el-table-column
        prop="count"
        label="个数">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="创建用户">
      </el-table-column>
      <el-table-column
        prop="key"
        label="编码">
      </el-table-column>
      <el-table-column
        prop="target"
        label="目标用户">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        // console.log(row);
        // this.$router.push({
        //   path:"/coupon-template/template/info",
        //   query:{
        //     id:row.id
        //   }
        // })
        // this.axios.get()
      }
    },
    data() {
      return {
        tableData: [{
          id:'1',
          available:'可用',

        }]
      }
    }
  }
</script>

<style scoped>

</style>


<template>
<div>
  <Home></Home>
  <el-table
    :data="tableData"
    stripe
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
  import Home from "../../components/Home";
  export default {
    components: {Home},
    methods: {
      handleClick(row) {
        this.$router.push({
          path:"/coupon/acquire",
          query:{
            userId: '123',
            id:row.id
          }
        })
      }
    },
    data() {
      return {
        activeIndex: '1',
        tableData: null
      }
    },
    mounted() {
      const _this=this
      this.axios
        .get('http://127.0.0.1:7002/coupon-distribution/template',{params: {userId: 123}})
        .then(function (response) {
            _this.tableData = response.data.data;
          }
        )
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    }

  }
</script>

<style scoped>

</style>


<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" @click="handleClickUsable()">可用优惠券模板</el-menu-item>
      <el-menu-item index="2" @click="handleClickExpired()">过期优惠券模板</el-menu-item>
    </el-menu>
    <div class="line"></div>
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
      handleClickUsable(){
        const _this=this
        this.axios
          .get('http://127.0.0.1:7001/coupon-template/template/usable')
          .then(function (response) {
              _this.tableData = response.data.data;
            }
          )
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      handleClickExpired(){
        const _this=this
        this.axios
          .get('http://127.0.0.1:7001/coupon-template/template/expired')
          .then(function (response) {
              _this.tableData = response.data.data;
            }
          )
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      handleClick(row) {
        this.$router.push({
          path:"/template/info",
          query:{
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
        .get('http://127.0.0.1:7001/coupon-template/template/usable')
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


<template>
  <div>
    <Home></Home>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" @click="handleClickUsable()">可用优惠券</el-menu-item>
      <el-menu-item index="2" @click="handleClickUsed()">已用优惠券</el-menu-item>
      <el-menu-item index="3" @click="handleClickExpired()">过期优惠券</el-menu-item>
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
        prop="templateId"
        label="对应的模板id">
      </el-table-column>
      <el-table-column
        prop="name"
        label="优惠券名称">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="用户id">
      </el-table-column>
      <el-table-column
        prop="couponCode"
        label="优惠券码">
      </el-table-column>
      <el-table-column
        prop="assignTime"
        label="领取时间">
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
  import Home from "../../components/Home";
  export default {
    components: {Home},
    methods: {
      handleClickUsable(){
        const _this=this
        this.axios
          .get('http://127.0.0.1:7002/coupon-distribution/coupons',{params: {userId: 123, status: 1}})
          .then(function (response) {
              _this.tableData = response.data.data;
            }
          )
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      handleClickUsed(){
        const _this=this
        this.axios
          .get('http://127.0.0.1:7002/coupon-distribution/coupons',{params: {userId: 123, status: 2}})
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
          .get('http://127.0.0.1:7002/coupon-distribution/coupons',{params: {userId: 123, status: 3}})
          .then(function (response) {
              _this.tableData = response.data.data;
            }
          )
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
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
        // 用于测试的用户id固定为123
        .get('http://127.0.0.1:7002/coupon-distribution/coupons',{params: {userId: 123, status: 1}})
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


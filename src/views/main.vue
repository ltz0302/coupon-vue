<template>
  <div>
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>优惠券模板服务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link style=" text-decoration: none" to="/template/build">创建优惠券模板</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link style=" text-decoration: none" to="/template/list">优惠券模板列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>优惠券分发服务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link style=" text-decoration: none" to="/coupon/list">优惠券列表</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link style=" text-decoration: none" to="/coupon/template">可领取的优惠券</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Home from "../components/Home";
  export default {
    components: {Home},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <el-page-header @back="goBack">
    </el-page-header>
  </div>
</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.push('/')
      }
    }
  }
</script>

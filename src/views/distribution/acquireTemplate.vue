<template>
  <div>
    <div class="title">
      <h2>优惠券模板基本信息</h2>
    </div>
    <table style="width: 80%" class="myTable">
      <tr>
        <td>名称</td>
        <td>{{info.name}}</td>
      </tr>
      <tr>
        <td>描述</td>
        <td>{{info.desc}}</td>
      </tr>
      <tr>
        <td>模板类别</td>
        <td>{{info.category}}</td>
      </tr>
      <tr>
        <td>产品线</td>
        <td>{{info.productLine}}</td>
      </tr>
      <tr>
        <td>过期规则</td>
        <td>{{info.expiration}}</td>
      </tr>
      <tr>
        <td>折扣规则</td>
        <td>{{info.discount}}</td>
      </tr>
      <tr>
        <td>使用规则</td>
        <td>{{info.usage}}</td>
      </tr>
    </table>
    <div class="button">
      <el-button @click="handleClick()" type="primary">领取优惠券</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        let code
        const _this = this
        this.axios
          .get('http://127.0.0.1:7002/coupon-distribution/acquire/template',{
            params: {
              userId: _this.$route.query.userId,
              id: _this.$route.query.id
            }
          })
          .then(function (response){
            code = response.data.code
            if(code === -1){
              window.alert("数据异常");
            }
            else if(code === 0){
              _this.$router.push('/coupon/list')
            }
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      }
    },

  data()
  {
    return {
      info: {
        name: null,
        desc: null,
        category: null,
        productLine: null,
        rule: {
          expiration: {
            period: null,
            gap: null,
            deadline: null
          },
          discount: {
            quota: null,
            base: null
          },
          usage: {
            province: null,
            city: null,
            goodsType: null
          }
        }
      }
    }
  }
  ,

  mounted()
  {
    const _this = this
    this.axios
      .get('http://127.0.0.1:7002/coupon-distribution/template/info', {
        params: {
          userId: _this.$route.query.userId,
          id: _this.$route.query.id
        }
      })
      .then(function (response) {
          _this.info = response.data.data;
        }
      )
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
  }
</script>

<style scoped>
  .title {
    text-align: center;
  }

  .myTable {
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
  }

  .myTable td {
    border: 1px solid #cad9ea;
    color: #666;
    height: 60px;
  }

  .button {
    margin-top: 20px;
    text-align: center
  }
</style>

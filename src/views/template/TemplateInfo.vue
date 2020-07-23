<template>
  <div>
    <div class="title">
      <h2>优惠券模板基本信息</h2>
    </div>
    <table style="width: 80%" class="myTable">
      <tr>
        <td>id</td>
        <td>{{info.id}}</td>
      </tr>
      <tr>
        <td>可用状态</td>
        <td>{{info.availabele}}</td>
      </tr>
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
        <td>总数</td>
        <td>{{info.count}}</td>
      </tr>
      <tr>
        <td>创建时间</td>
        <td>{{info.createTime}}</td>
      </tr>
      <tr>
        <td>创建用户</td>
        <td>{{info.userId}}</td>
      </tr>
      <tr>
        <td>模板编码</td>
        <td>{{info.key}}</td>
      </tr>
      <tr>
        <td>目标用户</td>
        <td>{{info.target}}</td>
      </tr>
    </table>

    <div class="title">
      <h2>优惠券模板规则信息</h2>
    </div>
    <table style="width: 80%" class="myTable">
      <tr>
        <td>过期规则</td>
        <td>{{info.rule.expiration}}</td>
      </tr>
      <tr>
        <td>折扣规则</td>
        <td>{{info.rule.discount}}</td>
      </tr>
      <tr>
        <td>领取限制张数</td>
        <td>{{info.rule.limitation}}</td>
      </tr>
      <tr>
        <td>使用规则</td>
        <td>{{info.rule.usage}}</td>
      </tr>
      <tr>
        <td>权重</td>
        <td>{{info.rule.weight}}</td>
      </tr>
    </table>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        info: null
      }
    },

    mounted() {
      const _this=this
      this.axios
        .get('http://127.0.0.1:7001/coupon-template/template/info', {params:{id:_this.$route.query.id}} )
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
</style>

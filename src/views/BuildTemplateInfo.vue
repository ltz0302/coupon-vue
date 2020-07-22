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

    <!--    <div>-->
    <div class="title">
      <h2>优惠券模板规则信息</h2>
    </div>
    <table style="width: 80%" class="myTable">
      <tr>
        <td>过期规则</td>
        <td>{{info.expiration}}</td>
      </tr>
      <tr>
        <td>折扣规则</td>
        <td>{{info.discount}}</td>
      </tr>
      <tr>
        <td>领取限制张数</td>
        <td>{{info.limitation}}</td>
      </tr>
      <tr>
        <td>使用规则</td>
        <td>{{info.usage}}</td>
      </tr>
      <tr>
        <td>权重</td>
        <td>{{info.weight}}</td>
      </tr>
    </table>
    <!--    </div>-->

  </div>
</template>
<script>
  export default {
    data(){
      return{
          info:{
            id: 1,
            availabele: "可用",
            name: "",
            desc: "",
            category: "",
            productLine: "",
            count: "",
            createTime: "",
            userId:"",
            key: "12",
            target:"",
            expiration: "",
            discount: "",
            limitation:"",
            usage:"",
            weight:""
          }
      }
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

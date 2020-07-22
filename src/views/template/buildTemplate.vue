<template>
  <div>
    <h3>创建优惠券模板</h3>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="优惠券名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="logo" prop="logo">
        <el-input v-model="ruleForm.logo"></el-input>
      </el-form-item>
      <el-form-item label="描述信息">
        <el-input v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="优惠券类型" prop="category">
        <el-select v-model="ruleForm.category" placeholder="请选择优惠券类型">
          <!--          TODO-->
          <el-option label="满减劵" value="001"></el-option>
          <el-option label="折扣券" value="002"></el-option>
          <el-option label="立减券" value="003"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品线" prop="productLine">
        <el-select v-model="ruleForm.category" placeholder="请选择产品线">
          <!--          TODO-->
          <el-option label="淘宝" value="1"></el-option>
          <el-option label="天猫" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="总数" prop="count">
        <el-input v-model="ruleForm.count"></el-input>
      </el-form-item>
      <el-form-item label="创建用户">
        <el-input v-model="ruleForm.userId"></el-input>
      </el-form-item>
      <el-form-item label="分发目标" prop="target">
        <el-select v-model="ruleForm.target" placeholder="请选择分发目标">
          <el-option label="单用户" value="1"></el-option>
          <el-option label="多用户" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效期规则" prop="period">
        <el-select v-model="ruleForm.period" placeholder="请选择有效期规则">
          <!--          TODO-->
          <el-option label="固定的(固定日期)" value="1"></el-option>
          <el-option label="变动的(以领取之日开始计算)" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效间隔">
        <el-input v-model="ruleForm.gap"></el-input>
      </el-form-item>

      <el-form-item label="失效日期" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>

      </el-form-item>

      <el-form-item label="优惠额度">
        <el-input v-model="ruleForm.quota"></el-input>
      </el-form-item>
      <el-form-item label="基准">
        <el-input v-model="ruleForm.base"></el-input>
      </el-form-item>

      <el-form-item label="领取张数限制">
        <el-input v-model="ruleForm.limitation"></el-input>
      </el-form-item>
      <el-form-item label="领取省份限制">
        <el-input v-model="ruleForm.province"></el-input>
      </el-form-item>
      <el-form-item label="领取城市限制">
        <el-input v-model="ruleForm.city"></el-input>
      </el-form-item>

      <el-form-item label="产品类型" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="文娱" name="type"></el-checkbox>
          <el-checkbox label="生鲜" name="type"></el-checkbox>
          <el-checkbox label="家居" name="type"></el-checkbox>
          <el-checkbox label="其他" name="type"></el-checkbox>
          <el-checkbox label="全品类" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="权重">
        <el-input v-model="ruleForm.weight"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {},

        rules: {
          name: [
            {required: true, message: '请输入优惠券名称', trigger: 'blur'},
          ],
          logo: [
            {required: true, message: '请输入优惠券logo', trigger: 'blur'},
          ],
          category: [
            {required: true, message: '请选择优惠券类型', trigger: 'change'}
          ],
          productLine: [
            {required: true, message: '请选择产品线', trigger: 'change'}
          ],
          count: [
            {required: true, message: '请输入要生成的优惠券总数', trigger: 'blur'}
          ],
          target: [
            {required: true, message: '请选择分发目标', trigger: 'change'}
          ],
          period: [
            {required: true, message: '请选择优惠券过期规则', trigger: 'change'}
          ],
          date: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个产品类型', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios
              .post('127.0.0.1:7001/coupon-template/template/build', this.ruleForm)
              .then(response => (
                this.$router.push('/')
              ))
              .catch(function (error) { // 请求失败处理
                console.log(error);
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>

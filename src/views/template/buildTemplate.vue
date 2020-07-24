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
      <el-form-item label="描述信息" prop="desc">
        <el-input v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="优惠券类型" prop="category">
        <el-select v-model="ruleForm.category" placeholder="请选择优惠券类型">
          <el-option label="满减劵" value="001"></el-option>
          <el-option label="折扣券" value="002"></el-option>
          <el-option label="立减券" value="003"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品线" prop="productLine">
        <el-select v-model="ruleForm.productLine" placeholder="请选择产品线">
          <el-option label="淘宝" value="1"></el-option>
          <el-option label="天猫" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="总数" prop="count">
        <el-input v-model="ruleForm.count"></el-input>
      </el-form-item>
      <el-form-item label="创建用户" prop="userId">
        <el-input v-model="ruleForm.userId"></el-input>
      </el-form-item>
      <el-form-item label="分发目标" prop="target">
        <el-select v-model="ruleForm.target" placeholder="请选择分发目标">
          <el-option label="单用户" value="1"></el-option>
          <el-option label="多用户" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效期规则" prop="rule.expiration.period">
        <el-select v-model="ruleForm.rule.expiration.period" placeholder="请选择有效期规则">
          <el-option label="固定的(固定日期)" value="1"></el-option>
          <el-option label="变动的(以领取之日开始计算)" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效间隔" prop="rule.expiration.gap">
        <el-input v-model="ruleForm.rule.expiration.gap"></el-input>
      </el-form-item>

      <el-form-item label="失效日期" required>
        <el-col :span="11">
          <el-form-item prop="rule.expiration.deadline">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.rule.expiration.deadline"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>

      </el-form-item>

      <el-form-item label="优惠额度" prop="rule.discount.quota">
        <el-input v-model="ruleForm.rule.discount.quota"></el-input>
      </el-form-item>
      <el-form-item label="基准" prop="rule.discount.base">
        <el-input v-model="ruleForm.rule.discount.base"></el-input>
      </el-form-item>

      <el-form-item label="张数限制" prop="rule.limitation">
        <el-input v-model="ruleForm.rule.limitation"></el-input>
      </el-form-item>
      <el-form-item label="适用省份" prop="rule.usage.province">
        <el-input v-model="ruleForm.rule.usage.province"></el-input>
      </el-form-item>
      <el-form-item label="适用城市" prop="rule.usage.city">
        <el-input v-model="ruleForm.rule.usage.city"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="rule.usage.goodsType">
        <el-select v-model="ruleForm.rule.usage.goodsType" placeholder="请选择商品类型">
          <el-option label="文娱" value="1"></el-option>
          <el-option label="生鲜" value="2"></el-option>
          <el-option label="家居" value="3"></el-option>
          <el-option label="其他" value="4"></el-option>
          <el-option label="全品类" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="quit()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: null,
          logo: null,
          desc: null,
          category: null,
          productLine: null,
          count: null,
          userId: null,
          target: null,
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
            limitation: null,
            usage: {
              province: null,
              city: null,
              goodsType: null
            }
          }
        },

        rules: {
          name: [
            {required: true, message: '请输入优惠券名称', trigger: 'blur'},
          ],
          logo: [
            {required: true, message: '请输入优惠券logo', trigger: 'blur'},
          ],
          desc: [
            {required: true, message: '请输入优惠券描述信息', trigger: 'blur'},
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
          userId: [
            {required: true, message: '请输入创建优惠券模板的用户', trigger: 'blur'}
          ],
          target: [
            {required: true, message: '请选择分发目标', trigger: 'change'}
          ],
          rule: {
            expiration: {
              period: [
                {required: true, message: '请选择优惠券过期规则', trigger: 'change'}
              ],
              gap:[
                {required: true, message: '请输入优惠券时间间隔', trigger: 'blur'}
              ],
              deadline: [
                {type: 'date', required: true, message: '请选择过期日期', trigger: 'change'}
              ]
            },
            discount: {
              quota: [
                {required: true, message: '请输入优惠额度', trigger: 'blur'}
              ],
              base:[
                {required: true, message: '请输入优惠券基准', trigger: 'blur'}
              ]
            },
            limitation: [
              {required: true, message: '请输入领取张数限制', trigger: 'blur'}
            ],
            usage: {
              province: [
                {required: true, message: '请输入优惠券适用省份', trigger: 'blur'}
              ],
              city: [
                {required: true, message: '请输入优惠券适用城市', trigger: 'blur'}
              ],
              goodsType: [
                {required: true, message: '请选择优惠券适用商品', trigger: 'change'}
              ],
            },
            weight: [
              {required: true, message: '请输入优惠券权重', trigger: 'blur'}
            ]
          }
        }
      };
    },
    methods: {
      submitForm(formName) {
        let code;
          this.$refs[formName].validate((valid) => {
          if (valid) {
            const _this = this
            this.axios
              .post('http://127.0.0.1:7001/coupon-template/template/build', this.ruleForm)
              .then(function (response) {
                code = response.data.code
                if(code === -1){
                  window.alert("表单数据异常");
                }
                else if(code === 0){
                  _this.$router.push('/template/list')
                }
              })
              .catch(function (error) { // 请求失败处理
                console.log(error);
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      quit() {
        this.$router.push('/')
      }

    }
  }
</script>

<style scoped>

</style>




<template>
  <div class="login-container">
    <vue-particles color="#fff" :particlesNumber='60' :moveSpeed='1.5' :lineOpacity='0.5' class="bg"></vue-particles>
    <div class="login-form">
    <el-row :gutter="20">
      <el-col :lg="6" :sm="10" class="aa">
          <h3>获奖材料管理系统</h3>
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="login-ruleForm"
          >
            <el-form-item prop="username">
              <el-input v-model="ruleForm2.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm2.password" autocomplete="off" show-password></el-input>
            </el-form-item>
            <el-form-item prop="identity">
              <el-radio-group v-model="ruleForm2.identity" class="radio-color">
                <el-radio :label="2">教师</el-radio>
                <el-radio :label="1">管理员</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
      </el-col>
    </el-row>
    </div>
    
  </div>
</template>
<script>
import Vue from "vue";
import {login} from "../../api/api";
import VueParticles from 'vue-particles';
Vue.use(VueParticles) ;
export default {
  name: "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validateIdentity = (rlue, value, callback) => {
      if(!Number.isInteger(value)){
        callback(new Error("请选择用户身份"))
      }else{
        callback();
      }
    }
    return {
      ruleForm2: {
        password: "admin",
        username: "admin",
        identity: ""
      },
      rules2: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateName, trigger: "blur" }],
        identity: [{ validator: validateIdentity, trigger: "blur" }]
      }
    };
  },
  methods: {
     submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid)
        if (valid) {
          //this.$store.commit("COMMIT_ROLE", roles);
          login(this.ruleForm2)
            .then(res => {
              console.log(res)
              this.$message('success', res.message);
              //this.$store.commit("COMMIT_TOKEN", res);
              this.$router.push({
                path: "/home"
              });
            })
            .catch(err => {
              this.$message("error", err.message);
            });
        } else {
          this.$message("error", "请核对信息是否完整");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="css" scoped>
    .bg{
        position: fixed;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
    .login-container {
        background: #2d3a4b;
        width: 100%;
        height: 100%;
        position: fixed;
        display: table;
    }
    .login-container .login-form {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        color: white;
        font-size: 18px;
    }
    .login-container .login-form .aa{
        margin: auto;
        float: none;
    }
    .login-container .login-form h3{
        line-height: 60px;
        margin-left: 100px;
    }
    .login-container .login-form .acount{
        text-align: left;
    }
    .radio-color .el-radio{
        color: white;
    }
</style>

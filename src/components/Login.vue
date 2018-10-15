<template>
  <!--背景图-->
  <div class="note" :style="note">
    <div class="loginFrame">
      <el-form :model="account" class="login-container" ref="account" :rules="rules">
        <el-form-item prop="username">
          <el-input auto-complete="off" placeholder="请输入账号" type="text" v-model="account.username">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input auto-complete="off" placeholder="请输入密码" type="password" v-model="account.password">
          </el-input>
        </el-form-item>
        <!--<el-checkbox class="remember" v-model="checked">
          记住密码
        </el-checkbox>-->
        <el-form-item style="width: 100%;">
          <el-button style="width: 100%;" type="primary" @click="handleLogin" :loading="logining"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {requestLogin} from '../api/api'
  export default {
    name: "login",
    data() {
      return {
        logining: false,
        note: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + require("../assets/neusoft.jpg") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        },
        account: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: false
      };
    },
    methods: {
      handleLogin() {
        this.$refs.account.validate((valid) => {
            if (valid) {
              this.logining = true;
              let loginParams = {
                username : this.account.username,
                password : this.account.password
              };
              requestLogin(loginParams).then(data => {
                  this.logining = false;
                  let {msg, code, token} = data;
                  if (code === 200) {
                    sessionStorage.setItem('access-token', token);
                    this.$router.push({path: '/home'});
                  } else {
                    this.$message({
                      message: msg,
                      type: 'error'
                    });
                  }
                });
            }else {
              console.log('error submit!!');
              return false;
            }
          });
      }
    }
  }
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  label {
    width: 70px;
    text-align: left;
  }

  /*.remember {*/
  /*width: 250px;*/
  /*text-align: left;*/
  /*}*/
</style>

<template>
  <div class="max">
    <el-image
        style="position: absolute;left:20px;top: 25px;
        border-radius: 20px;
        width: max-content;height: 700px"
        src="https://img2.baidu.com/it/u=1010328615,2032873142&fm=253&fmt=auto&app=120&f
        =JPEG?w=1200&h=790"
        fit="scale-down"
    >
    </el-image>
    <div class="aa">管理员平台</div>
    <div class="box">
      <el-form ref="loginForm" :model="loginForm" rules="rules" label-width="20%"
               style="width: 350px; position: absolute;right: 75px;top:0px"

      >
        <el-form-item label="用户名" prop="uname">
          <el-input v-model="loginForm.uname" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input v-model="loginForm.upwd" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="login(loginForm)" :loading="loadingbut">
            {{loadingbuttext}}
          </el-button>
          <el-button type="danger" @click="cancel" :loading="loadingbut">
            重置
          </el-button>

          <el-button type="info" @click="addUser" :loading="false" style="position: relative;
                right: 145px ;top: 50px;
          " >
            注册用户
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "LoginVue",
  data() {
    return{
      loadingbuttext: '登录',
      loginForm: {},
      rules:{
        uname: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        upwd: [{required: true, message: '请输入密码', trigger: 'blur'}],
      }


    }
  },
  methods:{
    addUser() {
      router.replace('/adduser');
    },
  }


}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
.max {
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: blanchedalmond;
  height: 752px;
  width: 1530px;

}
.aa {

  position: absolute;
  font-size: 50px;
  top: 225px;
  right: 100px;
}
.box {
  position: absolute;
  height: 180px;
  top: 325px;
  right: 0;
}
</style>
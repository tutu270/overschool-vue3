<template>
  <div>注册页面</div>
  <div>
    <el-form ref="addUser" :model="addUser" :rules="rules" label-width="120px"
             style="width: 350px;margin:auto;position: relative;top: 100px">
      <el-form-item label="用户名" prop="aname">
        <el-input v-model="addUser.aname" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item label="密码" prop="apwd">
        <el-input v-model="addUser.apwd" placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add(addUser)" :loading="loadingbut">
          {{ loadingbuttext }}
        </el-button>
      </el-form-item>

    </el-form>
  </div>

</template>
<script>
import axios from "axios";


export default {
  name: "AddUser",
  data() {
    return {
      addUser: {},
      rules:{
        aname: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        apwd: [{required: true, message: '请输入密码', trigger: 'blur'}],
      },
      loadingbuttext: '注册',
      loadingbut: false,
    }
  },
  methods: {
    add(addUser) {
      this.$refs['addUser'].validate((valid) => {
        console.log(valid.toString())
        if (valid) {
          this.loadingbut = true
          this.loadingbuttext = '注册中.......';
          axios.post('/adduser', {
            aname: addUser.aname,
            apwd: addUser.apwd,
          }).then(succes => {
            if (succes.data === "ok") {
              this.$alert('注册成功', {confirmButtonText: '确定'});
              this.loadingbut = false;
              this.loadingbuttext = '注册';
            } else {
              this.$alert('注册失败', {confirmButtonText: '确定'});
              this.loadingbut = false;
              this.loadingbuttext = '注册';
            }

          }).catch(fail => {
            this.$alert(fail.response.status, {confirmButtonText: '确定'})
          })

        } else {
          this.$alert('表单验证失败', {confirmButtonText: '确定'})
        }
      })
    },
  }
}
</script>

<style scoped>

</style>

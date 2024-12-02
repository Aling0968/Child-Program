<script setup>
import {onMounted, reactive} from "vue";
import request from "@/net/index.js";
import Swal from "sweetalert2";
import router from "@/router/index.js";

const visible=reactive({
  password:false,
  confirm:false
})
const verify = reactive({
  img: '',
  uuid: ''
})


const form = reactive({
  username: '',
  password: '',
  confirm: '',
  code:''
})
function refreshImage() {
  request.get('/captchaImage').then(({data}) => {
    verify.img = data.img
    verify.uuid = data.uuid
  })
}
function register(){
  if(form.username === '' || form.password === '' ){

    Swal.fire({title: "注册失败!", text: "请填写您的用户和密码", icon: "error"})
    return
  }
  if(form.password !==form.confirm){
    Swal.fire({title: "注册失败!", text: "两次输入的密码不一致", icon: "error"})
    return
  }

  request.post("/register", {
    username: form.username,
    password: form.password,
    confirmPassword : form.confirm,
    code: form.code,
    uuid: verify.uuid
  }).then(({data}) => {
    if (data.code === 200) {
      Swal.fire({title: "注册成功!", text:`恭喜您的账户${form.username}注册成功，即将为您跳转到登录界面`, icon: "ssuccess"}).then(({data}) => {
        router.push('/login')
      })
    }
    else
    {
      refreshImage()
      Swal.fire({title: "注册失败!", text: data.msg, icon: "error"})
    }
  })
}

onMounted(refreshImage)
</script>

<template>
<div>
  <div class="log-regi-area" style="height: 100vh;padding: 0">
    <div class="container" style="height: 100%;display: flex;justify-content: center;align-items: center;">
      <div class="row">
        <div style="width: 500px">
          <div class="log-area" style="padding: 30px 60px;border-radius: 66px">
            <h2>注册</h2>
            <div class="form-floating mb-4">
              <input type="text" class="form-control" id="floatingInput6" placeholder="Username *" v-model="form.username" >
              <label class="lable-text" for="floatingInput6">用户名 *</label>
            </div>
            <div class="form-floating mb-4">
              <input :type="visible.password ? 'text' : 'password' " class="form-control" id="floatingInput3" placeholder="Email address *" v-model="form.password">
              <label class="lable-text" for="floatingInput3">密码 *</label>
              <div class="password-key" @click="visible.password = !visible.password" >
                <i class="icon-eye"></i>
              </div>
            </div>
            <div class="form-floating relative mb-4">
              <input :type="visible.confirm ? 'text' : 'password' " class="form-control relative" id="floatingPassword4" placeholder="Password *" v-model="form.confirm">
              <label class="lable-text" for="floatingPassword4">确认密码 *</label>

              <div class="password-key" @click="visible.confirm = !visible.confirm" >
                <i class="icon-eye"></i>
              </div>
            </div>

            <div class="row">
              <div class="form-floating mb-5 col-8">
                <input id="floatingInput3" v-model="form.code" class="form-control"
                       placeholder="Username Or Email address *" type="email"  >
                <label class="lable-text" for="floatingInput1">验证码 *</label>
              </div>
              <div class=" col-4">

                <img :src="`data:image/gif;base64,${verify.img}`"
                     class="login-code-img"
                     data-v-d0e06bca="">
              </div>
            </div>


            <div class="mb-20 rem-forgot-btn">
              <div class="forgot-pass">
                <a href="/login">已有账户？立即登录</a>
              </div>
            </div>

            <p class="auth-desc">已阅读 并同意 <a href="https://rule.tencent.com/rule/46a15f24-e42c-4cb6-a308-2347139b1201">服务协议</a><span> 和 </span><a href="https://rule.tencent.com/rule/3fd52bde-6555-453b-9ab8-c5f1f3d22c62">隐私保护指引</a></p>

            <button type="submit" class="auth-btn w-100 mt-5" @click="register">立即注册</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
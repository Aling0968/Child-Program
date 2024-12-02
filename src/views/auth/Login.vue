<script setup>
import {onMounted, reactive} from "vue";
import request from "@/net";
import Swal from "sweetalert2";
import router from "@/router/index.js";
import {setToken} from "@/utils/token.js";
import {useAccount} from "@/stores/user.js";
const account=useAccount()
const verify = reactive({
  img: '',
  uuid: ''
})
const form = reactive({
  username: '',
  password: '',
  code: ''
})

function login() {
  request.post("/login", {
    username: form.username,
    password: form.password,
    code: form.code,
    uuid: verify.uuid
  }).then(({data}) => {
    if (data.code !== 200) {
      refreshImage()
     // console.info('登录失败')
      Swal.fire({
        title: "登录失败!",
        text: "请检查您的账号或者密码是否正确",
        icon: "error"
      });
    } else {
     // console.info('登录成功', data)
      Swal.fire({
        title: "恭喜你",
        text: "登录成功了!",
        icon: "success"
      }).then(()=> {
        setToken(data.token)
        request.get('/getInfo').then(({data})=>
          Object.assign(account.info,data.user))
        router.push('/')
      })
    }
  })
}

function refreshImage() {
  request.get('/captchaImage').then(({data}) => {
    verify.img = data.img
    verify.uuid = data.uuid
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
            <div class="log-area">
              <h2 align="center">登录</h2>
              <div class="form-floating mb-3">
                <input id="floatingInput1" v-model="form.username" class="form-control" placeholder="用户名 *"
                       type="email">
                <label class="lable-text" for="floatingInput1">用户名 *</label>
              </div>
              <div class="form-floating relative mb-4">
                <input id="floatingPassword2" v-model="form.password" class="form-control relative" placeholder="密码 *"
                       type="password">
                <label class="lable-text" for="floatingPassword2">密码 *</label>

                <div class="password-key">
                  <i class="icon-eye"></i>
                </div>
              </div>
              <div class="row">
                <div class="form-floating mb-5 col-8">
                  <input id="floatingInput3" v-model="form.code" class="form-control"
                         placeholder="Username Or Email address *" type="email">
                  <label class="lable-text" for="floatingInput1">验证码 *</label>
                </div>
                <div class=" col-4">

                  <img :src="`data:image/gif;base64,${verify.img}`"
                       class="login-code-img"
                       data-v-d0e06bca="">
                </div>
              </div>

              <div class="rem-forgot-btn">
                <div class="form-check">
                  <input id="rememberMe1" checked="" class="form-check-input" type="checkbox" value="">
                  <label class="form-check-label" for="rememberMe1">
                    记住我
                  </label>
                </div>
                  <div class="forgot-pass" >
                    <a href="/register">还没有账号?立即注册</a>
                  </div>




              </div>

              <button class="auth-btn w-100 mt-5" type="submit" @click="login">立即登录</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
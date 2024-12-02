<script setup>
import {computed} from "vue";
import {getToken} from "@/utils/token.js";
import request from "@/net/index.js";
import {useAccount} from "@/stores/user.js";
const account=useAccount()
const isLogin = computed(() => getToken())
</script>

<template>
  <div class="top-header">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-md-6 col-lg-7">
          <div class="contact-info d-flex align-items-center">
            <a href="mailto:info@doorsoft"><span class="icon-mail"></span> <span class="text-white contact-desc">2304093197@qq.com</span></a>
            <a href=""><span class="icon-phone-alt-solid-11"></span> <span class="text-white contact-desc">156 - 5049 - 8659</span></a>

          </div>
        </div>

        <div class="col-md-6 col-lg-5">
          <div class="d-flex align-items-center top-social-conatct">
            <!-- Dropdown -->
            <div class="top-social-icon">
              <ul class="header-icon">
                <li><span class="text-white">加入我们 :</span></li>
                <li><a href="#"><span class="icon-facebook-f"></span></a></li>
                <li><a href="#"><span class="icon-linkedin-in"></span></a></li>
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
            <div  v-if="isLogin" class="contact-info" style="display: flex;align-items: center;margin-left: 20px">
              <div style="color: white ;text-align: right;font-size: 13px;line-height: 15px">
                <div>{{account.info.userName}}</div>
                <div>{{account.info.email}}</div>
              </div>

            </div>
            <div class="contact-info" v-if="isLogin">
              <img :src="`${request.defaults.baseURL}${account.info.avatar}`"
                   class="user-avatar">
            </div>



            <div v-if="!isLogin" class="contact-info">
              <a class="login-btn" href="/login"><span class="icon-user-notes"></span> 登录</a>
            </div>

            <div v-if="!isLogin" class="contact-info">
              <a class="login-btn" href="/register"><span class="icon-user-plus-solid-1"></span> 注册</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-avatar
{
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-left: 10px
}
</style>
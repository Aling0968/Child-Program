<script setup>
import TopHeader from "@/components/TopHeader.vue";
import IndexHeader from "@/components/IndexHeader.vue";
import IndexFooter from "@/components/IndexFooter.vue";
import BackToTop from "@/components/BackToTop.vue";
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";
import request from "@/net/index.js";
import {getToken} from "@/utils/token.js";
import {useAccount} from "@/stores/user.js";


const route=useRoute()
const account=useAccount()

const isAuthPage= computed(
    () => route.name==='login'||route.name==='register')
onMounted(() =>{
  if(getToken())
  {
    request.get('/getInfo').then(({data})=>
      //console.info(data)
      Object.assign(account.info,data.user))
  }
})
</script>

<template>
  <div>
    <top-header v-if="!isAuthPage"/>
    <index-header v-if="!isAuthPage"/>
    <div class="smooth-body" >
      <div class="smooth-content" >
        <router-view />
        <index-footer v-if="!isAuthPage"/>
      </div>
    </div>
    <back-to-top v-if="!isAuthPage"/>
  </div>

</template>

<style scoped>

</style>

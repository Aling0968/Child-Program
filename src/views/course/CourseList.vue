<script setup>

import {useRouter} from "vue-router";
import axios from "axios";
import {ref} from "vue";
import {CreateRandomInt} from "@/utils/data.js";
import CourseBreadcrumb from "@/components/course/CourseBreadcrumb.vue";
import request from "@/net"
import Swal from "sweetalert2";
import {useAccount} from "@/stores/user.js";
const account =useAccount()
const data = ref([])
request.get('/system/course/list')
    .then((res) => data.value = res.data.rows)

function addCourseToCart(id){
  request.post(`/system/item/add/${id}`).then((  ) =>{
  // request.post(`/system/course/add/${id}`).then(( {data} ) =>
  // console.log(data));
    account.cart.count++;
  Swal.fire({
    title: "添加商品",
    text: " 课程成功添加到购物车，欢迎继续选购!",
    icon: "success"})
  })
}

</script>

<template>
  <div>
    <course-breadcrumb :course-count="data.length"/>
    <div class="featured-course-4-area single-page">
      <div class="container">
        <div class="row">
          <!-- Single Card -->
          <div class="col-12" v-for="course in data" >
            <div class="course-card-4-area course-list d-flex ">
              <div class="course-img-4 single">
                <div class="cr-img relative">
                  <img :src="`/img/course/list/list-${course.id}.png`" alt="">

                  <div class="course-offer-4">
                    <div class="offer-bg-shape relative">
                      <img src="/img/bg-img/home-4/shape-4.png" alt="">
                    </div>

                    <div class="offer-content-4 ">
                      <p>-10%</p>
                      <span>折扣</span>
                    </div>

                  </div>
                </div>

              </div>

              <!-- Content -->
              <div class="course-content-info-4 single">
                <div class="course-content-rating d-flex justify-content-between align-items-center">
                  <p><i class="icon-star1"></i> 4.5 <span>(100 次购买)</span></p>
                  <div class="ribbon-icon">
                    <i class="icon-icon_ribbon_alt"></i>
                  </div>
                </div>
                <h2><a :href="`/course/detail/${course.id}`">{{course.title}}</a></h2>
                <!-- info -->
                <div class="course-info-meta-4 d-flex align-items-center">
                  <p><i class="icon-Home"></i> {{CreateRandomInt()}}人正在学习</p>
                  <p><i class="icon-book-solid-1"></i> 共{{course.lessone}}节课</p>
                </div>

                <p class="course-desc-4">{{course.about}}</p>
                <div class="auth-info-4 d-flex align-items-center">
                  <img class="auth-img" :src="`/img/course/avatar/c-${course.id}.png`" alt="">
                  <p>主讲老师:<a href="#">{{course.teacher}}</a></p>
                </div>
                <!-- Price & Cart -->
                <div class="course-footer-4 d-flex align-items-center justify-content-between">
                  <div class="course-price">
                    <p>￥{{(course.price*0.9).toFixed(0)}}<span>￥{{course.price}}</span></p>
                  </div>
                  <div class="course-buy" style="cursor: pointer">
                    <p><a @click="addCourseToCart(course.id)"><i class="icon-icon_cart_alt"></i> <span>添加到购物车</span></a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div class="col-12">
            <div class="load-btn-area text-center mt-20">
              <a class="load-btn" href="all-course.html"><i class="icon-icon_document_alt"></i> 加载更多课程</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
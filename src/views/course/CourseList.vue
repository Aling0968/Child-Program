<script setup>

import {useRouter} from "vue-router";
import axios from "axios";
import {ref} from "vue";

const router = useRouter()
const data = ref([])
axios.get('http://localhost:8080/system/course/list').then((res) => {
  data.value = res.data.rows
})
</script>

<template>
  <div>
    <div class="breadcrumb-area relative">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12">
          <div class="breadcrumb-conetnt">
            <ul class="bread-list">
              <li>首页</li>
              <li><i class="icon-down-arrow-11"></i></li>
              <li>课程</li>
              <li><i class="icon-down-arrow-11"></i></li>
              <li>所有课程</li>
            </ul>
            <h4>所有课程列表</h4>
            <p>欢迎选购我们为小朋友精心准备的编程课程，让小朋友在学习过程中发现更多精彩！</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Filter Search -->
    <div class="grid-filter-area relative">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Filter -->
            <div class="grid-filter-search relative d-flex align-items-center justify-content-between">
              <div class="grid-filter-btn d-flex align-items-center">
                <div class="grid-filter-btn-list">
                  <button class="grid-btn boxButton toggle-btn" @click="router.push('/course/grid')">
                    <i class="icon-mingcute_grid-line"></i>&nbsp;
                    <span>表格查看</span></button>
                  <button class="list-btn" @click="router.push('/course/list')">
                    <i class="icon-cil_list" ></i>&nbsp;
                    <span>列表查看</span></button>
                </div>
                <p class="mb-0">已上架{{data.length}}个编程课程，欢迎选购</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="searc-filed-cart-area" id="box">
          <div class="search-filter-box">
            <div class="single-filter-card">
              <label for="ratingName" class="form-label">Short By Rating</label>
              <input type="text" class="form-control" id="ratingName" placeholder="Rating" value="" required="">
            </div>
            <div class="single-filter-card">
              <label for="orderName" class="form-label">Short By Order</label>
              <input type="text" class="form-control" id="orderName" placeholder="Default" value="" required="">
            </div>
            <div class="single-filter-card">
              <label for="authroName" class="form-label">Short By Author</label>
              <input type="text" class="form-control" id="authroName" placeholder="Nothing selected" value="" required="">
            </div>
            <div class="single-filter-card">
              <label for="priceName" class="form-label">Short By Price</label>
              <input type="text" class="form-control" id="priceName" placeholder="All" value="" required="">
            </div>
            <div class="single-filter-card">
              <label for="categor" class="form-label">Short By Category</label>
              <input type="text" class="form-control" id="categor" placeholder="Nothing selected" value="" required="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="featured-course-4-area single-page">
      <div class="container">
        <div class="row">
          <!-- Single Card -->
          <div class="col-12">
            <div class="course-card-4-area course-list d-flex ">
              <div class="course-img-4 single">
                <div class="cr-img relative">
                  <img src="@/assets/img/bg-img/inner/list-1.png" alt="">

                  <div class="course-offer-4">
                    <div class="offer-bg-shape relative">
                      <img src="@/assets/img/bg-img/home-4/shape-4.png" alt="">
                    </div>

                    <div class="offer-content-4 ">
                      <p>-20%</p>
                      <span>Off</span>
                    </div>

                  </div>
                </div>

              </div>

              <!-- Content -->
              <div class="course-content-info-4 single">
                <div class="course-content-rating d-flex justify-content-between align-items-center">
                  <p><i class="icon-star1"></i> 4.5 <span>(0 Reviews)</span></p>
                  <div class="ribbon-icon">
                    <i class="icon-icon_ribbon_alt"></i>
                  </div>
                </div>
                <h2><a href="course-details.html">Javascript for Beginners</a></h2>
                <!-- info -->
                <div class="course-info-meta-4 d-flex align-items-center">
                  <p><i class="icon-Home"></i> 1 Student</p>
                  <p><i class="icon-book-solid-1"></i> 8 Lessone</p>
                </div>

                <p class="course-desc-4">Podcasts like Wow in the World, Brains On!, and But Why?
                  cover
                  interesting.</p>
                <div class="auth-info-4 d-flex align-items-center">
                  <img class="auth-img" src="@/assets/img/bg-img/home-4/c-2.png" alt="">
                  <p>By <a href="#">jane cooper</a></p>
                </div>
                <!-- Price & Cart -->
                <div class="course-footer-4 d-flex align-items-center justify-content-between">
                  <div class="course-price">
                    <p>$150 <span>$100</span></p>
                  </div>
                  <div class="course-buy">
                    <p><a href="#"><i class="icon-icon_cart_alt"></i> <span>Add to
                                                        cart</span></a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Single Card -->
          <div class="col-12">
            <div class="course-card-4-area course-list d-flex ">
              <div class="course-img-4 single">
                <div class="cr-img relative">
                  <img src="@/assets/img/bg-img/inner/list-2.jpg" alt="">
                </div>
              </div>

              <!-- Content -->
              <div class="course-content-info-4 single">
                <div class="course-content-rating d-flex justify-content-between align-items-center">
                  <p><i class="icon-star1"></i> 4.5 <span>(0 Reviews)</span></p>
                  <div class="ribbon-icon">
                    <i class="icon-icon_ribbon_alt"></i>
                  </div>
                </div>
                <h2><a href="course-details.html">Learn C# Programming (In Ten Easy Steps)</a></h2>
                <!-- info -->
                <div class="course-info-meta-4 d-flex align-items-center">
                  <p><i class="icon-Home"></i> 1 Student</p>
                  <p><i class="icon-book-solid-1"></i> 8 Lessone</p>
                </div>

                <p class="course-desc-4">Podcasts like Wow in the World, Brains On!, and But Why?
                  cover
                  interesting.</p>
                <div class="auth-info-4 d-flex align-items-center">
                  <img class="auth-img" src="@/assets/img/bg-img/home-4/c-2.png" alt="">
                  <p>By <a href="#">jane cooper</a></p>
                </div>
                <!-- Price & Cart -->
                <div class="course-footer-4 d-flex align-items-center justify-content-between">
                  <div class="course-price">
                    <p>$150 <span>$100</span></p>
                  </div>
                  <div class="course-buy">
                    <p><a href="#"><i class="icon-icon_cart_alt"></i> <span>Add to
                                                        cart</span></a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Single Card -->
          <div class="col-12">
            <div class="course-card-4-area course-list d-flex ">
              <div class="course-img-4 single">
                <div class="cr-img relative">
                  <img src="@/assets/img/bg-img/inner/list-3.png" alt="">
                </div>
              </div>

              <!-- Content -->
              <div class="course-content-info-4 single">
                <div class="course-content-rating d-flex justify-content-between align-items-center">
                  <p><i class="icon-star1"></i> 4.5 <span>(0 Reviews)</span></p>
                  <div class="ribbon-icon">
                    <i class="icon-icon_ribbon_alt"></i>
                  </div>
                </div>
                <h2><a href="course-details.html">Fullstack WordPress Developer Online Course</a></h2>
                <!-- info -->
                <div class="course-info-meta-4 d-flex align-items-center">
                  <p><i class="icon-Home"></i> 1 Student</p>
                  <p><i class="icon-book-solid-1"></i> 8 Lessone</p>
                </div>

                <p class="course-desc-4">Podcasts like Wow in the World, Brains On!, and But Why?
                  cover
                  interesting.</p>
                <div class="auth-info-4 d-flex align-items-center">
                  <img class="auth-img" src="@/assets/img/bg-img/home-4/c-2.png" alt="">
                  <p>By <a href="#">jane cooper</a></p>
                </div>
                <!-- Price & Cart -->
                <div class="course-footer-4 d-flex align-items-center justify-content-between">
                  <div class="course-price">
                    <p>$150 <span>$100</span></p>
                  </div>
                  <div class="course-buy">
                    <p><a href="#"><i class="icon-icon_cart_alt"></i> <span>Add to
                                                        cart</span></a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="load-btn-area text-center mt-20">
              <a class="load-btn" href="all-course.html"><i class="icon-icon_document_alt"></i> Load More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
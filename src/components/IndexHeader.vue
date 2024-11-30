<script setup>
import {onMounted} from "vue";
import {useHeaderSticky} from "@/utils/common.js";

const routes=[
  { name: '首页',routes:"/",children:[]},
  { name: '课程列表',children:[
      { name:'购买课程',routes:''},
      { name:'充值会员',routes:''},
    ]
  },
  { name: '关于我们',children:[
      { name:'公司介绍',routes:''},
      { name:'画廊',routes:''},
      { name:'师资团队',routes:''},
      { name:'联系我们',routes:''},
    ]
  },
  { name: '最新活动',routes:"/event"},
  { name: '编程博客',routes:"/blog"},

]
onMounted(useHeaderSticky)
</script>
<template>
  <header id="header" class="header-area home-2 bg--navy">
    <nav class="navbar navbar-expand-lg">
      <div class="container menu-area-">
        <!-- Navbar Brand -->
        <div class="mobile-menu">
          <a class="navbar-brand" href="index.html">
            <img alt="Brand" src="@/assets/img/core-img/logo-2.png">
          </a>
        </div>

        <!-- Navbar Toggler -->
        <button id="navbarToggler" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler" data-bs-target="#navbarContent" data-bs-toggle="collapse"
                type="button">
          <span class="icon-menu"></span>
        </button>

        <!-- Navbar -->
        <div id="navbarContent" class="collapse navbar-collapse">
          <ul id="SupportHiveNav" class="navbar-nav navbar-nav-scroll mb-3 mb-lg-0">
            <li class="dropdown-list" v-for="item in routes">
              <a :href="item.children ? '#' : item.routes">{{ item.name  }}</a>
              <div class="dropdown-toggler" v-if="item.children"><i class="icon-down-arrow-1"></i></div>
              <ul v-if="item.children">
                <li v-for="sub in item.children">
                  <a :href="sub.children">{{ sub.name  }}</a></li>

              </ul>
            </li>
          </ul>

          <div class="cart-search-area ml-auto d-flex align-items-center">
            <div class="search-home-2">
              <div class="header-action">
                <div class="search-toggle-open header-search">
                  <div class="search-icon">
                    <span class="icon-icon_search2"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-btn-area relative">
              <a class="relative" href="#"><span class="icon-icon_cart_alt"></span></a>
              <div class="cart-badge bg--dark">0</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
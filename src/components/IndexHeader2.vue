<script setup>
import {onMounted} from "vue";
import {useHeaderSticky} from "@/utils/common.js";


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
            <li class="dropdown-list">
              <a href="#">Home</a>
              <div class="dropdown-toggler"><i class="icon-down-arrow-1"></i></div>
              <ul>
                <li><a href="index.html">Education</a></li>
                <li><a href="index-kid-education.html">KidEducation</a></li>
                <li><a href="index-marketplaxe.html">Marketplace</a></li>
                <li><a href="index-university.html">University Classic</a></li>
              </ul>
            </li>
            <li class="dropdown-list">
              <a href="#">Course</a>
              <div class="dropdown-toggler"><i class="icon-down-arrow-1"></i></div>
              <ul>
                <li><a href="course-list.html">Course list</a></li>
                <li><a href="all-course.html">all Course</a></li>
                <li><a href="course-details.html">Course Details</a></li>
              </ul>
            </li>

            <li class="dropdown-list">
              <a href="#">Pages</a>
              <div class="dropdown-toggler"><i class="icon-down-arrow-1"></i></div>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="faq.html">Faq</a></li>
                <li><a href="pricing.html">Price</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="login.html">Login</a></li>
              </ul>
            </li>
            <li class="dropdown-list">
              <a href="#">Event</a>
              <div class="dropdown-toggler"><i class="icon-down-arrow-1"></i></div>
              <ul>
                <li><a href="event.html">Event list</a></li>
                <li><a href="event-sidebar.html">Event Sidebar</a></li>
                <li><a href="event-details.html">Event Details</a></li>
              </ul>
            </li>
            <li class="dropdown-list">
              <a href="#">Shop</a>
              <div class="dropdown-toggler"><i class="icon-down-arrow-1"></i></div>
              <ul>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="shop-details.html">Shop Details</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
              </ul>
            </li>

            <li class="dropdown-list">
              <a href="#">Blog</a>
              <div class="dropdown-toggler"><i class="icon-down-arrow-1"></i></div>
              <ul>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
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
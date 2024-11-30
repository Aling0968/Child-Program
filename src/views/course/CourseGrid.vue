<script setup>

</script>

<template>
  <div>
    <div class="breadcrumb-area relative">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="breadcrumb-conetnt">
              <ul class="bread-list">
                <li>Home</li>
                <li><i class="icon-down-arrow-11"></i></li>
                <li>Courses</li>
                <li><i class="icon-down-arrow-11"></i></li>
                <li>All Courses</li>
              </ul>
              <h4>All Courses</h4>
              <p>Courses that help beginner designers become true unicorns.</p>
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
                    <button class="grid-btn boxButton toggle-btn" onclick="toggleBox()"><i class="icon-mingcute_grid-line"></i>
                      <span>Grid</span></button>
                    <button class="list-btn"><i class="icon-cil_list"></i>
                      <span>List</span></button>
                  </div>
                  <p class="mb-0">Showing 1-6 of 19 results</p>
                </div>
                <button class="filter-btn toggle-btn"><i class="icon-mdi_filter-outline"></i>
                  <span>Filter</span></button>
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
  </div></template>

<style scoped>

</style>
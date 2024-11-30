<script setup>
import {onMounted} from "vue";
import {useBackToTop} from "@/utils/common.js";

onMounted(useBackToTop)
</script>

<template>
  <div id="scrollToTop" class="scrolltop-show"><i class="icon-right-arrow-11"></i></div>
</template>

<style scoped>

</style>
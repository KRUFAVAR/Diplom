<template>
  <div class="product-gallery">
    <img :src="modelValue" class="product-main-image" />
    <div class="product-thumbs">
      <img v-for="(img, i) in images" :key="i" :src="img" class="product-thumb" :class="{active: img === modelValue}" @click="$emit('update:modelValue', img)" />
    </div>
  </div>
</template>
<script setup>
defineProps({
  images: Array,
  modelValue: String
});
</script>
<style scoped>
.product-gallery { margin-top: 18px; }
.product-main-image { width: 600px; height: 340px; object-fit: cover; border-radius: 16px; margin-bottom: 16px; }
.product-thumbs { display: flex; gap: 12px; }
.product-thumb { width: 90px; height: 50px; object-fit: cover; border-radius: 8px; cursor: pointer; opacity: 0.7; border: 2px solid transparent; transition: border 0.2s, opacity 0.2s; }
.product-thumb.active, .product-thumb:hover { opacity: 1; border: 2px solid #eab308; }
</style> 
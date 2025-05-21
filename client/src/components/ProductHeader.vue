<template>
  <div class="product-header">
    <h1 class="product-title">{{ product.title }}</h1>
    <div class="product-meta">
      <span class="product-rating">★★★★★ {{ product.rating }}</span>
      <span class="product-feature" v-for="(f, i) in product.features" :key="i">{{ f }}</span>
    </div>
    <div class="product-tabs">
      <span class="tab" :class="{active: tab==='overview'}" @click="$emit('update:tab', 'overview')">Обзор</span>
      <span class="tab" :class="{active: tab==='dlc'}" @click="$emit('update:tab', 'dlc')">Дополнение</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  product: Object,
  tab: String
});
</script>
<style scoped>
.product-header { margin-bottom: 18px; }
.product-title { font-size: 2.8rem; font-weight: bold; margin-bottom: 12px; }
.product-meta { display: flex; gap: 24px; margin-bottom: 18px; align-items: center; }
.product-rating { font-size: 1.2rem; color: #fff; }
.product-feature { font-size: 1.1rem; color: #b3b3b3; }
.product-tabs { display: flex; gap: 32px; margin-bottom: 18px; }
.tab { font-size: 1.1rem; color: #b3b3b3; cursor: pointer; padding-bottom: 4px; }
.tab.active { color: #fff; border-bottom: 2px solid #fff; }
</style> 
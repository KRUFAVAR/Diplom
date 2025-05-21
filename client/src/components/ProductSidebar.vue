<template>
  <div class="product-side">
    <div class="product-logo-block">
      <img :src="product.logo" class="product-logo" />
    </div>
    <div class="product-age-block">
      <span class="product-age-badge">{{ product.age }}</span>
      <span class="product-age-label">PEGI {{ product.age }}</span>
    </div>
    <div class="product-type">{{ product.type }}</div>
    <div class="product-price">{{ product.price }}</div>
    <button class="product-buy" @click="$emit('buy')">Купить сейчас</button>
    <button class="product-cart" @click="$emit('add-to-cart')">Добавить в корзину</button>
    <button class="product-wishlist" @click="$emit('add-to-wishlist')">В список желаемого</button>
  </div>
</template>
<script setup>
defineProps({ product: Object });
</script>
<style scoped>
.product-side { flex: 1 1 0; display: flex; flex-direction: column; align-items: flex-start; gap: 18px; margin-top: 40px; }
.product-logo-block { width: 100%; display: flex; justify-content: center; margin-bottom: 12px; }
.product-logo { width: 220px; border-radius: 12px; }
.product-age-block { display: flex; align-items: center; gap: 10px; background: #23222a; border-radius: 8px; padding: 8px 18px; }
.product-age-badge { background: #b6e23a; color: #23222a; font-weight: bold; border-radius: 4px; padding: 2px 8px; font-size: 1.1rem; }
.product-age-label { font-size: 1.1rem; color: #fff; }
.product-type { color: #b3b3b3; font-size: 1rem; }
.product-price { font-size: 1.5rem; font-weight: bold; margin-bottom: 8px; }
.product-buy { background: #7b61ff; color: #fff; border: none; border-radius: 8px; padding: 12px 0; width: 100%; font-size: 1.1rem; font-weight: bold; margin-bottom: 8px; cursor: pointer; transition: background 0.2s; }
.product-buy:hover { background: #fff; color: #7b61ff; }
.product-cart, .product-wishlist { background: #23222a; color: #fff; border: none; border-radius: 8px; padding: 12px 0; width: 100%; font-size: 1.1rem; font-weight: bold; margin-bottom: 8px; cursor: pointer; transition: background 0.2s; }
.product-cart:hover, .product-wishlist:hover { background: #fff; color: #23222a; }
</style> 
<template>
  <div class="product-page">
    <Header />
    <main class="product-content">
      <div class="product-main">
        <ProductHeader :product="product" :tab="tab" @update:tab="tab = $event" />
        <ProductGallery :images="images" v-model="mainImage" />
        <!-- Здесь можно добавить ProductInfo, если нужно -->
      </div>
      <ProductSidebar :product="product" @buy="buy" @add-to-cart="addToCart" @add-to-wishlist="addToWishlist" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProductHeader from '@/components/ProductHeader.vue';
import ProductGallery from '@/components/ProductGallery.vue';
import ProductSidebar from '@/components/ProductSidebar.vue';
import { ref } from 'vue';

const product = {
  title: 'Oxygen Not Included',
  rating: 4.8,
  features: ['🔵 Разнообразные персонажи', '🏅 Уникальная графика'],
  logo: 'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/header.jpg',
  age: 3,
  type: 'Базовая игра',
  price: '22,99 €'
};
const images = [
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/header.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/ss_1.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/ss_2.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/ss_3.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/ss_4.jpg'
];
const mainImage = ref(images[0]);
const tab = ref('overview');

function buy() { /* переход к оплате */ }
function addToCart() { /* добавить в корзину */ }
function addToWishlist() { /* добавить в избранное */ }
</script>

<style scoped>
.product-page { min-height: 100vh; background: #18171c; color: #fff; display: flex; flex-direction: column; }
.product-content { display: flex; flex-direction: row; max-width: 1400px; margin: 0 auto; padding: 40px 32px 0 32px; gap: 48px; }
.product-main { flex: 2 1 0; }
</style> 
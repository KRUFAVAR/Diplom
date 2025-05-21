<template>
  <div class="product-page">
    <Header />
    <main class="product-content">
      <div class="product-main">
        <h1 class="product-title">Oxygen Not Included</h1>
        <div class="product-meta">
          <span class="product-rating">★★★★★ 4.8</span>
          <span class="product-feature">🔵 Разнообразные персонажи</span>
          <span class="product-feature">🏅 Уникальная графика</span>
        </div>
        <div class="product-tabs">
          <span class="tab active">Обзор</span>
          <span class="tab">Дополнение</span>
        </div>
        <div class="product-gallery">
          <img :src="mainImage" class="product-main-image" />
          <div class="product-thumbs">
            <img v-for="(img, i) in images" :key="i" :src="img" class="product-thumb" :class="{active: img === mainImage}" @click="mainImage = img" />
          </div>
        </div>
      </div>
      <div class="product-side">
        <div class="product-logo-block">
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/457140/header.jpg" class="product-logo" />
        </div>
        <div class="product-age-block">
          <span class="product-age-badge">3</span>
          <span class="product-age-label">PEGI 3</span>
        </div>
        <div class="product-type">Базовая игра</div>
        <div class="product-price">22,99 €</div>
        <button class="product-buy">Купить сейчас</button>
        <button class="product-cart">Добавить в корзину</button>
        <button class="product-wishlist">В список желаемого</button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const images = [
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/header.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/ss_1.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/ss_2.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/ss_3.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/ss_4.jpg'
];
const mainImage = ref(images[0]);
</script>

<style scoped>
.product-page {
  min-height: 100vh;
  background: #18171c;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.product-content {
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 32px 0 32px;
  gap: 48px;
}
.product-main {
  flex: 2 1 0;
}
.product-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 12px;
}
.product-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 18px;
  align-items: center;
}
.product-rating {
  font-size: 1.2rem;
  color: #fff;
}
.product-feature {
  font-size: 1.1rem;
  color: #b3b3b3;
}
.product-tabs {
  display: flex;
  gap: 32px;
  margin-bottom: 18px;
}
.tab {
  font-size: 1.1rem;
  color: #b3b3b3;
  cursor: pointer;
  padding-bottom: 4px;
}
.tab.active {
  color: #fff;
  border-bottom: 2px solid #fff;
}
.product-gallery {
  margin-top: 18px;
}
.product-main-image {
  width: 600px;
  height: 340px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 16px;
}
.product-thumbs {
  display: flex;
  gap: 12px;
}
.product-thumb {
  width: 90px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.7;
  border: 2px solid transparent;
  transition: border 0.2s, opacity 0.2s;
}
.product-thumb.active, .product-thumb:hover {
  opacity: 1;
  border: 2px solid #eab308;
}
.product-side {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin-top: 40px;
}
.product-logo-block {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}
.product-logo {
  width: 220px;
  border-radius: 12px;
}
.product-age-block {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #23222a;
  border-radius: 8px;
  padding: 8px 18px;
}
.product-age-badge {
  background: #b6e23a;
  color: #23222a;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 1.1rem;
}
.product-age-label {
  font-size: 1.1rem;
  color: #fff;
}
.product-type {
  color: #b3b3b3;
  font-size: 1rem;
}
.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}
.product-buy {
  background: #7b61ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.product-buy:hover {
  background: #fff;
  color: #7b61ff;
}
.product-cart, .product-wishlist {
  background: #23222a;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.product-cart:hover, .product-wishlist:hover {
  background: #fff;
  color: #23222a;
}
</style> 
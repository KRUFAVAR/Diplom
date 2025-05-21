<template>
  <div class="wishlist-page">
    <Header />
    <main class="wishlist-content">
      <h2 class="wishlist-title">Мне нравится</h2>
      <WishlistInfo />
      <div class="wishlist-main">
        <div class="wishlist-main-left">
          <WishlistSort />
          <WishlistList :games="games" />
        </div>
        <div class="wishlist-main-right">
          <ProductFilters />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import WishlistInfo from '@/components/WishlistInfo.vue';
import WishlistSort from '@/components/WishlistSort.vue';
import WishlistList from '@/components/WishlistList.vue';
import ProductFilters from '@/components/ProductFilters.vue';
import { ref } from 'vue';

const games = ref([
  {
    id: 1,
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    title: 'Decimated',
    price: 'БЕСПЛАТНО',
    tags: 'Многопольз., Шутер, Лесбиян, Секс, Насилие',
    description: 'Взаимодействие между пользователями, Внутриигровые покупки'
  }
]);
</script>

<style scoped>
.wishlist-page {
  min-height: 100vh;
  background: #2a0606;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.wishlist-content {
  max-width: 1200px;
  margin: 32px auto 0 auto;
  width: 100%;
  padding: 0 24px;
}
.wishlist-title {
  font-size: 2rem;
  margin-bottom: 18px;
  text-align: left;
}
.wishlist-main {
  display: flex;
  gap: 48px;
  align-items: flex-start;
}
.wishlist-main-left {
  flex: 1 1 0;
}
.wishlist-main-right {
  flex-shrink: 0;
  min-width: 260px;
  max-width: 320px;
}
</style> 
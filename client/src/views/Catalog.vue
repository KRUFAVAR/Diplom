<template>
  <div class="catalog-page">
    <Header />
    <div class="catalog-content">
      <div class="catalog-main">
        <h2 class="catalog-title">Все игры</h2>
        <GameGrid :games="games" />
      </div>
      <ProductFilters class="catalog-filters" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import GameGrid from '@/components/GameGrid.vue';
import ProductFilters from '@/components/ProductFilters.vue';
import { ref } from 'vue';

// Пример данных для карточек
const games = ref([
  // 30+ карточек для теста
  ...Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    title: 'Название игры',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    price: i % 3 === 0 ? 'бесплатно' : `${499 + i * 10}₽`,
    discount: i % 4 === 0 ? '20%' : null
  }))
]);
</script>

<style scoped>
.catalog-page {
  min-height: 100vh;
  background: #2a0606;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.catalog-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  max-width: 1600px;
  margin: 32px auto 0 auto;
  width: 100%;
}
.catalog-main {
  flex: 1 1 0;
}
.catalog-title {
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: left;
}
.catalog-filters {
  flex-shrink: 0;
}
</style>

<template>
  <div class="cart-page">
    <Header />
    <main class="cart-content">
      <h2 class="cart-title">Корзина</h2>
      <div class="cart-main">
        <div class="cart-main-left">
          <CartList :games="games" />
        </div>
        <div class="cart-main-right">
          <CartSummary :price="totalPrice" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import CartList from '@/components/CartList.vue';
import CartSummary from '@/components/CartSummary.vue';
import { ref, computed } from 'vue';

const games = ref([
  {
    id: 1,
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    title: 'Decimated',
    price: '0.00 ₽',
    tags: 'Многопольз., Шутер, Лесбиян, Секс, Насилие',
    description: 'Взаимодействие между пользователями, Внутриигровые покупки'
  }
]);

const totalPrice = computed(() => {
  // Пример: если все бесплатные, то 0.00 ₽
  return games.value.reduce((sum, g) => sum + (parseFloat(g.price) || 0), 0).toFixed(2) + ' ₽';
});
</script>

<style scoped>
.cart-page {
  min-height: 100vh;
  background: #2a0606;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.cart-content {
  max-width: 1200px;
  margin: 32px auto 0 auto;
  width: 100%;
  padding: 0 24px;
}
.cart-title {
  font-size: 2rem;
  margin-bottom: 18px;
  text-align: left;
}
.cart-main {
  display: flex;
  gap: 48px;
  align-items: flex-start;
}
.cart-main-left {
  flex: 1 1 0;
}
.cart-main-right {
  flex-shrink: 0;
  min-width: 320px;
  max-width: 320px;
}
</style> 
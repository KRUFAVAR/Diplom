<template>
  <div class="cart-summary">
    <h3 class="cart-summary__title">Все игры</h3>
    <div class="cart-summary__row">
      <span>Цена</span>
      <span>{{ price }}</span>
    </div>
    <div class="cart-summary__row">
      <span>Налоги</span>
      <span>Россий при оформлении заказа</span>
    </div>
    <div class="cart-summary__row">
      <span>Промежуточный итог</span>
      <span>{{ price }}</span>
    </div>
    <button class="cart-summary__btn">Оформить заказ</button>
  </div>
</template>

<script setup>
const props = defineProps({
  price: {
    type: String,
    default: '0.00 ₽'
  }
});
</script>

<style scoped>
.cart-summary {
  background: #430d13;
  border-radius: 12px;
  padding: 24px 32px;
  min-width: 320px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.cart-summary__title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
}
.cart-summary__row {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 6px;
}
.cart-summary__btn {
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 18px;
  cursor: pointer;
  transition: background 0.2s;
}
.cart-summary__btn:hover {
  background: #fff;
  color: #eab308;
}
</style> 
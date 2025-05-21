<template>
  <div class="cart-item">
    <img :src="game.image" class="cart-item__img" />
    <div class="cart-item__info">
      <div class="cart-item__header">
        <span class="cart-item__title">{{ game.title }}</span>
        <span class="cart-item__price">{{ game.price }}</span>
      </div>
      <div class="cart-item__age">18+ {{ game.tags }}</div>
      <div class="cart-item__desc">{{ game.description }}</div>
      <div class="cart-item__actions">
        <button class="cart-item__remove">Удалить</button>
        <button class="cart-item__fav">Добавить в понравившиеся</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  game: Object
});
</script>

<style scoped>
.cart-item {
  display: flex;
  background: #430d13;
  border-radius: 12px;
  padding: 24px;
  gap: 24px;
  margin-bottom: 24px;
}
.cart-item__img {
  width: 160px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
.cart-item__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-item__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}
.cart-item__title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
}
.cart-item__price {
  font-size: 1.1rem;
  color: #fff;
  font-weight: bold;
}
.cart-item__age {
  font-size: 0.95rem;
  color: #eab308;
  margin-bottom: 8px;
}
.cart-item__desc {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 16px;
}
.cart-item__actions {
  display: flex;
  gap: 16px;
}
.cart-item__remove {
  background: none;
  border: none;
  color: #fff;
  opacity: 0.7;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.cart-item__remove:hover {
  opacity: 1;
  text-decoration: underline;
}
.cart-item__fav {
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 6px;
  padding: 8px 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.cart-item__fav:hover {
  background: #fff;
  color: #eab308;
}
</style> 
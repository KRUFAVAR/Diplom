<template>
  <div class="wishlist-item">
    <img :src="game.image" class="wishlist-item__img" />
    <div class="wishlist-item__info">
      <div class="wishlist-item__header">
        <span class="wishlist-item__title">{{ game.title }}</span>
        <span class="wishlist-item__price">{{ game.price }}</span>
      </div>
      <div class="wishlist-item__age">18+ {{ game.tags }}</div>
      <div class="wishlist-item__desc">{{ game.description }}</div>
      <div class="wishlist-item__actions">
        <button class="wishlist-item__remove">Удалить</button>
        <button class="wishlist-item__add">Добавить в корзину</button>
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
.wishlist-item {
  display: flex;
  background: #430d13;
  border-radius: 12px;
  padding: 24px;
  gap: 24px;
  margin-bottom: 24px;
}
.wishlist-item__img {
  width: 160px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
.wishlist-item__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wishlist-item__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}
.wishlist-item__title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
}
.wishlist-item__price {
  font-size: 1.1rem;
  color: #fff;
  font-weight: bold;
}
.wishlist-item__age {
  font-size: 0.95rem;
  color: #eab308;
  margin-bottom: 8px;
}
.wishlist-item__desc {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 16px;
}
.wishlist-item__actions {
  display: flex;
  gap: 16px;
}
.wishlist-item__remove {
  background: none;
  border: none;
  color: #fff;
  opacity: 0.7;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.wishlist-item__remove:hover {
  opacity: 1;
  text-decoration: underline;
}
.wishlist-item__add {
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 6px;
  padding: 8px 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.wishlist-item__add:hover {
  background: #fff;
  color: #eab308;
}
</style> 
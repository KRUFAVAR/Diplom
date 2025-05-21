<template>
  <div :class="['product-card', variant]">
    <img :src="game.image" class="product-card__img" />
    <div class="product-card__info">
      <div class="product-card__header">
        <span class="product-card__title">{{ game.title }}</span>
        <span class="product-card__price">{{ game.price }}</span>
      </div>
      <div v-if="variant === 'detailed'" class="product-card__age">18+ {{ game.tags }}</div>
      <div v-if="variant === 'detailed'" class="product-card__desc">{{ game.description }}</div>
      <div class="product-card__actions">
        <button v-if="showAddToCart" class="product-card__add" @click="$emit('add-to-cart', game)">В корзину</button>
        <button v-if="showRemove" class="product-card__remove" @click="$emit('remove', game)">Удалить</button>
        <button v-if="showAddToWishlist" class="product-card__fav" @click="$emit('add-to-wishlist', game)">В избранное</button>
        <button v-if="showMore || variant === 'more'" class="product-card__more" @click="goToProduct">Подробнее</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  game: Object,
  variant: {
    type: String,
    default: 'more' // 'more' по умолчанию для главной и каталога
  },
  showAddToCart: Boolean,
  showRemove: Boolean,
  showAddToWishlist: Boolean,
  showMore: Boolean
});
const router = useRouter();
function goToProduct() {
  router.push({ name: 'Product', params: { id: props.game.id } });
}
</script>

<style scoped>
.product-card {
  background: #430d13;
  border-radius: 12px;
  color: #fff;
  margin-bottom: 24px;
  overflow: hidden;
}
.product-card.compact {
  width: 220px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
.product-card.detailed {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  padding: 24px;
  gap: 24px;
}
.product-card.more {
  width: 220px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
.product-card__img {
  width: 160px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
.product-card.compact .product-card__img,
.product-card.more .product-card__img {
  width: 100%;
  height: 140px;
  margin-bottom: 12px;
}
.product-card__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}
.product-card__title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
}
.product-card__price {
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
}
.product-card__age {
  font-size: 0.95rem;
  color: #eab308;
  margin-bottom: 8px;
}
.product-card__desc {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 16px;
}
.product-card__actions {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}
.product-card__remove {
  background: none;
  border: none;
  color: #fff;
  opacity: 0.7;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.product-card__remove:hover {
  opacity: 1;
  text-decoration: underline;
}
.product-card__add, .product-card__fav, .product-card__more {
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.product-card__add:hover, .product-card__fav:hover, .product-card__more:hover {
  background: #fff;
  color: #eab308;
}
</style> 
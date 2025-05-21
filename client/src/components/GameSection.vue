<template>
  <section class="game-section">
    <h2>{{ title }}</h2>
    <div class="game-section__list">
      <ProductCard v-for="game in games" :key="game.id" :game="game" variant="more" :showAddToCart="true" @add-to-cart="$emit('add-to-cart', $event)" />
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  name: 'GameSection',
  components: { ProductCard },
  props: {
    title: String,
    games: Array
  }
};
</script>

<style scoped>
.game-section {
  margin: 40px 0;
}
.game-section__list {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style> 
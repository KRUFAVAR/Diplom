<template>
  <div>
    <ProductCard
      v-for="game in games"
      :key="game.id"
      :game="game"
      variant="detailed"
      :showRemove="true"
      :showAddToWishlist="true"
      @remove="$emit('remove', $event)"
      @add-to-wishlist="$emit('add-to-wishlist', $event)"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
const props = defineProps({
  games: Array
});
</script> 
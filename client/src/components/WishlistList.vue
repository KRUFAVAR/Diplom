<template>
  <div>
    <ProductCard
      v-for="game in games"
      :key="game.id"
      :game="game"
      variant="detailed"
      :showAddToCart="true"
      :showRemove="true"
      @add-to-cart="$emit('add-to-cart', $event)"
      @remove="$emit('remove', $event)"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
const props = defineProps({
  games: Array
});
</script> 
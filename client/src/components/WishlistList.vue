<template>
  <div>
    <WishlistItem v-for="game in games" :key="game.id" :game="game" />
  </div>
</template>

<script setup>
import WishlistItem from './WishlistItem.vue';
const props = defineProps({
  games: Array
});
</script> 
<template>
  <div>
    <CartItem v-for="game in games" :key="game.id" :game="game" />
  </div>
</template>

<script setup>
import CartItem from './CartItem.vue';
const props = defineProps({
  games: Array
});
</script> 
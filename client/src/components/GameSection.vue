<template>
  <section class="game-section">
    <h2>{{ title }}</h2>
    <div class="game-section__list">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </section>
</template>

<script>
import GameCard from './GameCard.vue';
export default {
  name: 'GameSection',
  components: { GameCard },
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
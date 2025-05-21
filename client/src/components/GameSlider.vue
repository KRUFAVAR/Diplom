<template>
  <div class="game-slider">
    <button class="slider-arrow left" @click="prev" aria-label="Назад">&#8592;</button>
    <div class="slider-track">
      <ProductCard v-for="game in visibleGames" :key="game.id" :game="game" variant="more" :showAddToCart="true" @add-to-cart="$emit('add-to-cart', $event)" />
    </div>
    <button class="slider-arrow right" @click="next" aria-label="Вперёд">&#8594;</button>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  name: 'GameSlider',
  components: { ProductCard },
  props: {
    games: Array
  },
  data() {
    return {
      start: 0,
      visibleCount: 3
    };
  },
  computed: {
    visibleGames() {
      return this.games.slice(this.start, this.start + this.visibleCount);
    }
  },
  methods: {
    prev() {
      if (this.start > 0) this.start--;
    },
    next() {
      if (this.start < this.games.length - this.visibleCount) this.start++;
    }
  }
};
</script>

<style scoped>
.game-slider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 32px 0;
}
.slider-track {
  display: flex;
  gap: 24px;
  overflow: hidden;
}
.slider-arrow {
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
}
.slider-arrow:hover {
  background: #fff;
  color: #eab308;
}
</style> 
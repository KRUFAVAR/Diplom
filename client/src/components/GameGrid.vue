<template>
  <div class="game-grid-wrapper">
    <div class="game-grid">
      <GameCard v-for="game in paginatedGames" :key="game.id" :game="game" />
    </div>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="prevPage">&lt;</button>
      <button v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }" @click="goToPage(page)">{{ page }}</button>
      <button :disabled="currentPage === totalPages" @click="nextPage">&gt;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import GameCard from './GameCard.vue';

const props = defineProps({
  games: {
    type: Array,
    required: true
  },
  pageSize: {
    type: Number,
    default: 24
  }
});

const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(props.games.length / props.pageSize));

const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * props.pageSize;
  return props.games.slice(start, start + props.pageSize);
});

function goToPage(page) {
  currentPage.value = page;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

watch(() => props.games, () => {
  currentPage.value = 1;
});
</script>

<style scoped>
.game-grid-wrapper {
  width: 100%;
}
.game-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 24px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin: 32px 0 0 0;
  gap: 8px;
}
.pagination button {
  background: #2a0606;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 1rem;
}
.pagination button.active {
  background: #eab308;
  color: #2a0606;
  font-weight: bold;
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> 
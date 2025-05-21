<template>
  <div>
    <NewsItem v-for="item in paginatedNews" :key="item.id" :news="item" />
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="prevPage">&lt;</button>
      <button v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }" @click="goToPage(page)">{{ page }}</button>
      <button :disabled="currentPage === totalPages" @click="nextPage">&gt;</button>
    </div>
  </div>
</template>

<script setup>
import NewsItem from './NewsItem.vue';
import { ref, computed, watch } from 'vue';

const props = defineProps({
  news: Array,
  pageSize: {
    type: Number,
    default: 5
  }
});

const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(props.news.length / props.pageSize));

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * props.pageSize;
  return props.news.slice(start, start + props.pageSize);
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

watch(() => props.news, () => {
  currentPage.value = 1;
});
</script>

<style scoped>
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
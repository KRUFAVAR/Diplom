<template>
  <div class="wishlist-sort">
    <label for="sort-select" class="wishlist-sort__label">Сортировка:</label>
    <select id="sort-select" v-model="selected" class="wishlist-sort__select">
      <option value="sale">Распродажа</option>
      <option value="new">Новинки</option>
      <option value="popular">Популярные</option>
      <option value="alphabet">По алфавиту</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const selected = ref('sale');
</script>

<style scoped>
.wishlist-sort {
  margin-bottom: 18px;
}
.wishlist-sort__label {
  color: #fff;
  font-size: 1rem;
  margin-right: 8px;
}
.wishlist-sort__select {
  background: #430d13;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 1rem;
}
</style> 
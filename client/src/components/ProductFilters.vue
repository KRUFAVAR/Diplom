<template>
  <aside class="filters">
    <div class="filters-header">
      <span>Фильтры</span>
      <button class="reset" @click="$emit('reset-filters')">перезапустить</button>
    </div>
    <input v-model="search" type="text" placeholder="Ключевые слова" class="search-input" />
    <div class="filter-group" v-for="filter in filterList" :key="filter.label">
      <div class="filter-label" @click="toggle(filter.label)">
        {{ filter.label }}
        <span>{{ opened[filter.label] ? '▲' : '▼' }}</span>
      </div>
      <div v-if="opened[filter.label]" class="filter-options">
        <div v-for="option in filter.options" :key="option">
          <label>
            <input type="checkbox" :value="option" v-model="selected[filter.label]" />
            {{ option }}
          </label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, reactive } from 'vue';

const search = ref('');
const filterList = [
  { label: 'Скидки', options: ['Есть скидка', 'Без скидки'] },
  { label: 'Платформа', options: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
  { label: 'Цена', options: ['Бесплатно', 'До 500₽', '500-2000₽', '2000₽+'] },
  { label: 'События', options: ['Турнир', 'Сезон', 'Обновление'] },
  { label: 'Особенности', options: ['Кооператив', 'Синглплеер', 'VR', 'Русский язык'] },
  { label: 'Виды', options: ['2D', '3D', 'VR'] },
];
const opened = reactive({});
const selected = reactive({});

filterList.forEach(f => {
  opened[f.label] = false;
  selected[f.label] = [];
});

function toggle(label) {
  opened[label] = !opened[label];
}
</script>

<style scoped>
.filters {
  background: #210202;
  color: #fff;
  padding: 24px;
  border-radius: 12px;
  min-width: 260px;
  max-width: 320px;
}
.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.reset {
  background: none;
  border: none;
  color: #eab308;
  cursor: pointer;
  font-size: 0.95rem;
}
.search-input {
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  margin-bottom: 18px;
  background: #3a1818;
  color: #fff;
}
.filter-group {
  margin-bottom: 18px;
}
.filter-label {
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.filter-options {
  padding-left: 12px;
}
</style> 
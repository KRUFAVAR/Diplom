<template>
  <div class="news-item">
    <img :src="news.image" class="news-img" />
    <div class="news-info">
      <div class="news-time">{{ news.time }}</div>
      <div class="news-title">{{ news.title }}</div>
      <div class="news-desc">{{ news.description }}</div>
      <a :href="news.link" class="news-link">Подробнее</a>
    </div>
  </div>
  <hr class="news-divider" />
</template>

<script setup>
const props = defineProps({ news: Object })
</script>

<style scoped>
.news-item {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}
.news-img {
  width: 180px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}
.news-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.news-time {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 4px;
}
.news-title {
  font-weight: bold;
  margin-bottom: 6px;
}
.news-desc {
  margin-bottom: 8px;
}
.news-link {
  color: #eab308;
  text-decoration: underline;
  font-size: 1rem;
  align-self: flex-start;
}
.news-divider {
  border: none;
  border-top: 1px solid #fff2;
  margin: 8px 0 16px 0;
}
</style> 
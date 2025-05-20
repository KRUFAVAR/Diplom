<template>
  <div class="news-slider">
    <button class="slider-arrow left" @click="prev" aria-label="Назад">&#8592;</button>
    <div class="slider-track">
      <div v-for="newsItem in visibleNews" :key="newsItem.id" class="news-card">
        <img :src="newsItem.image" :alt="newsItem.title" class="news-card__img" />
        <div class="news-card__content">
          <h4>{{ newsItem.title }}</h4>
          <p>{{ newsItem.text }}</p>
        </div>
      </div>
    </div>
    <button class="slider-arrow right" @click="next" aria-label="Вперёд">&#8594;</button>
  </div>
</template>

<script>
export default {
  name: 'NewsSlider',
  props: {
    news: Array
  },
  data() {
    return {
      start: 0,
      visibleCount: 2
    };
  },
  computed: {
    visibleNews() {
      return this.news.slice(this.start, this.start + this.visibleCount);
    }
  },
  methods: {
    prev() {
      if (this.start > 0) this.start--;
    },
    next() {
      if (this.start < this.news.length - this.visibleCount) this.start++;
    }
  }
};
</script>

<style scoped>
.news-slider {
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
.news-card {
  background: #2a0606;
  border-radius: 12px;
  box-shadow: 0 2px 12px #0005;
  overflow: hidden;
  width: 340px;
  display: flex;
  flex-direction: column;
}
.news-card__img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}
.news-card__content {
  padding: 14px 12px 16px 12px;
  color: #fff;
}
.news-card__content h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
}
.news-card__content p {
  font-size: 0.97rem;
  opacity: 0.8;
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
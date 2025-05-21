<template>
  <div class="home">
    <Header />
    <main class="main-content">
      <MainBanner />
      <PromoBanner />
      <section class="slider-section">
        <h2>Рекомендуем</h2>
        <GameSlider :games="games" />
      </section>
      <section class="news-section">
        <h2>Новости</h2>
        <NewsSlider :news="newsList" />
      </section>
      <GameSection title="Лучшие по оценкам" :games="games" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import MainBanner from '@/components/MainBanner.vue';
// import GameCard from '@/components/GameCard.vue';
import GameSlider from '@/components/GameSlider.vue';
import PromoBanner from '@/components/PromoBanner.vue';
import NewsSlider from '@/components/NewsSlider.vue';
import GameSection from '@/components/GameSection.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const games = ref([
  { id: 1, title: 'Backrooms Furry', genre: 'Horror', rating: 4.7, image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2823650/header.jpg' },
  { id: 2, title: 'Infinity Nikki', genre: 'Adventure', rating: 4.5, image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2346830/header.jpg' },
  { id: 3, title: 'Wuthering Waves', genre: 'RPG', rating: 4.8, image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg' },
  { id: 4, title: 'Valorant', genre: 'Shooter', rating: 4.6, image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg' }
]);

const newsList = ref([
  { id: 1, title: 'Сезон фейерверков!', text: 'Встречайте новый сезон с уникальными наградами и событиями.', image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2346830/header.jpg' },
  { id: 2, title: 'Обновление магазина', text: 'Добавлены новые игры и скидки до 70% на хиты!', image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2823650/header.jpg' },
  { id: 3, title: 'Турнир по Valorant', text: 'Участвуйте в турнире и выигрывайте призы!', image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg' }
]);
</script>

<style scoped>
.home {
  background: #2a0606;
  min-height: 100vh;
}
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.slider-section, .news-section {
  margin: 40px 0;
}
</style>

<template>
  <div class="news-page">
    <Header />
    <main class="news-content">
      <h2 class="news-title">Новости Game World</h2>
      <NewsList :news="news" :page-size="5" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import NewsList from '@/components/NewsList.vue';
import { ref } from 'vue';

const news = ref([
  {
    id: 1,
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    time: '9 часов назад',
    title: 'Руководство по бою в FINAL FANTASY VII REBIRTH: лучшие синергические навыки и способности',
    description: 'FINAL FANTASY VII REBIRTH наконец-то вышла на ПК. Используйте возможности Клауда, ...',
    link: '#'
  },
  {
    id: 2,
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    time: '9 часов назад',
    title: 'Руководство по бою в FINAL FANTASY VII REBIRTH: лучшие синергические навыки и способности',
    description: 'FINAL FANTASY VII REBIRTH наконец-то вышла на ПК. Используйте возможности Клауда, ...',
    link: '#'
  },
  {
    id: 3,
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    time: '9 часов назад',
    title: 'Руководство по бою в FINAL FANTASY VII REBIRTH: лучшие синергические навыки и способности',
    description: 'FINAL FANTASY VII REBIRTH наконец-то вышла на ПК. Используйте возможности Клауда, ...',
    link: '#'
  },
  {
    id: 4,
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    time: '9 часов назад',
    title: 'Руководство по бою в FINAL FANTASY VII REBIRTH: лучшие синергические навыки и способности',
    description: 'FINAL FANTASY VII REBIRTH наконец-то вышла на ПК. Используйте возможности Клауда, ...',
    link: '#'
  },
  {
    id: 5,
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    time: '9 часов назад',
    title: 'Руководство по бою в FINAL FANTASY VII REBIRTH: лучшие синергические навыки и способности',
    description: 'FINAL FANTASY VII REBIRTH наконец-то вышла на ПК. Используйте возможности Клауда, ...',
    link: '#'
  },
  {
    id: 6,
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2139460/header.jpg',
    time: '9 часов назад',
    title: 'Руководство по бою в FINAL FANTASY VII REBIRTH: лучшие синергические навыки и способности',
    description: 'FINAL FANTASY VII REBIRTH наконец-то вышла на ПК. Используйте возможности Клауда, ...',
    link: '#'
  }
]);
</script>

<style scoped>
.news-page {
  min-height: 100vh;
  background: #2a0606;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.news-content {
  max-width: 1200px;
  margin: 32px auto 0 auto;
  width: 100%;
  padding: 0 24px;
}
.news-title {
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: left;
}
</style> 
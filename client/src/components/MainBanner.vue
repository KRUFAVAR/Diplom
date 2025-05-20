<template>
  <section class="main-banner">
    <div class="main-banner__image">
      <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1608070/header.jpg" alt="Final Fantasy VII" />
    </div>
    <div class="main-banner__content">
      <h1>Final Fantasy VII Remake</h1>
      <p>Погрузись в легендарное приключение с обновлённой графикой и геймплеем!</p>
      <button class="main-banner__btn">Играть</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainBanner',
};
</script>

<style scoped>
.main-banner {
  display: flex;
  align-items: center;
  background: #1a0505;
  border-radius: 18px;
  overflow: hidden;
  margin: 32px 0 24px 0;
  min-height: 340px;
  box-shadow: 0 4px 32px #0006;
}
.main-banner__image img {
  width: 520px;
  height: 340px;
  object-fit: cover;
  border-radius: 18px 0 0 18px;
}
.main-banner__content {
  padding: 32px 40px;
  color: #fff;
}
.main-banner__content h1 {
  font-size: 2.2rem;
  margin-bottom: 12px;
}
.main-banner__content p {
  font-size: 1.1rem;
  margin-bottom: 22px;
  opacity: 0.85;
}
.main-banner__btn {
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.main-banner__btn:hover {
  background: #fff;
  color: #eab308;
}
</style> 
<template>
  <div class="game-card" :class="{ 'game-card--large': large }">
    <img class="game-card__img" :src="game.image" :alt="game.title" />
    <div class="game-card__info">
      <h3 class="game-card__title">{{ game.title }}</h3>
      <div class="game-card__genre">{{ game.genre }}</div>
      <div class="game-card__rating">★ {{ game.rating }}</div>
      <button class="game-card__btn">Подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    game: Object,
    large: Boolean
  }
};
</script>

<style scoped>
.game-card {
  background: #2a0606;
  border-radius: 14px;
  box-shadow: 0 2px 12px #0005;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 180px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.game-card--large {
  width: 340px;
  flex-direction: row;
}
.game-card__img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}
.game-card--large .game-card__img {
  width: 160px;
  height: 180px;
}
.game-card__info {
  padding: 14px 12px 16px 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.game-card__title {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
}
.game-card__genre {
  font-size: 0.95rem;
  opacity: 0.7;
}
.game-card__rating {
  font-size: 0.95rem;
  color: #eab308;
}
.game-card__btn {
  margin-top: 8px;
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 6px;
  padding: 7px 0;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.game-card__btn:hover {
  background: #fff;
  color: #eab308;
}
</style> 
<template>
  <div class="promo-banner">
    <div class="promo-banner__icon">💸</div>
    <div class="promo-banner__content">
      <h3>Больше экономьте, больше играйте!</h3>
      <p>Покупайте любимые игры со скидкой.</p>
      <button class="promo-banner__btn">Открыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoBanner',
};
</script>

<style scoped>
.promo-banner {
  display: flex;
  align-items: center;
  background: #3a1818;
  border-radius: 14px;
  padding: 24px 32px;
  color: #fff;
  box-shadow: 0 2px 12px #0004;
  margin: 24px 0;
  gap: 24px;
}
.promo-banner__icon {
  font-size: 2.5rem;
  background: #eab308;
  color: #2a0606;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.promo-banner__content h3 {
  margin: 0 0 8px 0;
  font-size: 1.3rem;
}
.promo-banner__btn {
  margin-top: 10px;
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 6px;
  padding: 8px 22px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.promo-banner__btn:hover {
  background: #fff;
  color: #eab308;
}
</style> 
<template>
  <footer class="footer">
    <div class="footer__socials">
      <a href="#" class="footer__icon" aria-label="YouTube">▶️</a>
      <a href="#" class="footer__icon" aria-label="VK">🌐</a>
    </div>
    <div class="footer__links">
      <a href="#">О проекте</a>
      <a href="#">Контакты</a>
      <a href="#">Политика конфиденциальности</a>
    </div>
    <div class="footer__copyright">
      © 2024 GAME WORLD. Все права защищены.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background: #1a0505;
  color: #fff;
  padding: 32px 0 18px 0;
  text-align: center;
  margin-top: 48px;
}
.footer__socials {
  margin-bottom: 12px;
}
.footer__icon {
  font-size: 2rem;
  margin: 0 10px;
  color: #eab308;
  text-decoration: none;
  transition: color 0.2s;
}
.footer__icon:hover {
  color: #fff;
}
.footer__links {
  margin-bottom: 10px;
}
.footer__links a {
  color: #fff;
  margin: 0 12px;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.footer__links a:hover {
  opacity: 1;
  text-decoration: underline;
}
.footer__copyright {
  font-size: 0.95rem;
  opacity: 0.7;
}
</style> 
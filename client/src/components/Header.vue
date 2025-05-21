<template>
  <header class="header">
    <div class="header__logo">GAME WORLD</div>
    <nav class="header__nav">
      <router-link to="/" class="header__link" active-class="active" exact>Главная</router-link>
      <router-link to="/catalog" class="header__link" active-class="active">Все игры</router-link>
      <router-link to="/news" class="header__link" active-class="active">Новости</router-link>
    </nav>
    <div class="header__search">
      <input type="text" placeholder="Поиск..." />
    </div>
    <div class="header__profile">
      <button class="header__login">Войти</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: #2a0606;
  color: #fff;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.header__logo {
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 2px;
}
.header__nav {
  display: flex;
  gap: 24px;
}
.header__link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.header__link.active,
.header__link.router-link-exact-active {
  opacity: 1;
  border-bottom: 2px solid #eab308;
}
.header__search input {
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  background: #3a1818;
  color: #fff;
}
.header__profile {
  margin-left: 24px;
}
.header__login {
  background: #eab308;
  color: #2a0606;
  border: none;
  border-radius: 6px;
  padding: 7px 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.header__login:hover {
  background: #fff;
  color: #eab308;
}
</style> 
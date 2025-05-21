<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <span class="logo">GameWorld</span>
        <a href="#" class="support">Поддержка</a>
      </div>
      <div class="header-top-right">
        <span class="user-avatar"></span>
        <span class="user-name">User</span>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-left">
        <div class="search-box">
          <span class="search-icon">&#128269;</span>
          <input type="text" placeholder="Поиск..." />
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link" active-class="active" exact>Главное</router-link>
          <router-link to="/catalog" class="nav-link" active-class="active">Все игры</router-link>
          <router-link to="/news" class="nav-link" active-class="active">Новости</router-link>
        </nav>
      </div>
      <div class="header-bottom-right">
        <router-link to="/Wishlist" class="nav-link" active-class="active" exact>Главное</router-link>
        <router-link to="/cart" class="nav-link" active-class="active">Все игры</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
// пусто
</script>

<style scoped>
.header {
  width: 100%;
  background: #2a0606;
  color: #fff;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 44px 0 44px;
}
.header-top-left {
  display: flex;
  align-items: center;
  gap: 32px;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
}
.support {
  color: #fff;
  opacity: 0.8;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.2s;
}
.support:hover {
  opacity: 1;
}
.header-top-right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.user-avatar {
  width: 40px;
  height: 40px;
  background: #d9d9d9;
  border-radius: 50%;
  display: inline-block;
}
.user-name {
  font-size: 1.1rem;
  color: #fff;
}
.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 140px;
  padding: 0 44px 0 44px;
}
.header-bottom-left {
  display: flex;
  align-items: center;
  gap: 40px;
}
.search-box {
  display: flex;
  align-items: center;
  background: #430d13;
  border-radius: 20px;
  padding: 0 16px;
  width: 260px;
  height: 36px;
}
.search-icon {
  color: #fff;
  margin-right: 6px;
  font-size: 1.1rem;
}
.search-box input {
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
  width: 100%;
  font-size: 1rem;
  padding: 6px 0;
}
.nav {
  display: flex;
  gap: 32px;
}
.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  opacity: 0.9;
  padding: 4px 18px;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: border 0.2s, opacity 0.2s;
}
.nav-link.active,
.nav-link.router-link-exact-active {
  border: 2px solid #fff;
  opacity: 1;
}
.nav-link:hover {
  opacity: 1;
}
.header-bottom-right {
  display: flex;
  align-items: center;
  gap: 32px;
}
</style> 
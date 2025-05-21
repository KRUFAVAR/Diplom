<!-- уведомление + тумблер. -->
<template>
  <div class="wishlist-info">
    <div class="wishlist-info__icon">&#9888;</div>
    <div class="wishlist-info__text">
      Получайте уведомления о скидках на игры из вашего списка желаемого, а также узнавайте, когда они становятся доступны для покупки или предзаказу.
    </div>
    <div class="wishlist-info__toggle">
      <label class="switch">
        <input type="checkbox" v-model="enabled" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const enabled = ref(true);
</script>

<style scoped>
.wishlist-info {
  display: flex;
  align-items: center;
  background: #430d13;
  border-radius: 8px;
  padding: 16px 24px;
  margin-bottom: 24px;
  gap: 18px;
  position: relative;
}
.wishlist-info__icon {
  color: #eab308;
  font-size: 1.5rem;
}
.wishlist-info__text {
  flex: 1;
  font-size: 1rem;
  color: #fff;
}
.wishlist-info__toggle {
  margin-left: 16px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #d9d9d9;
  border-radius: 24px;
  transition: .4s;
}
.switch input:checked + .slider {
  background: #eab308;
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: #fff;
  border-radius: 50%;
  transition: .4s;
}
.switch input:checked + .slider:before {
  transform: translateX(24px);
}
</style> 
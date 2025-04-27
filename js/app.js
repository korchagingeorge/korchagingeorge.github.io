import { initWheel } from './wheel.js';
import { tgCall }    from './api.js';
import Swiper from 'https://unpkg.com/swiper@11/swiper-bundle.esm.browser.min.js';

const tg = window.Telegram.WebApp;
tg.ready();               // обязательный вызов

// Проверяем подписку перед показом приложения
(async () => {
  const ok = await tgCall('check_sub', {});   // backend вернёт true/false
  if (!ok) {
    tg.showAlert('Сначала подпишитесь на @tonspace_channel!');
    tg.close();          // если не подписан – выкидываем
  }
})();

const $app = document.getElementById('app');
$app.innerHTML = `
  <div class="swiper">
    <div class="swiper-wrapper">
      <section class="swiper-slide" id="profile"></section>
      <section class="swiper-slide" id="referrals"></section>
      <section class="swiper-slide" id="wheel"></section>
      <section class="swiper-slide" id="shop"></section>
      <section class="swiper-slide" id="tasks"></section>
    </div>
  </div>
  <nav class="tabbar">
    <button data-to="0">Профиль</button>
    <button data-to="1">Топ</button>
    <button data-to="2" class="active">Колесо</button>
    <button data-to="3">Магазин</button>
    <button data-to="4">Задания</button>
  </nav>
`;

const swiper = new Swiper('.swiper', {
  initialSlide: 2,
  on: { slideChange: ({activeIndex}) => {
      document.querySelectorAll('.tabbar button')
              .forEach((b,i)=>b.classList.toggle('active',i===activeIndex));
  }}
});
document.querySelectorAll('.tabbar button').forEach(b=>{
  b.onclick = ()=>swiper.slideTo(+b.dataset.to);
});

// инициализация отдельных экранов
initWheel(document.getElementById('wheel'));

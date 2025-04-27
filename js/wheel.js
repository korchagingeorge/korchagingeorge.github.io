import { tgCall } from './api.js';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export function initWheel(root){
  root.innerHTML = `<button class="spin card">КРУТИТЬ за 1 🎟️</button>`;
  const btn = root.querySelector('.spin');

  btn.onclick = async ()=>{
    btn.disabled = true;
    const res = await tgCall('spin', {}); // backend вернёт {prize:"🏆" | "🚀" | ... | null, tickets_delta:+1/-1/-10/...}
    animateWheel(res.prize);
    btn.disabled = false;
  };
}

function animateWheel(prize){
  if (!prize) return;
  confetti({particleCount:150,spread:70});
  window.Telegram.WebApp.showPopup({title:'Поздравляем!',message:`Вы выиграли ${prize}`,buttons:[{id:'ok',type:'default',text:'Ура!'}]});
}

// Выполняем по завершении загрузки страницы
window.addEventListener("load", function onWindowLoad() {
    // Инициализируем переменные
    // Генерируем палитру в элемент #palette
    generatePalette(document.getElementById("palette"));
 
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
 
    // переменные для рисования
    ctx.lineCap = "round";
    ctx.lineWidth = 8;
 
    // вешаем обработчики на кнопки
    // очистка изображения
    document.getElementById("clear").onclick = function clear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
 
    // На любое движение мыши по canvas будет выполнятся эта функция
    canvas.onmousemove = function drawIfPressed (e) {
      // в "e"  попадает экземпляр MouseEvent
      let x = e.offsetX;
      let y = e.offsetY;
      let dx = e.movementX;
      let dy = e.movementY;
 
      // Проверяем зажата ли какая-нибудь кнопка мыши
      // Если да, то рисуем
      if (e.buttons > 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - dx, y - dy);
        ctx.stroke();
        ctx.closePath();
      }
    };
 
    function generatePalette(palette) {
      // генерируем палитру
      // в итоге 5^3 цветов = 125
      for (let r = 0, max = 4; r <= max; r++) {
        for (let g = 0; g <= max; g++) {
          for (let b = 0; b <= max; b++) {
            let paletteBlock = document.createElement('div');
            paletteBlock.className = 'button';
            paletteBlock.addEventListener('click', function changeColor(e) {
              ctx.strokeStyle = e.target.style.backgroundColor;
            });
 
            paletteBlock.style.backgroundColor = (
              'rgb(' + Math.round(r * 255 / max) + ", "
              + Math.round(g * 255 / max) + ", "
              + Math.round(b * 255 / max) + ")"
            );
 
            palette.appendChild(paletteBlock);
          }
        }
      }
    }
});
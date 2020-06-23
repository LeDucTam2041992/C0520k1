/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speedX,speedY) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speedX = speedX;
  this.speedY = speedY;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.move = function () {
    this.left += this.speedX;
    this.top += this.speedY;
  }
}

var hero = new Hero('pikachu.png', 0, 0, 200,50,0);

function start(){
  hero.move();
  if(hero.left <= window.innerWidth - hero.size) {
    hero.speedY = hero.speedX;
    hero.speedX =0;
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}
start();


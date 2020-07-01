const mapWidth = 960;
const mapHeight = 640;
const myShipWidth = 60;
const myShipHeight = 60;
const enemyWidth = 50;
const enemyHeight = 50;
const bulletWidth = 10;
const bulletHeight = 10;
let spaceShip;
let enemy = new Array(20);
let enemySpeed = 2;
let myBackGround;
let bullets =[];
let timeShoot = 0;
let score = 0;
let gameMusic;
let myScore;
function startGame() {
    spaceShip = new component(myShipWidth, myShipHeight, 'spaceship.png',
        (mapWidth-myShipWidth)/2,mapHeight-myShipHeight,'image');
    for (let i =0; i< enemy.length; i++) {
        let x = Math.floor(Math.random()*(mapWidth - enemyWidth));
        let y = -Math.floor(Math.random()*mapHeight);
        enemy[i] = new component(enemyWidth, enemyHeight, "enemy.png", x, y, 'image');
    }
    myBackGround = new component(mapWidth,mapHeight*2,'background.png',0,0,'background')
    myScore = new Score(0,'Consoles','blue', 800,50);
    gameMusic = new sound("Music.mp3");
    gameMusic.play();
    myGameArea.start();
}





const mapWidth = 960;
const mapHeight = 540;
const myShipWidth = 60;
const myShipHeight = 60;
const enemyWidth = 40;
const enemyHeight = 40;
const bulletWidth = 10;
const bulletHeight = 10;
let mySpaceShip;
let enemy = new Array(20);
let enemySpeed = 2;
let myBackGround;
let bullets =[];
let count = 0;
let score = 0;
function startGame() {
    myGameArea.start();
    mySpaceShip = new component(myShipWidth, myShipHeight, 'spaceship.png',
        (mapWidth-myShipWidth)/2,mapHeight-myShipHeight,'image');
    for (let i =0; i< enemy.length; i++) {
        let x = Math.floor(Math.random()*(mapWidth - enemyWidth));
        let y = -Math.floor(Math.random()*mapHeight);
        enemy[i] = new component(enemyWidth, enemyHeight, "enemy.png", x, y, 'image');
    }
    myBackGround = new component(mapWidth,mapHeight*2,'background.png',0,0,'background')
    myScore = new myScore(0,'Consoles','blue', 800,50);
}


function shoot() {
    count++;
    if (count >= 10) {
        let bullet = new component(bulletWidth, bulletHeight, 'red',
            (mySpaceShip.x + (mySpaceShip.width - bulletWidth)/2), mySpaceShip.y);
        bullets.push(bullet);
        count = 0;
    }
}

function updateGameArea() {
    for (let i = 0; i < enemy.length; i++) {
        if (mySpaceShip.crashWith(enemy[i])) {
            myGameArea.stop();
            return;
        }
    }
// ------------------------Reload BackGround-------------------------
    myGameArea.clear();
    myBackGround.speedY = 1;
    myBackGround.newPos();
    myBackGround.update();
// ----------------------Check enemy and bullet ---------------------
    for (let i = 0; i < enemy.length; i++) {
        if (enemy[i].y >= mapHeight) {
            enemy[i].x = Math.floor(Math.random()*(mapWidth - enemyWidth));
            enemy[i].y = -Math.floor(Math.random()*mapHeight);
        }
        for (let j = 0; j< bullets.length; j++){
            if(enemy[i].crashWith(bullets[j])) {
                enemy[i].x = Math.floor(Math.random()*(mapWidth - enemyWidth));
                enemy[i].y = -Math.floor(Math.random()*mapHeight);
                bullets.splice(j,1);
                score++;
                if (score%10==0) enemySpeed+=1;
            }
        }
        enemy[i].speedY = enemySpeed;
        enemy[i].newPos();
        enemy[i].update();
    }
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].y < 0 ) {
            bullets.splice(i, 1);
        } else {
            bullets[i].speedY = -10;
            bullets[i].newPos();
            bullets[i].update();
        }
    }
    myScore.point = 'Score = '+score;
    myScore.update();
// --------------Control mySpaceShip and update----------------
        mySpaceShip.speedX = 0;
        mySpaceShip.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {mySpaceShip.speedX = -2;}
    if (myGameArea.keys && myGameArea.keys[39]) {mySpaceShip.speedX = 2;}
    if (myGameArea.keys && myGameArea.keys[38]) {mySpaceShip.speedY = -2;}
    if (myGameArea.keys && myGameArea.keys[40]) {mySpaceShip.speedY = 2;}
    if (myGameArea.keys && myGameArea.keys[32]) { shoot(); }
        mySpaceShip.newPos();
        mySpaceShip.update();
}

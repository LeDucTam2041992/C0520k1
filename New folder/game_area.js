var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = mapWidth;
        this.canvas.height = mapHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea,20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    clear : function () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}
function updateGameArea() {
    function shoot() {
        timeShoot++;
        if (timeShoot >= 10) {
            let bullet = new component(bulletWidth, bulletHeight, 'red',
                (spaceShip.x + (spaceShip.width - bulletWidth)/2), spaceShip.y);
            bullets.push(bullet);
            timeShoot = 0;
        }
    }
    for (let i = 0; i < enemy.length; i++) {
        if (spaceShip.crashWith(enemy[i])) {
            myGameArea.stop();
            return;
        }
    }
    myGameArea.clear();
    myBackGround.speedY = 1;
    myBackGround.newPos();
    myBackGround.update();
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
    spaceShip.speedX = 0;
    spaceShip.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {spaceShip.speedX = -2;}
    if (myGameArea.keys && myGameArea.keys[39]) {spaceShip.speedX = 2;}
    if (myGameArea.keys && myGameArea.keys[38]) {spaceShip.speedY = -2;}
    if (myGameArea.keys && myGameArea.keys[40]) {spaceShip.speedY = 2;}
    if (myGameArea.keys && myGameArea.keys[32]) { shoot(); }
    spaceShip.newPos();
    spaceShip.update();
}
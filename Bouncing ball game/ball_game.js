function GameBoard(weight,height) {
    this.weight = weight;
    this.height = height;
    this.getTopMap = function () {
        return 40;
    }
    this.getBotMap = function () {
        return 40+this.height;
    }
    this.getLeftMap = function () {
        return 150;
    }
    this.getRightMap = function () {
        return 150 +this.weight;
    }
    this.show = function () {
        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect((800-this.weight)/2 ,40, this.weight, this.height);
        ctx.stroke();
    }
}

function Bar(weight,positionX) {
    this.weight = weight;
    this.positionX = positionX;
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    this.getWeight = function () {
        return this.weight;
    }
    this.getPositionX = function() {
        return this.positionX;
    }
    this.show = function () {
        ctx.beginPath();
        ctx.rect(this.positionX ,470, this.weight, 10);
        ctx.fillStyle ="black";
        ctx.closePath();
        ctx.fill();
    }
    this.leftArrowPressed = function () {
        ctx.clearRect(this.positionX ,470, this.weight, 15);
        this.positionX -=10;
        this.show();
    };
    this.rightArrowPressed = function () {
        ctx.clearRect(this.positionX ,470, this.weight, 15);
        this.positionX +=10;
        this.show();
    }
}

function Ball(positionX,positionY,radius,speedX,speedY) {
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = radius;
    this.positionX = positionX;
    this.positionY = positionY;

    // this.getRadius = function () {
    //     return this.radius;
    // }
    // this.getPositionX =function () {
    //     return this.positionX
    // }
    // this.getPositionY =function () {
    //     return this.positionY
    // }

    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    this.show = function () {
        ctx.beginPath();
        ctx.arc(this.positionX,this.positionY,this.radius,0,2*Math.PI);
        ctx.fillStyle ="orange";
        ctx.closePath();
        ctx.fill();
    }

    this.checkCollision = function (topMap,botMap,leftMap,rightMap) {
        this.topBall = this.positionY - this.radius;
        this.botBall = this.positionY + this.radius;
        this.leftBall = this.positionX - this.radius;
        this.rightBall = this.positionX + this.radius;
        this.topMap = topMap;
        this.botMap = botMap;
        this.leftMap = leftMap;
        this.rightMap = rightMap;
        if (this.topBall<=this.topMap+2 || this.botBall>=this.botMap-2) {
            this.speedY = -this.speedY;
        }
        if (this.leftBall<=this.leftMap+2 || this.rightBall>=this.rightMap-2) {
            this.speedX = -this.speedX;
        }
    }

    this.move = function () {
        ctx.clearRect(this.positionX-this.radius, this.positionY-this.radius,2*this.radius,2*this.radius);
        this.positionX+=this.speedX;
        this.positionY+=this.speedY;
    }
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            if (bar.getPositionX()>gameBoard.getLeftMap()) bar.leftArrowPressed();
            break;
        case 39:
            if (bar.getPositionX()+bar.getWeight()<gameBoard.getRightMap()) bar.rightArrowPressed();
            break;
    }
}
function play(){
    ball.move();
    ball.show();
    ball.checkCollision(gameBoard.getTopMap(),gameBoard.getBotMap(),gameBoard.getLeftMap(),
        gameBoard.getRightMap())
}

let gameBoard = new GameBoard(500,500);
let ball = new Ball(200,200, 10,2, 1);
let bar = new Bar(150,300);
gameBoard.show();
bar.show();

function docReady() {
    window.addEventListener('keydown', moveSelection);
    setInterval('play()',10);
}

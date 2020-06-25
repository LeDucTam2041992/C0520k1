function component(width, height, color, x, y, type) {
    this.type = type;
    if (this.type == "image" || this.type == 'background') {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            this.image = new Image();
            this.image.src = color;
        }
            if (type == "image" || type == "background") {
                ctx.drawImage(this.image,
                    this.x,
                    this.y,
                    this.width, this.height);
                if (type == "background") {
                    ctx.drawImage(this.image,
                        this.x,
                        this.y - this.height/2,
                        this.width, this.height);
                }
            } else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }

    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.y == this.height/2) {
                this.y = 0;
            }
        }
    }
    this.crashWith = function(otherObj) {
        let myLeft = this.x;
        let myRight = this.x + (this.width);
        let myTop = this.y;
        let myBottom = this.y + (this.height);
        let objLeft = otherObj.x;
        let objRight = otherObj.x + (otherObj.width);
        let objTop = otherObj.y;
        let objBottom = otherObj.y + (otherObj.height);
        let crash = true;
        if ((myBottom < objTop) || (myTop > objBottom) || (myRight < objLeft) || (myLeft > objRight)) {
            crash = false;
        }
        return crash;
    }
}
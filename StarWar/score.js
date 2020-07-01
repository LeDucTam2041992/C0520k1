function Score(point, font, color, x, y) {
    this.point = point;
    this.font = '30px ' + font;
    this.x = x;
    this.y = y;
    this.update = function () {
    ctx = myGameArea.context;
    ctx.font = this.font;
    ctx.fillStyle = color;
    ctx.fillText(this.point, this.x, this.y);
    }
}
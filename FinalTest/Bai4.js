function Circle(x,y,radius,color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.render = function () {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius,0, 2 * Math.PI);
        ctx.fill();
    }
}
let circle = new Circle(10, 10, 100, '#000000');
circle.render();

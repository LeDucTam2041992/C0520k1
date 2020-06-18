function Mouse(name, weight, speed, status) {
    this.name = name;
    this.weight = weight;
    this.speed =  speed;
    this.status = status;
    this.getStatus = function () {
        return this.status
    }
    this.sounding = function () {
        console.log('Chit chit !')
    }
}
function Cat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed =  speed;
    this.getWeight = function () {
        return this.weight
    }
    this.sounding = function () {
        console.log('Meo meo !')
    }
    this.findMouse = function (mouse) {
        this.mouse = mouse;
        console.log('You will die! Mouse');
    }
    this.catchMouse = function () {
        if (this.speed > this.mouse.speed) {
            return true;
        }
        return false;
    }
    this.eatMouse = function () {
        if (this.mouse.status == 'alive' && this.catchMouse()) {
            console.log("Eat mouse");
            this.weight+=this.mouse.weight;
            this.mouse.status = 'Dead';
        }
    }
}
var mouse = new Mouse('Jerry', 2, 25, 'alive');
var cat = new Cat('Tom', 10, 30);
cat.sounding();
cat.findMouse(mouse);
mouse.sounding();
if (cat.catchMouse()) console.log("Catched mouse ! ")
else console.log('Do not catch mouse')
cat.eatMouse();
console.log('mouse = ' + mouse.getStatus());
console.log('weightcat = ' + cat.getWeight());
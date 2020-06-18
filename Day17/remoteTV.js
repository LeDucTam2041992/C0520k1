function Remote(code) {
    this.code = code;
    this.setTelevision = function (television) {
        if (this.code == television.code) this.television = television
        else alert('No have connect !')
    }
    this.changeChanel = function (channel) {
        this.television.channel = channel;
    }
    
    this.changeSound = function (sound) {
        if (sound == '+') this.television.sound+=1;
        if (sound == '-') this.television.sound-=1;
    }
    this.changeStatus = function (status) {
        this.television.status = status;
    }
}
function Television(channel, sound, status, code) {
    this.code = code;
    this.channel = channel;
    this.sound = sound;
    this.status = status;
    this.getStatus = function () {
        return this.status
    }
    this.setStatus = function (status) {
        this.status = status;
    }
    this.getChannel =function () {
        return this.channel;
    }
    this.changeChannel = function (channel) {
        this.channel = channel;
    }
    this.getSound = function () {
        return this.sound;
    }
    this.changeSound = function (sound) {
        if (sound == '+') this.sound+=1;
        if (sound == '-') this.sound-=1;
    }
}
var tv = new Television('Youtube', 25, "off", 25256969);
var rm = new Remote(25256969);
rm.setTelevision(tv);
tv.setStatus('on');
console.log(tv.getStatus());
console.log(tv.getChannel());
tv.changeChannel('7');
console.log(tv.getChannel());
rm.changeChanel('3');
console.log(tv.getChannel());
rm.changeSound('+');
console.log(tv.getSound());
rm.changeSound('+');
console.log(tv.getSound());
rm.changeStatus('off');
console.log(tv.getStatus())
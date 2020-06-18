let Mobile = function (pin, message, boxMess, messaged) {
    this.pin = pin;
    this. message = message;
    this. boxMess = {

    };
    this. messaged = messaged;
    this.setPin = function (pin) {
        this.pin = pin
    }
    this.setMessage =  function (message) {
        this.message = message;
    }
    this.BoxMess = function () {

    }
    this.Messaged = function () {

    }
    this.CheckOn = function (status) {
        if (status=='on') return 'on'
        return 'off'
    }
    this.

}
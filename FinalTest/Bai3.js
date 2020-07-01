function  isFibonacci(x) {
    if (x==1 || x==2) return true;
    let a = 1;
    let b = 1;
    let c = a + b;
    while (c < x){
        a = b;
        b = c;
        c = a+b;
        if (x == c) return true;
    }
    return false;

}
console.log(isFibonacci(13));

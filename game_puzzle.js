let nameAni =['monkey','funny-cat','panda_swap'];
function changeIM(x) {
    let a,b,img1;
        a = Math.floor(Math.random() * 3);
        b = x.src[x.src.indexOf('.') - 1];
        img1 = 'images/' + nameAni[a] + '_part' + b + '.jpg';
    x.src = img1;
}
function setGame() {
    let a;
    let img1 = document.getElementById('img1');
    a = Math.floor(Math.random() * 3);
    img1.src ='images/' + nameAni[a] + '_part1.jpg';
    let img2 = document.getElementById('img2');
    a = Math.floor(Math.random() * 3);
    img2.src ='images/' + nameAni[a] + '_part2.jpg';
    let img3 = document.getElementById('img3');
    a = Math.floor(Math.random() * 3);
    img3.src ='images/' + nameAni[a] + '_part3.jpg';
    let img4 = document.getElementById('img4');
    a = Math.floor(Math.random() * 3);
    img4.src ='images/' + nameAni[a] + '_part4.jpg';
    let img5 = document.getElementById('img5');
    a = Math.floor(Math.random() * 3);
    img5.src ='images/' + nameAni[a] + '_part5.jpg';
}
window.onload=setGame;
let nameAni =['monkey','funny-cat','panda_swap'];
function changeIM(x) {
    let a,b,img;
        a = Math.floor(Math.random() * 3);
        b = x.src[x.src.indexOf('.') - 1];
        img = 'images/' + nameAni[a] + '_part' + b + '.jpg';
    x.src = img;
    let name1 = document.getElementById('img1').src;
    name1 = name1.substring(name1.indexOf('images/'),name1.indexOf('.')-6);
    // console.log(name1);
    let name2 = document.getElementById('img2').src;
    name2 = name2.substring(name2.indexOf('images/'),name2.indexOf('.')-6);
    // console.log(name2);
    // console.log(name1==name2);
    let name3 = document.getElementById('img3').src;
    name3 = name3.substring(name3.indexOf('images/'),name3.indexOf('.')-6);
    let name4 = document.getElementById('img4').src;
    name4 = name4.substring(name4.indexOf('images/'),name4.indexOf('.')-6);
    let name5 = document.getElementById('img5').src;
    name5 = name5.substring(name5.indexOf('images/'),name5.indexOf('.')-6);
    // console.log(name1==name2 && name2==name3 && name3==name4 && name4==name5);
    if (name1==name2 && name2==name3 && name3==name4 && name4==name5) {
        document.getElementById("img1").style="border: solid blue" ;
        document.getElementById("img2").style="border: solid blue" ;
        document.getElementById("img3").style="border: solid blue" ;
        document.getElementById("img4").style="border: solid blue" ;
        document.getElementById("img5").style="border: solid blue" ;
    }
    else {
        document.getElementById("img1").style="" ;
        document.getElementById("img2").style="" ;
        document.getElementById("img3").style="" ;
        document.getElementById("img4").style="" ;
        document.getElementById("img5").style="" ;
    }
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
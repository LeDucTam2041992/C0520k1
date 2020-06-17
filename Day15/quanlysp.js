let products = ['Samsung Galaxy S20+', 'Samsung Galaxy A51', 'iPhone 11 Pro Max 512GB',
    ' iPhone 11 64GB', 'iPhone Xs Max 256GB', 'iPhone SE 64GB', 'Vsmart Active 3'];
let screen,proName;
function Display() {
    let nameSP = new Array();
    screen = "<p id='load'><strong>Add New Product</strong></p><input id='add' type='text'>" +
        "<button onclick='add()'>Add</button><br><br>";
    screen += "<table border='1' style=' width: 500px; text-align: center' >" +
        "<tr><td>STT</td><td>Product Name</td><td colspan='2'>Selection</td></tr>"
    for (let i = 0; i <products.length ; i++) {
        nameSP[i] = products[i];
    }
    for (let i = 0; i <nameSP.length ; i++) {
        screen+="<tr style='height: 35px'>"+
            "<td>"+(i+1)+"</td>"+"" +
            "<td>"+nameSP[i]+"</td>"+
            "<td><button value= '" + nameSP[i] + "' onclick='Change(value)'>Edit</button></td>"+
            "<td><button value= '" + nameSP[i] + "' onclick='Del(value)'>Delete</button></td>"+
            "</tr>"
    }
    screen+="</table>";
    document.getElementById("Z0").innerHTML = screen;
}
function add(){
    let nameSP = document.getElementById("add").value;
    products.push(nameSP);
    Display();
}
function Change(value){
    let product =''+ value;
    proName = value;
    product+="<br><br><input type='text' id='name'><button onclick='ok()'>New name</button>";
    document.getElementById("Z0").innerHTML = product;
}
function ok() {
    let name = document.getElementById("name").value;
    console.log(name);
    products[products.indexOf(proName)]=name;
    Display();
}
function Del(value){
    products.splice(products.indexOf(value),1);
    Display();
}
window.onload = Display;
let products = ['Samsung Galaxy S20+', 'Samsung Galaxy A51', 'iPhone 11 Pro Max 512GB',
    ' iPhone 11 64GB', 'iPhone Xs Max 256GB', 'iPhone SE 64GB', 'Vsmart Active 3'];
function Display() {
    let nameSP = new Array();
    let screen = "<table border='1' style='width: 300px;height: 300px'><tr>Product Name</tr>"
    for (let i = 0; i <products.length ; i++) {
        nameSP[i] = products[i];
    }
    for (let i = 0; i <nameSP.length ; i++) {
        screen+="<tr>"+
            "<td>"+(i+1)+"</td>"+"" +
            "<td>"+nameSP[i]+"</td>"+
            "<td><input type='button' value='Edit' onclick='Change(value)'></td>"+
            "<td><input type='button' value='Delete' onclick='Change(value)'></td>"+
            "</tr>"
    }
    screen+="</table>";
    document.writeln(screen);
}
window.onload = Display;
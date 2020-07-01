let sm =['Samsung Galaxy S20+','Samsung Galaxy A51', 'iPhone 11 Pro Max 512GB',
'iPhone 11 64GB', 'iPhone Xs Max 256GB', 'iPhone SE 64GB', 'Vsmart Active 3'];
let proName;

function display() {
    let data ="";
    data+="<p>New Product</p><input type='text' id='add'> <button onclick='add()'>Add</button><br><br>";
    data += '<table border="1" style="width: 500px"><tr><td>STT</td><td width="300px">Product Name</td><td colspan="2">Selection</td></tr>';
    for (let i = 0; i < sm.length; i++) {
        data = data +
            "<tr style='height: 40px'>" + "<td style='width: 40px'>" + (i + 1) + "</td>" +
            "<td>" + sm[i] + "</td>" +
            "<td><button value='" + sm[i] + "' onclick='edit(value)'>Edit</button></td>" +
            "<td><button value='" + sm[i] + "' onclick='del(value)'>Delete</button></td>" +
            "</tr>"
    }
    data += "</table>";
    document.getElementById("plaza").innerHTML = data;
}
    function edit(value) {
        proName= value;
        let prods =""+value;
        prods += "<br><br><input type='text' id='name'><button onclick='ok()'>New name</button>";
        document.getElementById("plaza").innerHTML = prods;
    }
    function ok() {
        let newName = document.getElementById("name").value;
        sm[sm.indexOf(proName)] = newName;
        display();
    }

    function del(value) {
        sm.splice(sm.indexOf(value), 1);
        display();
    }
    function add() {
    let newProduct = document.getElementById("add").value;
    sm.push(newProduct);
    display();
    }
    window.onload = display;

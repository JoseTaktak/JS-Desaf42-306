// Constructor de productos con el método de Sumar el IVA
class Productos{
    constructor(id, title, precio, imagenes) {
        this.id = id;
        this.title = title;
        this.precio = precio;
        this.imagenes = imagenes;
    }
    sumarIva() {
        this.precio *= 1.21
    } 
}

imagenes = new Array();

imagenes[0] = ["image/productos/azuquitas color.jpg" , "Azuquitas"],
imagenes[1] = ["image/Productos/Baston-acqua.jpg" , "Baston-acqua"],
imagenes[2] = ["image/Productos/Baston-multi.jpg" , "Baston-multi"],
imagenes[3] = ["image/Productos/Baston-rosa.jpg" , "Baston-rosa"],
imagenes[4] = ["image/Productos/Meloncito-amarillo.jpg" , "Meloncito-Amarillo"],
imagenes[5] = ["image/Productos/Meloncito-Azul.jpg" , "Meloncito-Azul"],
imagenes[6] = ["image/Productos/Meloncito-Rosa.jpg" , "Meloncito-Rosa"],
imagenes[7] = ["image/Productos/Pirulin-amarillo.jpg" , "Pirulin-amarillo"],
imagenes[8] = ["image/Productos/Pirulin-rosa.jpg" , "Pirulin-rosa"]

// if(principal) {
//     for(i=0;i<imagenes.length;i++){
//         let creaDiv = document.createElement("div");
//         let creimage = document.createElement("img");

//         creaDiv.setAttribute("class", "foto");
//         creaDiv.innerHTML(imagenes[i][1])
//     }
// }
// Array de productos para hacer el push de los productos

const productos = [];

productos.push(new Productos(1, "Azuquitas", 100, imagenes));
productos.push(new Productos(2, "Baston Acqua", 60, imagenes));
productos.push(new Productos(3, "Baston Multi", 65, imagenes));
productos.push(new Productos(4, "Baston Rosa", 60, imagenes));
productos.push(new Productos(5, "Meloncito Amarillo", 50, imagenes));
productos.push(new Productos(6, "Meloncito Azul", 50, imagenes));
productos.push(new Productos(7, "Meloncito Rosa", 50, imagenes));
productos.push(new Productos(8, "Pirulin Amarillo", 80, imagenes));
productos.push(new Productos(9, "Pirulin Rosa", 80, imagenes));

let container = document.getElementById("container");

//For of para sumar IVA y agregar al DOM
for (const producto of productos) {
    producto.sumarIva();

    let div = document.createElement("div");
    div.className = "card"
    div.innerHTML = ` 
        <img class="img-card" src="${producto.imagenes}" alt="">
        <p class="id-card">Cod: ${producto.id}</p>
        <p class="title-card">${producto.title}</p>
        <p class="precio-card">$${producto.precio}</p>
    `;
    container.append(div)
}

// let golosinas = document.getElementsByClassName("golosinas");
// console.log(golosinas);

// console.log(golosinas[0].innerHTML);

// let divs = document.getElementsByTagName("div");
// console.log(divs[1].innerHTML);


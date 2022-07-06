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

// imagenes = new Array();

// imagenes[0] = ["image/productos/azuquitas color.jpg" , "Azuquitas"],
// imagenes[1] = ["image/Productos/Baston-acqua.jpg" , "Baston-acqua"],
// imagenes[2] = ["image/Productos/Baston-multi.jpg" , "Baston-multi"],
// imagenes[3] = ["image/Productos/Baston-rosa.jpg" , "Baston-rosa"],
// imagenes[4] = ["image/Productos/Meloncito-amarillo.jpg" , "Meloncito-Amarillo"],
// imagenes[5] = ["image/Productos/Meloncito-Azul.jpg" , "Meloncito-Azul"],
// imagenes[6] = ["image/Productos/Meloncito-Rosa.jpg" , "Meloncito-Rosa"],
// imagenes[7] = ["image/Productos/Pirulin-amarillo.jpg" , "Pirulin-amarillo"],
// imagenes[8] = ["image/Productos/Pirulin-rosa.jpg" , "Pirulin-rosa"]

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

productos.push(new Productos(1, "Azuquitas", 100, "./image/Productos/Azuquitas color.jpg"));
productos.push(new Productos(2, "Baston Acqua", 60, "./image/Productos/Baston-acqua.jpg"));
productos.push(new Productos(3, "Baston Multi", 65, "./image/Productos/Baston -multi.jpg"));
productos.push(new Productos(4, "Baston Rosa", 60, "./image/Productos/Baston-rosa.jpg"));
productos.push(new Productos(5, "Meloncito Amarillo", 50, "./image/Productos/Meloncito-amarillo.jpg"));
productos.push(new Productos(6, "Meloncito Azul", 50, "./image/Productos/Meloncito-Azul.jpg"));
productos.push(new Productos(7, "Meloncito Rosa", 50, "./image/Productos/Meloncito-Rosa.jpg"));
productos.push(new Productos(8, "Pirulin Amarillo", 80, "./image/Productos/Pirulin-amarillo.jpg"));
productos.push(new Productos(9, "Pirulin Rosa", 80, "./image/Productos/Pirulin-rosa"))

let container = document.getElementById("container");

//For of para sumar IVA y agregar al DOM
for (const producto of productos) {
    producto.sumarIva();

    let div = document.createElement("div");
    div.className = "card"
    div.innerHTML = ` 
    <img class="img-prod" src="${producto.imagenes}" class="imagen-prod">
        <div class="info-card">
            <h4>${producto.title}</h4>
            <p class="precio">$${producto.precio}</p>
            <a href"#" class="u-full-width button-primary button input agregar-carrito" data-id="2" onclick="comprar(${producto.id})">Agregar Al Carrito</a>
        </div>
        
    `;
    container.append(div)
}

// Función de Comprar y Agregar al Carrito
function comprar(param){
    const producto = productos.find(el => el.id === param);
    carrito.push(productos);
    numeroCarrito.innerHTML = carrito.length
    agregarCarrito(carrito.length - 1)
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));
}

// Función de agregar carrito al DOM

function agregarCarrito(parametro){
    let div = document.createElement("div");
    div.id = `carrito-${carrito[parametro].id}`;
        div.className = "carritoStyle"
        div.innerHTML = `
                <p>Id: ${carrito[parametro].id}</p>
                <p">${carrito[parametro].title}</p>
                <p>$${carrito[parametro].precio}</p>
                <button class="btn-card" onclick = "eliminar(${carrito[parametro].id})">Eliminar</button>
        `;
        carritoDom.append(div)
}

// Eliminar productos del Carrito

function eliminar(idEliminar){
    const eliminar = document.getElementById(`carrito-${idEliminar}`);
    eliminar.remve();
    carrito = carrito.filter(el => el.id !== idEliminar)
    numeroCarrito.innerHTML = carrito.length
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));
}

// Renderizamos el Carrito en el DOM

function carritoLocalStorage(){
    numeroCarrito.innerHTML = carrito.length
    for (const prod of carrito) {
        let div = document.createElement("div");
div.id = `carrito-${prod.id}`;
        div.className = "carritoStyle"
        div.innerHTML = `
            <p>Id: ${prod.id}</p>
            <p">${prod.title}</p>
            <p>${prod.precio}</p>
            <button class="btn-card" onclick = "eliminar(${prod.id})">Eliminar</button>
        `;
    carritoDom.append(div)
    }
}


// let golosinas = document.getElementsByClassName("golosinas");
// console.log(golosinas);

// console.log(golosinas[0].innerHTML);

// let divs = document.getElementsByTagName("div");
// console.log(divs[1].innerHTML);


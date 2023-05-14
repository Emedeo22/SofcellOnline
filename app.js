const stockProductos = [
  {
    id: 1,
    nombre: "Apple iPhone 7 Plus",
    cantidad: 1,
    stock: 1,
    desc: "<br>Color: Silver <br> Capacidad: 128gb <br> Pantalla: 5,5 <br>Rendimiento de batería: 100%<br>Incluye: caja original y cargador original.<br>Blindex de regalo ",
    precio: 99000,
    img: "img/iphone7silver.png",
  },
  {
    id: 2,
    nombre: "Apple iPhone 7 Plus",
    cantidad: 1,
    stock: 1,
    desc: "<br>Color: Rose Gold <br> Capacidad: 32gb <br> Pantalla: 5,5 <br>Rendimiento de batería: 85%<br>Incluye: caja original y cable.<br>Blindex de regalo",
    precio: 93000,
    img: "img/iphone7plus.png",
  },
  {
    id: 3,
    nombre: "Apple iPhone 7 Plus",
    cantidad: 1,
    stock: 1,
    desc: "<br>Color: Jet black <br> Capacidad: 32gb <br> Pantalla: 5,5 <br>Rendimiento de batería: 100%<br>Incluye: caja original y cable.<br>Blindex de regalo<br><br><br>",
    precio: 95000,
    img: "img/2apple-iphone-7-plus-black-128-gb-used.png",
  },
  {
    id: 4,
    nombre: "Motorola Moto G200",
    cantidad: 1,
    stock: 1,
    desc: "<br>Color: Azul <br> Capacidad: 128gb<br>Memoria ram: 8gb<br>Pantalla IPS: 6,8<br>Batería: 5000mAh<br>Desbloqueo: Huella lateral y reconocimiento facial<br>NFC <br> Incluye: Caja original, cable Ready For HDMI y cargador<br>Blindex de regalo ",
    precio: 170000,
    img: "img/pacman-removebg-preview.png",
  },
  {
    id: 5,
    nombre: "Motorola Edge 30",
    cantidad: 1,
    stock: 1,
    desc: "<br>Color: Azul<br>Capacidad: 128gb<br>Memoria ram: 8gb<br>Pantalla OLED: 6,5<br>Cámara frontal: 32mpx<br>Cámaras traseras: 50mpx/50mpx/2mpx<br>Desbloqueo: Huella digital y reconocimiento facial<br>NFC<br>Incluye: Caja original y cargador<br>Blindex de regalo<br>",
    precio: 147000,
    img: "img/moto_edge30_gris_ambos.png",
  },
  {
    id: 6,
    nombre: "<br><br><br>Motorola Moto G22",
    cantidad: 1,
    stock: 0,
    desc: "<br><br>Color: Gris<br>Pantalla IPS: 6.5<br>Capacidad: 128gb<br>Memoria ram: 4gb<br>Desbloqueo: Huella, reconocimiento facial<br>Batería: 5000 mAh<br><br><br><br><br><br>",
    precio: 60000,
    img: "img/1Motog22.png",
  },
  {
    id: 7,
    nombre: "Moto e22",
    cantidad: 1,
    stock: 2,
    desc: "<br>Color: Azul<br>Capacidad: 32gb<br>Memoria ram: 3gb<br>Batería: 4020mAh<br>Desbloqueo: Huella digital y reconocimiento facial<br>Android: 12<br>Sistema de audio dobly atmos<br>Incluye: Caja original y cargador original<br>",
    precio: 49000,
    img: "img/motorola-moto-e22-removebg-preview.png",
  },
  {
    id: 8,
    nombre: "Sansung Galaxy A13",
    cantidad: 1,
    stock: 0,
    desc: "<br>Color: Celeste<br>Capacidad: 128gb<br>Memoria ram: 4gb<br>Batería: 5000 mAh<br>Desbloqueo: Huella lateral y reconocimiento facial<br>Android: 12<br>Incluye: Caja original y cargador original<br>",
    precio: 62000,
    img: "img/Galaxy-A13-celeste-3-800x800.png",
  },
  {
   id: 9,
    nombre:"Motorola Moto e7i Power",
    cantidad: 1,
    stock: 1,
    desc: "<br>Color: Naranja<br>Capacidad: 32gb<br>Memoria ram: 2gb<br>Batería: 5000 mAh<br>Desbloqueo: Huella digital<br>Incluye: Caja con cargador original<br><br><br>",
    precio: 37000,
    img: "img/3269963.png",
  },
  {
    id: 10,
    nombre: "Motorola Moto e13",
    cantidad: 1,
    stock: 1,
    desc: "<br>Color:Natural<brPantalla: 6.5><br>Capacidad: 64gb<br>Memoria ram: 2gb<br>Batería: 5000 mAh<br>Desbloqueo: Reconocimiento facial<br>Incluye: Caja con cargador original<br><br>",
    precio: 40000,
    img: "img/164041-1200-auto.png",
 },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad, stock } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Caracteristicas: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <p class="card-stock">Stock: ${stock}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>

      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

function enviarCompra(e) {
  e.preventDefault();
  const cliente = document.querySelector("#cliente").value;
  const email = document.querySelector("#correo").value;

  if (email === "" || cliente == "") {
    Swal.fire({
      title: "¡Debes completar tu email y nombre!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  } else {
    const btn = document.getElementById("button");
    btn.value = "Enviando...";

    const serviceID = "service_gz3v5ki";
    const templateID = "template_ozno1p4";

    // Armar el cuerpo del correo
    const emailData = {
      cliente: cliente,
      carrito: carrito.map(prod => {
        return {
          nombre: prod.nombre,
          cantidad: prod.cantidad,
          precio: prod.precio,
          total: prod.cantidad * prod.precio
        }
      }),
      total: totalProceso.innerText
    };

    // Enviar el correo al cliente y a ti mismo
    emailjs.send(serviceID, templateID, emailData)
      .then(() => {
        btn.value = "Finalizar compra";
        alert("Correo enviado!");
      }, (err) => {
        btn.value = "Finalizar compra";
        alert(JSON.stringify(err));
      });

    const spinner = document.querySelector("#spinner");
    spinner.classList.add("d-flex");
    spinner.classList.remove("d-none");

    setTimeout(() => {
      spinner.classList.remove("d-flex");
      spinner.classList.add("d-none");
      formulario.reset();

      const alertExito = document.createElement("p");
      alertExito.classList.add(
        "alert",
        "alerta",
        "d-block",
        "text-center",
        "col-12",
        "mt-2",
        "alert-success"
      );
      alertExito.textContent = "Compra realizada correctamente";
      formulario.appendChild(alertExito);
    }, 3000);
  }
}

let carrito = []

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarrito = document.getElementById(`carritoContenedor`)

const selector = document.getElementsByClassName('dropdown-item');

const precioTotal = document.getElementById(`precioTotal`)
const sumadorCarrito = document.getElementById(`contadorCarrito`)//este no se donde esta el id



//selector
for (const seleccionModelo of selector) {
    console.log(seleccionModelo.id);
    seleccionModelo.addEventListener('click',()=>{
        if(seleccionModelo.id == "all"){
            mostrarProductos(productos)
        }else if(seleccionModelo.id == "Media Cana"){
            mostrarProductos(productos.filter(el => el.modelo == "Media Caña"))
        }
        else{
            console.log(productos.filter(el => el.modelo == seleccionModelo.id))
            mostrarProductos(productos.filter(el => el.modelo == seleccionModelo.id))
        }
    })
    
}

mostrarProductos(productos)

function mostrarProductos(array){
  contenedorProductos.innerHTML= ``;
  for (const producto of array) {
        let div = document.createElement('div')
      div.className = 'producto'
      div.innerHTML = `
                        <div class="card">
                        <div class="card-image">
                            <img src = ${producto.img}>
                            <span class="card-title">${producto.descrip}</span>
                            </div>
                            <div class="card-content">
                                <p >Modelo: ${producto.modelo}</p>
                                <p> $${producto.precio}</p>
                                <button id="botonAgregar${producto.id}" ><i class="fas fa-cart-arrow-down"></i></button>
                            </div>
                    </div>
      `
      contenedorProductos.appendChild(div)

      let btnA = document.getElementById(`botonAgregar${producto.id}`)
      console.log(btnA)
        //creamos el evento para que al hacer click sobre el boton se desarrolle una fc
      btnA.addEventListener(`click`, () =>{
          agregarCarrito(producto.id);
        })
       
  }
}

//hasta acá funciona bien

function agregarCarrito(id){
    let repetido = carrito.find(item => item.id == id)
    if (repetido){
        console.log(repetido);
        repetido.cantidad = repetido.cantidad + 1
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id=cantidad${repetido.id}>Cantidad: $${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{
        let productoA = productos.find(elemento => elemento.id == id)
       console.log(productoA);
       carrito.push(productoA)
        actualizarCarrito()
       //ahora queremos que se visualice el producto agregado en el carrito
       let div = document.createElement(`div`)
       div.className = `productoCarrito`
       div.innerHTML = `
                          <p>${productoA.descrip}</p>
                          <p>Precio: $${productoA.precio}</p>
                          <p id=cantidad${productoA.id}>Cantidad: $${productoA.cantidad}</p>
                          <button id=botonEliminar${productoA.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
       
       `
      contenedorCarrito.appendChild(div)


      let btnE = document.getElementById(`botonEliminar${productoA.id}`)
      console.log(btnE);
      btnE.addEventListener(`click`, () =>{
        console.log(productoA.id);
        btnE.parentElement.remove()
        carrito = carrito.filter(elemento => elemento.id != productoA.id)
        localStorage.setItem(`carrito`, JSON.stringify(carrito))
        actualizarCarrito()
    })

    }

    localStorage.setItem(`carrito`, JSON.stringify(carrito))

}



function actualizarCarrito(){
    sumadorCarrito.innerText = carrito.reduce((acc,el) => acc + el.cantidad, 0)
    precioTotal.innerText = carrito.reduce((acc,el) => acc + (el.cantidad * el.precio), 0)
}


function recuperar(){
    let recuperarLS = JSON.parse(localStorage.getItem(`carrito`))
    console.log(recuperarLS);

    //creo un condicional para que al refrescar la pag no aparezca null y me rompa el codigo
//    recuperarLS ? 
    if(recuperarLS){
        recuperarLS.forEach(element => (
            agregarCarrito(element.id)
        ))
    }
}

recuperar()

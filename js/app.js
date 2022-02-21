let carrito = []

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarrito = document.getElementById(`carritoContenedor`)

const selector = document.getElementsByClassName('dropdown-item');

const precioTotal = document.getElementById(`precioTotal`)
const sumadorCarrito = document.getElementById(`contadorCarrito`)


//selector
for (const seleccionModelo of selector) {
    console.log(seleccionModelo.id);
    let {id} = seleccionModelo

    seleccionModelo.addEventListener('click',()=>{
        if(id == "all"){
            mostrarProductos(productos)
        }else if(id == "Media Cana"){
            mostrarProductos(productos.filter(el => el.modelo == "Media Caña"))
        }
        else{
            console.log(productos.filter(el => el.modelo == id))
            mostrarProductos(productos.filter(el => el.modelo == id))
        }
    })
    
}

//el select funciona bien

mostrarProductos(productos)

function mostrarProductos(array){
  contenedorProductos.innerHTML= ``;

  for (const producto of array) {

    let {img, descrip, modelo, precio, id} = producto

    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `
                        <div class="card">
                        <div class="card-image">
                            <img src = ${img}>
                            <span class="card-title">${descrip}</span>
                            </div>
                            <div class="card-content">
                                <p >Modelo: ${modelo}</p>
                                <p> $${precio}</p>
                                <button id="botonAgregar${id}" ><i class="fas fa-cart-arrow-down"></i></button>
                            </div>
                    </div>
      `
    contenedorProductos.appendChild(div)

    let btnA = document.getElementById(`botonAgregar${id}`)
    console.log(btnA)
    //creamos el evento para que al hacer click sobre el boton se desarrolle una fc
    btnA.addEventListener(`click`, () =>{
        agregarCarrito(id);
    })
       
  }
}

//hasta acá funciona bien

function agregarCarrito(id){
    let repetido = carrito.find(item => item.id == id)
    
    if (repetido){
        console.log(repetido);
        repetido.cantidad ++
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id=cantidad${repetido.id}>Cantidad: $${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{
        let productoA = productos.find(elemento => elemento.id == id)
       console.log(productoA);
       carrito.push(productoA)
        actualizarCarrito()
       //ahora queremos que se visualice el producto agregado en el carrito
       mostrarCarrito(productoA)
    }
}



function mostrarCarrito(productoA){

    const {descrip, precio, id, cantidad} = productoA

    let div = document.createElement(`div`)
       div.className = `productoCarrito`
       div.innerHTML = `
                          <p>${descrip}</p>
                          <p>Precio: $${precio}</p>
                          <p id=cantidad${id}>Cantidad: ${cantidad}</p>
                          <button id=botonEliminar${id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
       
       `
      contenedorCarrito.appendChild(div)


      let btnE = document.getElementById(`botonEliminar${id}`)
      console.log(btnE);
      btnE.addEventListener(`click`, () =>{
        if (cantidad == 1){
            console.log(id);
            btnE.parentElement.remove()
            carrito = carrito.filter(elemento => elemento.id != id)
            actualizarCarrito()
            localStorage.setItem(`carrito`, JSON.stringify(carrito))
        }else{
            cantidad = cantidad - 1
            document.getElementById(`cantidad${id}`).innerHTML = `<p id= cantidad${id}>Cantidad:${cantidad}</p>`
            actualizarCarrito()
        }
        
        
        
        
        
        
    })
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
   
recuperarLS && recuperarLS.forEach(element => (agregarCarrito(element.id)))
   
    // if(recuperarLS){
    //     recuperarLS.forEach(element => (
    //         agregarCarrito(element.id)
    //     ))
    // }
}

recuperar()

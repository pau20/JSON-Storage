let email = document.getElementById(`email-Id`)
let btn = document.getElementById(`btnIngreso`)

btn.addEventListener('click', ()=>{
    let dato = email.value
    console.log(dato)
    localStorage.setItem('email', dato)
})

let datoLS = localStorage.getItem('email')

if(datoLS){
   console.log(datoLS) 
}else{
    console.log('no hay datos');
}

console.log(localStorage.email)
if(localStorage.email){
    console.log(datoLS) 
}else{
    console.log('no hay datos');
}

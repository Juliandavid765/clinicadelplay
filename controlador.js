let bandera=true
let boton=document.getElementById("boton")
boton.addEventListener("click",function(event){
    console.log("hiciste click")
    let buscador=document.getElementById("busqueda")
    if(bandera==true){
        buscador.classList.remove("invisible")
    }else{
        buscador.classList.add("invisible")
    }
    bandera=!bandera
})
let producto={
    nombre:"ps4" ,
    capacidad: "1 TB" ,
    foto: "Nan" ,
    estado: "segunda" ,
    precio: 500.000
}
console.log (producto)
console.log (producto.nombre)
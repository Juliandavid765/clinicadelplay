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
    nombre:"estuche nintendo switch",
    estado:"Nuevo",
    precio:150000,
    foto:"https://firebasestorage.googleapis.com/v0/b/clinicadelplay-fdc2f.appspot.com/o/Ipega-PG-SL020-Nintend-Switch-bolso-Nylon-camuflaje-viaje-estuche-impermeable-para-Nintendo-Switch-300x300.webp?alt=media&token=4e880871-bac8-4177-bfbe-910e9036a7e7"
}

let producto2={
    nombre:"estuche nintendo switch 13 en 1",
    estado:"Nuevo",
    precio:120000,
    foto:"https://firebasestorage.googleapis.com/v0/b/clinicadelplay-fdc2f.appspot.com/o/Kit-13-En-1-Estuche-Grips-Audifonos-Screen-Nintendo-Switch--300x300.webp?alt=media&token=d3fcbc62-7211-44b6-9e9d-705bfe6ed4fb"
}

let producto3={
    nombre:"kit carga xbox",
    estado:"Nuevo",
    precio:180000,
    foto:"https://firebasestorage.googleapis.com/v0/b/clinicadelplay-fdc2f.appspot.com/o/Kit-Carga-Y-Juega-Xbox-360-300x300.webp?alt=media&token=4963a40c-62e6-4661-b225-caf5c0be7ae2"
}

let producto4={
    nombre:"nintendo switch",
    estado:"Usado",
    precio:1200000,
    foto:"https://firebasestorage.googleapis.com/v0/b/clinicadelplay-fdc2f.appspot.com/o/Nintendo-Switch-300x300.webp?alt=media&token=8d8c69e5-7fbe-425b-83cd-3d3411fb8f09"
}

let producto5={
    nombre:"control xbox",
    estado:"Usado",
    precio:150000,
    foto:"https://firebasestorage.googleapis.com/v0/b/clinicadelplay-fdc2f.appspot.com/o/Sin-titulo-1-300x300.webp?alt=media&token=078e461c-d050-4179-bb83-eb298884eccb"
}

let producto6={
    nombre:"xbox one S 1TB",
    estado:"Usado",
    precio:2000000,
    foto:"https://firebasestorage.googleapis.com/v0/b/clinicadelplay-fdc2f.appspot.com/o/Xbox-One-S-1-TB-300x300.webp?alt=media&token=ab0cfc80-826c-4f23-b004-99755be62998"
}

let producto7={
    nombre:"playstation 4 1TB",
    estado:"Usado",
    precio:1800000,
    foto:"https://firebasestorage.googleapis.com/v0/b/clinicadelplay-fdc2f.appspot.com/o/descarga.jfif?alt=media&token=873bcb03-4846-42c7-8d30-1b420291909a"
}

let producto8={
    nombre:"protector de silicona nintendo switch",
    estado:"Usado",
    precio:180000,
    foto:"https://firebasestorage.googleapis.com/v0/b/clinicadelplay-fdc2f.appspot.com/o/protector-silicona-nintendo-switch-300x300.webp?alt=media&token=3ea13b51-1ff4-4ce0-a054-385f78fdc348"
}
let producto9={
    nombre:"ps4" ,
    capacidad: "1 TB" ,
    foto: "https://firebasestorage.googleapis.com/v0/b/clinicadelplay-d44ce.appspot.com/o/imagen%20playstation1.jpg?alt=media&token=166786bc-442d-482c-b542-35b0a72a4e16" ,
    estado: "segunda" ,
    precio: 500.000 ,
}
console.log (producto)
console.log (producto.nombre)
let producto10={
    nombre:"ps5" ,
    precio: 600000 ,
    foto: "https://firebasestorage.googleapis.com/v0/b/clinicadelplay-d44ce.appspot.com/o/imagen%20playstation2.jpg?alt=media&token=56946234-ab95-4e06-b5e9-1d9ac576dd53" ,
}
let producto11={
    nombre: "control ps4" ,
    precio: 100000 ,
    foto: "https://firebasestorage.googleapis.com/v0/b/clinicadelplay-d44ce.appspot.com/o/imagen%20playstation3.jpg?alt=media&token=7cffa54f-a6b0-4193-bc71-0659ff809548" ,
}
let producto12={
    nombre: "ps4 slim" ,
    capacidad: "500 gb" ,
    foto: "https://firebasestorage.googleapis.com/v0/b/clinicadelplay-d44ce.appspot.com/o/imagen%20playstation4.jpg?alt=media&token=0591be71-d301-41e8-8a78-f44274ebf85f" ,
    precio: 300000 ,
}
let producto13={
    nombre: "ps4 2" ,
    capacidad: "500 gb" ,
    foto: "https://firebasestorage.googleapis.com/v0/b/clinicadelplay-d44ce.appspot.com/o/pabon.jfif?alt=media&token=d768089e-9aca-4d35-9bf2-5278b759b6f5" ,
    precio: 290000 ,
}
let producto14={
    nombre: "ps3" ,
    capacidad: "500 gb" ,
    foto: "https://firebasestorage.googleapis.com/v0/b/clinicadelplay-d44ce.appspot.com/o/imagen%20playstation5.jpg?alt=media&token=f23b4dba-e292-4679-8a90-523cf317ec15" ,
    precio: 150000 ,
}
let producto15={
    nombre: "cargador controles ps4" ,
    capacidad: "dos controles" ,
    foto: "https://firebasestorage.googleapis.com/v0/b/clinicadelplay-d44ce.appspot.com/o/imagen%20playstation6.jpg?alt=media&token=06ac2667-b98b-4321-8f9b-36ec3bd1c2d0" ,
    precio: 120000 ,
}
let productos=Array(
    producto,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15
    )
    console.log(productos)
    productos.forEach(function(producto){
        console.log(producto)
        console.log(producto.nombre)
    })
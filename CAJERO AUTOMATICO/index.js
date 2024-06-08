var cuentas = [
    { nombre: "Rafael", password: "L0p3r3na" },
    { nombre: "Ramon",  password: "ArgamedoN" },
    { nombre: "Florencia", password: "fl0r3nc14" }
  ];
 
let form = document.getElementById("formulario")
let usuario = document.getElementById("usuario")
let password = document.getElementById("password")


let retirar = document.getElementById("retirar")
let deposito = document.getElementById("deposito")
let saldo = document.getElementById("ver_saldo")

  
  function login() {
    if(usuario.value == "")
        {
        alert ("Ingresa un Usuario");
        usuario.style.border = "1px solid red"
    }
    if (password.value == "")
        {
            alert ("Password faltante");
            password.style.border = "1px solid red"
        }
    if(usuario.value !== cuentas[0].nombre && usuario.value !== cuentas[1].nombre && usuario.value !== cuentas[2].nombre)
        {
        alert("Usuario no existe, verificalo nuevamente");
        usuario.style.border = "1px solid red"
        }
        if(password.value !== cuentas[0].password && password.value !== cuentas[1].password && password.value !== cuentas[2].password)
            {
            alert("Password incorrecto, verificalo nuevamente");
            usuario.style.border = "1px solid red"
            }
    // // console.log(usuario.value)
    // // console.log(password.value)
   
    if(usuario.value === cuentas[0].nombre && password.value === cuentas[0].password)
        {
        localStorage.setItem("datos", "Rafael loperena");
      location="estado.html"
      localStorage.setItem("saldo","900");
    } 
    else if( usuario.value === cuentas[1].nombre && password.value === cuentas[1].password){
      console.log("El usuario es Ramon")
      localStorage.setItem("datos", " Ramon" );
      location="estado.html"
    }
    else if ( usuario.value === cuentas[2].nombre && password.value === cuentas[2].password){
      console.log("El usuario es Florencia!")
      localStorage.setItem("datos", "Florencia" );
      location="estado.html"
    } 
    document.addEventListener("DOMContentLoaded", function(){
        var datos = localStorage.getItem("datos")
        console.log(datos)  
        })
        
}

function formularetiro(){
var cantidadT=parseInt(document.getElementById(`cant`).value)
var cantidad1=parseInt(document.getElementById(`c1`).value)
document.getElementById(`c1`).value=(cantidad1-cantidadT)
ver_saldo.innerHTML = "Tu saldo Actual es: " + (cantidad1-cantidadT)
}


function formuladeposito(){
    var cantidadT=parseInt(document.getElementById(`cant`).value)
    var cantidad1=parseInt(document.getElementById(`c1`).value)
    document.getElementById(`c1`).value=(cantidad1+cantidadT)
    ver_saldo.innerHTML = "Tu saldo Actual es: " + (cantidad1+cantidadT)
    }


function formulaversaldo(){
    var cantidadT=parseInt(document.getElementById(`cant`).value)
    var cantidad1=parseInt(document.getElementById(`c1`).value)
    document.getElementById(`c1`).value=(cantidad1)
    ver_saldo.innerHTML = "Tu saldo Actual es: " + cantidad1
   
    }

function formulaversaldototal(){
        var cantidadT=parseInt(document.getElementById(`cant`).value)
        var cantidad1=parseInt(document.getElementById(`c1`).value)
        document.getElementById(`c1`).value=(cantidad1)
        ver_saldototal.innerHTML = "Tu saldo anterior era: " + cantidad1
       
        }
   
    
    
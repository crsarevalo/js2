//ejercicio 1
let cheems = document.querySelector("#cheems");

cheems.addEventListener("click", () => {
  if (cheems.style.border) {
    cheems.style.border = "";
  } else {
    cheems.style.border = "2px solid #FF0000";
  }
});
//ejercicio 2

let verificar = document.querySelector("#boton2");

function suma() {
  let qt1 = document.querySelector("#cantidad1").value;
  let qt2 = document.querySelector("#cantidad2").value;
  let qt3 = document.querySelector("#cantidad3").value;

  let totalStickers = +qt1 + +qt2 + +qt3;

  if (totalStickers <= 10) {
    document.querySelector("#mensaje").textContent =
      "Llevas " + totalStickers + " stickers";
  } else {
    document.querySelector("#mensaje").textContent =
      "Llevas demasiados stickers";
  }
}

verificar.addEventListener("click", suma);

//ejercicio 3

let entrar = document.querySelector("#boton3");

let cantidad1 = document.getElementById("digito1");
let cantidad2 = document.getElementById("digito2");
let cantidad3 = document.getElementById("digito3");

entrar.addEventListener("click", () => {
  console.log(cantidad1.value + cantidad2.value + cantidad3.value);
  if (
    cantidad1.value == "9" &&
    cantidad2.value == "1" &&
    cantidad3.value == "1"
  ) {
    document.querySelector("#mensaje3").textContent = "Password 1 correcto";
  } else if (
    cantidad1.value == "7" &&
    cantidad2.value == "1" &&
    cantidad3.value == "4"
  ) {
    console.log("entre");
    document.querySelector("#mensaje3").textContent = "Password 2 correcto";
  } else {
    document.querySelector("#mensaje3").textContent = "Password incorrecto";
  }
});

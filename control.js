let form = document.querySelector("form");
let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");
let submit = document.getElementById("submit");
let regular = /@/;

form.onsubmit = function (e) {
  if (usuario.value === "" || clave.value === "") {
    e.preventDefault();
    alert("Completa ambos datos!");
  } else if (usuario.value !== regular.test("usuario")) {
    e.preventDefault();
    alert("Falta el arroba en el usuario");
  }
};

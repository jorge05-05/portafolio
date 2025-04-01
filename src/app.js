// Esperar hasta que el contenido HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navlink");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {

        navLinks.forEach(navLink => navLink.classList.remove("active"));
        link.classList.add("active");
      });
    });
  });

//FUCTION MOSTRAR MENU AL HACER CLICK EN EL RESPNSIVE
let mostrarMenu = false;

function mostrarOcultarMenu() {
    if (mostrarMenu) {
        document.getElementById("nav").classList = "";
        mostrarMenu = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        mostrarMenu = true;
    }
}

//OCULTAR AL HACER CLICK EN UN AOPCION DEL MENU 
function Selection() {
    document.getElementById("nav").classList = "";
    mostrarMenu = false;
}

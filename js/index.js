AOS.init();

/**** MENU HAMBURGUESA **/
const botonModalCentro = document.querySelector("#boton-modal-centro");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

botonModalCentro.addEventListener("click", () => {
  modalCentro.classList.add("active");
});

cerrarModalCentro.addEventListener("click", () => {
  modalCentro.classList.remove("active");
});

const botonCurso1 = document.querySelector("#boton-curso1");
const botonCurso2 = document.querySelector("#boton-curso2");
const botonCurso3 = document.querySelector("#boton-curso3");
const botonCurso4 = document.querySelector("#boton-curso4");

let pagina;
function abrirPagina() {
  pagina = window.open("https://es-la.facebook.com/");
}

botonCurso1.addEventListener("click", () => {
  Swal.fire({
    color: "#fff",
    title: "Curso 1",
    text: "Do you want to continue",
    icon: "info",
    background: "#212121",
    confirmButtonText: "Adquirir",
    showCancelButton: true,
    cancelButtonText: "Cerrar",
    confirmButtonColor: "#008000",
    cancelButtonColor: "#d33",
    width: "900px",
  }).then((result) => {
    if (result.isConfirmed) {
      abrirPagina();
    }
  });
});

botonCurso2.addEventListener("click", () => {
  Swal.fire({
    color: "#fff",
    title: "Curso 2",
    text: "Do you want to continue",
    icon: "info",
    background: "#212121",
    confirmButtonText: "Adquirir",
    showCancelButton: true,
    cancelButtonText: "Cerrar",
    confirmButtonColor: "#008000",
    cancelButtonColor: "#d33",
    width: "900px",
  });
});

botonCurso3.addEventListener("click", () => {
  Swal.fire({
    color: "#fff",
    title: "Curso 3",
    text: "Do you want to continue",
    icon: "info",
    background: "#212121",
    confirmButtonText: "Adquirir",
    showCancelButton: true,
    cancelButtonText: "Cerrar",
    confirmButtonColor: "#008000",
    cancelButtonColor: "#d33",
    width: "900px",
  });
});

botonCurso4.addEventListener("click", () => {
  Swal.fire({
    color: "#fff",
    title: "Curso 4",
    text: "Do you want to continue",
    icon: "info",
    background: "#212121",
    confirmButtonText: "Adquirir <a href=",
    showCancelButton: true,
    cancelButtonText: "Cerrar",
    confirmButtonColor: "#008000",
    cancelButtonColor: "#d33",
    width: "900px",
  });
});

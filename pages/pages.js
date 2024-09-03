const formIncome = document.querySelector("#formIncome");
const formEgree = document.querySelector("#formEgree");

function main() {
  if (formIncome)
    formIncome.addEventListener("submit", (e) => {
      e.preventDefault();

      Swal.fire({
        title: "Muy bien!",
        text: "Ingreso registrado con exito!!!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ir al Dashboard",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "../index.html";
        }
      });
    });

  if (formEgree)
    formEgree.addEventListener("submit", (e) => {
      e.preventDefault();

      Swal.fire({
        title: "Muy bien!",
        text: "Egreso registrado con exito!!!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ir al Dashboard",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "../index.html";
        }
      });
    });
}

main();

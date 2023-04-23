const boton = document.getElementById("btn");

//Boton para mostrar alerta con botones de confirmación
/*
boton.onclick = function () {
  Swal.fire({
    title:"Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Save`,
    denyButtonText: `Don't save`,
  }).then((result) => {
    
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};
*/

boton.onclick = function () {
    Swal.fire({
        position: 'bottom-left',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}

lib.message("Load index.js");
const API = "http://localhost:5000/api/user";
const endpoint = "user";
$(document).ready(() => {
  $("#Login").submit(() => {
    lib.message("entre");
    let user = lib.format_formData("#Login");
    lib
      .post_json(API, endpoint, user, "json")
      .then(res => {
        lib.message(res);
      })
      .catch(err => {
        console.log(err);
      });
    return false;
  });
  $("#formulario").submit(() => {
    lib.message("entre");
    let data = lib.format_formData("#formulario");
    var formData = new FormData();
    var imagefile = document.querySelector("#file");
    formData.append("multimedia", imagefile.files[0]);
    formData.append("nombre", data.nombre);
    formData.append("documento", data.documento);
    formData.append("eps", data.eps);
    formData.append("sexo", data.sexo);
    formData.append("telefono", data.telefono);

    lib
      .post_multipart("http://localhost:5000/api/paciente/", formData)
      .then(res => {
        lib.message(res);
      })
      .catch(err => {
        console.log(err);
      });
    return false;
  });
});

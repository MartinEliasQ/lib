let message = function(message) {
  console.log(message);
};

message("This script require Jquery and Axios loaded before");
message("Script loaded");

let get = async endpoint => {
  try {
    let response = await axios.get(`${endpoint}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

let post_json = async (endpoint, data) => {
  try {
    let response = await axios
      .post(`${endpoint}`, data, {})
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    return response;
  } catch (error) {
    console.log(error);
  }
};
let post_multipart = async (endpoint, data) => {
  try {
    let response = await axios
      .post(endpoint, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        alert("Algo fallo");
      });
    return response;
  } catch (error) {
    console.log(error);
  }
};
let format_formData = formName => {
  let data = $(`${formName}`)
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  console.log(data);
  return data;
};

let get_image = selector => document.querySelector(`selector`);

let lib = {
  get: get,
  post_json: post_json,
  post_multipart: post_multipart,
  message: message,
  format_formData: format_formData,
  get_image: get_image
};

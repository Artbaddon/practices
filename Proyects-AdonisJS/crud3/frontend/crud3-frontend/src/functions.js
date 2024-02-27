import Swal from "sweetalert2";
import axios from "axios";

export function showAlert(msg, icon, focus = "") {
  if (focus !== "") {
    document.getElementById(focus).focus();
  }
  Swal.fire({
    title: msg,
    icon: icon,
  });
}
export function confirm(id) {
  var url = "http://127.0.0.1:3333/products/" + id;
  Swal.fire({
    title: "You're going to delete this product, are you sure?",
    icon: "warning",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      sendRequest("DELETE", { id: id }, url, "Product Deleted");
    } else {
      showAlert("Operation Canceled", "info");
    }
  });
}
export function sendRequest(method, parms, url, msg) {
  axios({ method: method, url: url, data: parms }).then((response) => {
    showAlert(msg, 'success');
    window.setTimeout(function () {
      window.location.href = "/products";
    }, 1000);
  });
}

import "bootstrap/dist/css/bootstrap.rtl.min.css";
import './style.css';
import "jquery/dist/jquery.min";
import "popper.js/dist/esm/popper.min.js";
import 'webpack-jquery-ui';
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.min";
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
$(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();

    $(".add-to-card").click(function(){
        alert("أضيف المنتج إلى عربة الشراء");
    });
    $("#copytime").html(new Date().getFullYear());
});


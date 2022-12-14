import "bootstrap/dist/css/bootstrap.rtl.min.css";
import './style.css';
import "jquery/dist/jquery.min";
import "popper.js/dist/esm/popper.min.js";
import 'webpack-jquery-ui';
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.min";
import "webpack-jquery-ui";
import "webpack-jquery-ui/css";
import "jquery-ui-touch-punch/jquery.ui.touch-punch.min.js";
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
    $(".product-option").click(function(){
        $(this).siblings(".product-option").removeClass("active");
        $(this).addClass("active");
    });
    
    $("[data-quantity]").change(function(){
        var newQuantity =$(this).val();
        var parent = $(this).parents("[data-product-info]");
        var price = parent.attr("data-product-price");
        var totalprice = newQuantity * price;
        parent.find(".resultq").text(totalprice+ "$");
        calculateTotalPrice();
    });
    $("[data-quantity]").each(function(){
        var newQuantity =$(this).val();
        var parent = $(this).parents("[data-product-info]");
        var price = parent.attr("data-product-price");
        var totalprice = newQuantity * price; 
        parent.find(".resultq").text(totalprice+ "$");
        calculateTotalPrice();
      });
      function calculateTotalPrice(){
        var totalPriceForAllProducts =0;
        $("[data-product-info]").each(function(){
            var pricePerUnit = $(this).attr("data-product-price");
            var quantity = $(this).find("[data-quantity]").val();
            var totalPriceForProduct = pricePerUnit * quantity;
            totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct;
          }); 
          $("#total-price").text(totalPriceForAllProducts+"$");
      }
      $(".custom-btn-danger").click(function(){
        $(this).parents("[data-product-info]").remove();
        calculateTotalPrice();
      });

      var citiesByCountry ={
        sa:["جدة","الرياض"],
        eg:["الاسكندرية" , "القاهرة"],
        jo:["الزرقاء" , "عمان"],
        sy:["حلب" , "دمشق" ,"حماه"]
      }
      $('#form-checkout select[name="country"]').change(function(){
        var country = $(this).val();
        var cities = citiesByCountry[country];
        $('#form-checkout select[name="city"]').empty();
        $('#form-checkout select[name="city"]').append('<option disabled selected value="">اختر المدينة</option>');
        cities.forEach(function(city){
            var newOption = $("<option></option");
            newOption.text(city);
            newOption.val(city);
            $('#form-checkout select[name="city"]').append(newOption);
        });
      });
      $('#form-checkout input[name="payment-method"]').change(function(){
        var paymentMethod = $(this).val();

        if(paymentMethod === "on-delivary"){
            $("#credit-card-info input").prop("disabled", true);
        }
        else{
            $("#credit-card-info input").prop("disabled", false);
        }
        $("#credit-card-info").toggle();
      });

      $( "#price-range" ).slider({
        range: true,
        min: 50,
        max: 1000,
        step:50,
        values: [ 250, 800 ],
        slide: function( event, ui ) {
          $("#price-min").text(ui.values[0]);
          $("#price-max").text(ui.values[1]);
        }
      });
      
      
});


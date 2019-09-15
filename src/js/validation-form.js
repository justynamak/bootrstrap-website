import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";

const validationForm = () => {
  const forms = $(".needs-validation");

  function validate(e) {
    if (this.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    $(this).addClass("was-validated");
    console.log($(this));
  }

  forms.on("submit", validate);
};
export default validationForm;

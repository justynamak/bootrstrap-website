import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";

class Spinner {
  constructor(modal = null, toast = null) {
    this.active = false;
    this.spinner = $(".bg-spinner");
    this.body = $(document.body);
    this.modal = modal;
    this.toast = toast;
  }
  wait(time = 2500) {
    setTimeout(this.hideSpinner.bind(this), time);
  }
  toggleOverflow() {
    $(this.body).toggleClass("overflow-hidden");
  }

  showSpinner() {
    if (!this.active) {
      this.active = true;
      $(this.spinner).addClass("bg-spinner--visible");
      this.toggleOverflow();
      this.wait(3000);
    }
  }
  hideSpinner() {
    if (this.active) {
      this.active = false;
      $(this.spinner).removeClass("bg-spinner--visible");
      this.toggleOverflow();
      this.modal ? $(this.modal).modal("hide") : null;

      if (this.toast) {
        $(this.toast).toast({ delay: 3000 });
        $(this.toast).toast("show");
      }
    }
  }
}
export default Spinner;

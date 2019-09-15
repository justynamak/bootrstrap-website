import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";
import "@fortawesome/fontawesome-free/js/all";
import "bootstrap/dist/js/bootstrap.min.js";

import "../sass/main.scss";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import Gallery from "./Gallery";
import Random from "./Random";
import Spinner from "./Spinner";
import validationForm from "./validation-form";

$(document).ready(function($) {
  const that = $(window);
  const navbar = $("#navBar");
  const photos = $(".gallery-item");
  const url = "https://jsonplaceholder.typicode.com/comments";
  const random = new Random(url);
  const gallery = new Gallery();
  const popover = $("#popover");
  const btnSave = $("#save");
  const basicModal = $("#basicModal");
  const basicToast = $("#basicToast");
  const spinner = new Spinner(basicModal, basicToast);

  that.on("scroll", function() {
    if (that.scrollTop() < 50) {
      navbar.removeClass("navbar-scrolled navbar-light");
    } else {
      navbar.addClass("navbar-scrolled navbar-light");
    }
  });
  $("body").scrollspy({ target: "#navBar" });
  random.random();

  photos.on("click", e => gallery.handleClick(e));
  popover.popover();

  btnSave.on("click", () => spinner.showSpinner());

  validationForm();
});

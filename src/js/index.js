import "../sass/main.scss";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";
import "@fortawesome/fontawesome-free/js/all";

import "bootstrap/dist/js/bootstrap.min.js";

$(document).ready(function($) {
  const that = $(window);
  const navbar = $("#navBar");

  that.on("scroll", function() {
    if (that.scrollTop() < 50) {
      navbar.removeClass("navbar-scrolled navbar-light");
    } else {
      navbar.addClass("navbar-scrolled navbar-light");
    }
  });
  $("body").scrollspy({ target: "#navBar" });
});

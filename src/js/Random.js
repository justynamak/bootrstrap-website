import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";

class Random {
  constructor(url) {
    this.url = url;
    this.cite = document.querySelector(".random-cite");
    this.errorCite = "lorem ipsum dolor";
  }
  random() {
    const number = Math.floor(Math.random() * 100);
    this.number = number;
    this.getData();
  }
  getData() {
    fetch(this.url)
      .then(resp => resp.json())
      .then(data => this.generateHtml(data[this.number].name))
      .catch(() => this.generateHtml(this.errorCite));
  }
  generateHtml(text) {
    $(this.cite).html(`"${text}"`);
  }
}

export default Random;

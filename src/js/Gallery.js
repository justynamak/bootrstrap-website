import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";

class Gallery {
  constructor() {
    isActive: false;
    activeId: null;
    this.gallerySelector = $(".gallery-full-size");
    this.imgFullSize = $(".img-full-size");
    this.closeSelector = $(".close-icon");
    this.arrowRightSelector = $(".arrow-right");
    this.arrowLeftSelector = $(".arrow-left");
    this.allPhotosSelector = $(".gallery-item");

    this.closeSelector.on("click", () => this.closeGallery());
    this.arrowLeftSelector.on("click", () => this.prevSlide());
    this.arrowRightSelector.on("click", () => this.nextSlide());
    $(document).keydown(e => this.handleKeyDown(e));
  }
  getAllPhotosSelector() {
    return this.allPhotosSelector;
  }
  nextSlide() {
    if (this.activeId >= this.allPhotosSelector.length) {
      this.activeId = 1;
    } else {
      this.activeId++;
    }
    this.replaceSrc();
  }
  prevSlide() {
    if (this.activeId <= 1) {
      this.activeId = this.allPhotosSelector.length;
    } else {
      this.activeId--;
    }
    this.replaceSrc();
  }

  closeGallery() {
    this.isActive = false;
    this.gallerySelector.fadeToggle("slow");
    $(document.body).css({ overflow: "auto" });
  }
  replaceSrc() {
    this.imgFullSize.css({ opacity: 0.75 });
    setTimeout(() => {
      this.imgFullSize.css({ opacity: 1 });
      this.imgFullSize.attr("src", `./assets/${this.activeId}.jpg`);
    }, 500);
  }
  showGallery() {
    this.isActive = true;
    this.gallerySelector.fadeToggle("slow");
    $(document.body).css({ overflow: "hidden" });
  }
  handleClick(e) {
    e.preventDefault();
    this.activeId = parseFloat(e.currentTarget.dataset.id);
    this.replaceSrc();
    this.showGallery();
  }
  handleKeyDown(e) {
    if (this.isActive) {
      console.log(e.keyCode);
      if (e.keyCode === "37") this.prevSlide();
      else if (e.keyCode === "38") this.nextSlide();
    }
  }
}
export default Gallery;

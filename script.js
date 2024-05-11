
    function navbar() {
   var element = document.querySelector(".nav_list");
   element.classList.toggle("is-active");
}


document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
  



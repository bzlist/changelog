for(const heading of document.querySelectorAll("h2")){
  heading.addEventListener("click", () => {
    heading.classList.toggle("hidden");
    heading.nextSibling.classList.toggle("hidden");
  });
}

for(const anchor of document.querySelectorAll("h2 > a")){
  anchor.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

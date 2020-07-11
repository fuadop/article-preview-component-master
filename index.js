const popUp = document.querySelector(".share");
const shareBtn = document.querySelector(".share-img-container");

//event listeners

shareBtn.addEventListener("mouseenter", () => {
  popUp.classList.remove("hidden");
  shareBtn.style.backgroundColor = "var(--VeryDarkGrayishBlue)";
});

shareBtn.addEventListener("mouseleave", () => {
  popUp.classList.add("hidden");
  shareBtn.style.backgroundColor = "var(--LightGrayishBlue)";
});

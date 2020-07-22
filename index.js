const popUp = document.querySelector(".share");
const shareBtn = document.querySelector(".share-img-container");
const shareBtn2 = document.querySelector(".share-img-container-2");
const shareBtn3 = document.querySelector(".share-img-container-3");
const profile = document.querySelector(".profile");
const profile2 = document.querySelector(".profile-2");
const shareBanner = document.querySelector(".share-2");

//event listeners

shareBtn3.addEventListener("mouseenter", () => {
  popUp.classList.remove("hidden");
  shareBtn.style.backgroundColor = "var(--VeryDarkGrayishBlue)";
});

shareBtn3.addEventListener("click", () => {
  popUp.classList.remove("hidden");
  shareBtn.style.backgroundColor = "var(--VeryDarkGrayishBlue)";
});

shareBtn3.addEventListener("mouseleave", () => {
  popUp.classList.add("hidden");
  shareBtn.style.backgroundColor = "var(--LightGrayishBlue)";
});

shareBtn.addEventListener("click", () => {
  profile.style.display = "none";
  shareBanner.style.display = "flex";
});

shareBtn2.addEventListener("click", () => {
  profile.style.display = "flex";
  shareBanner.style.display = "none";
});

/*
shareBtn.addEventListener("click", () => {
  if (profile.style.backgroundColor != "var( --VeryDarkGrayishBlue)") {
    profile.innerHTML = `
    <div className="bg-dark ">
      <h3 className="shareBanner">SHARE</h3>
      <ul className="ul">
        <li className="li" ><i className="fab fa-facebook-square"></i></li>
        <li className="li" ><i className="fab fa-twitter"></i></li>
        <li className="li" ><i className="fab fa-pinterest"></i></li>
      </ul>
      <div className="share-img-container">
        <img src="images/icon-share.svg" alt="share" />
      </div>
    </div>
  `;
  }
});
*/

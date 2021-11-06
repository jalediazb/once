// Navbar
document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Web Share API

shareMobileButton = document.getElementById("share-mobile");
if (navigator.share) {
  shareMobileButton.addEventListener('click', function(){
    navigator
    .share({
      title: document.title,
      url: window.location.href,
    })
    .then(() => {
      console.log("Thanks for sharing!");
    })
    .catch(console.error);
  })
} else {
  shareMobileButton.style.display = "none";
  document.getElementById('search-mobile').classList.add('ml-auto')
}

// Search

const searchIcons = document.querySelectorAll(".search-icon");

let searchIndex = [];

function launchSearchBox() {
  if (document.querySelector(".search-box")) {
    document.querySelector(".search-box").classList.add("is-active");
  } else {
    const searchBox = document.createElement("div");
    searchBox.classList.add(
      "modal",
      "is-active",
      "search-box",
      "is-justify-content-flex-start"
    );
    searchBox.innerHTML = `
      <div class="modal-background" onclick="closeSearchBox()"></div>
      <div class="modal-content">
        <div class="section mx-5">
          <div class="card">
            <div class="panel">
              <div class="panel-heading">Search</div>
              <div class="panel-block">
                <p class="control has-icons-left">
                  <input class="input" id="input-search" type="text" placeholder="search..." onkeyup="search()">
                  <span class="icon is-left">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path class="clr-i-outline clr-i-outline-path-1" d="M16.33 5.05A10.95 10.95 0 1 1 5.39 16A11 11 0 0 1 16.33 5.05m0-2.05a13 13 0 1 0 13 13a13 13 0 0 0-13-13z" fill="#4a4a4a"/><path class="clr-i-outline clr-i-outline-path-2" d="M35 33.29l-7.37-7.42l-1.42 1.41l7.37 7.42A1 1 0 1 0 35 33.29z" fill="#4a4a4a"/></svg>
                  </span>
                </p>
              </div>
              <div id="search-results"></div>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" onclick="closeSearchBox()"></button>
    `;
    document.querySelector("footer").appendChild(searchBox);
  }

  if (searchIndex.length < 1) {
    fetch("/search.json")
      .then((response) => response.json())
      .then((data) => (searchIndex = data.search));
  }
}

function closeSearchBox() {
  document.querySelector(".search-box").classList.remove("is-active");
  cleanSearch();
  document.getElementById("input-search").value = "";
}

function cleanSearch() {
  document.getElementById("search-results").innerHTML = "";
}

function search() {
  cleanSearch();

  let results = [];

  if (document.getElementById("input-search").value.length > 1) {
    results = searchIndex.filter((item) => {
      return item.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          document
            .getElementById("input-search")
            .value.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        );
    });
  }

  results.forEach((item) => {
    const resultado = document.createElement("div");
    resultado.classList.add("panel-block");
    resultado.innerHTML = `
      <a href="${item.url}">${item.title}</a>
    `;
    document.getElementById("search-results").appendChild(resultado);
  });
}

for (icon of searchIcons) {
  icon.addEventListener("click", launchSearchBox);
}

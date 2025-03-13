function loadCatagorys() {
  // fetch categorays
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategorys(data.categories));
}

function displayCategorys(data) {
  const categoryContainer = document.getElementById("category-container");

  data.forEach((category) => {
      const categoryBtn = document.createElement("button");
      categoryBtn.className = "btn btn-sm"
    categoryBtn.innerHTML = category.category;
    categoryContainer.appendChild(categoryBtn);
  });
}

loadCatagorys();

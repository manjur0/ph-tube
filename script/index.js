// Load catagories
function loadCatagorys() {
  // fetch categorays
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

// Load videos
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

// Display Categories
function displayCategories(data) {
  const categoryContainer = document.getElementById("category-container");

  data.forEach((categorys) => {
    const categoryBtn = document.createElement("button");
    categoryBtn.className =
      "btn   hover:bg-red-700 hover:text-white rounded-lg active:bg-red-600 active:text-white";
    categoryBtn.innerHTML = categorys.category;
    categoryContainer.appendChild(categoryBtn);
  });
}
// Display Videos
const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos-container");

  videos.forEach((video) => {
    const div = document.createElement("div");
    //   const author = video.authors.map((author) => author.profile_name);
    div.innerHTML = ` <div>
        <a href="javascript:void(0)">
          <div
            class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
          >
            <div
              class="relative h-56 m-2.5 overflow-hidden text-white rounded-md"
            >
              <img
              width="100%"
                src="${video.thumbnail}"
                alt="card-image"
              />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                ${video.title}
              </h6>
              <p class="text-slate-600 leading-normal font-normal">
              
              </p>
            </div>

            ${video.authors.map(
              (author) =>
                ` <div class="flex items-center justify-between p-4">
              <div class="flex items-center">
                <img
                  alt="Tania Andrew"
                  src="${author.profile_picture}"
                  class="relative inline-block h-8 w-8 rounded-full"
                />
                <div class="flex flex-col ml-3 text-sm">
                  <span class="text-slate-800 font-semibold"> ${
                    author.profile_name
                  } ${
                  author.verified
                    ? "✅"
                    : ""
                }</span>
                  <span class="text-slate-600">${
                    video.others.views
                  } views</span>
                </div>
              </div>
            </div>`
            )}
          </div>
        </a>
      </div>`;
    console.log(video);
    videosContainer.appendChild(div);
  });
};

loadCatagorys();
loadVideos();

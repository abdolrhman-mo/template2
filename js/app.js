const tabsList = document.querySelectorAll(".information .tabs-list li");
const tabsCont = document.querySelectorAll(".information .tabs-content > div");

// Local Storage

const infoName = localStorage.getItem("info-name");

if (infoName !== null) {
  let link = document.querySelector(`[data-article="${infoName}"]`);

  tabsList.forEach((ele) => {
    ele.classList.remove("active");
  });

  link.classList.add("active");

  localStorage.setItem("info-name", link.dataset.article);

  // Remove active class from all articles and add it to choosen article
  tabsCont.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.classList.contains(link.dataset.article)) {
      ele.classList.add("active");
    }
  });
}

// Not Local Storage

tabsList.forEach((li) => {
  li.addEventListener("click", () => {
    // Remove active class from all li s and add it to clicked li
    tabsList.forEach((ele) => {
      ele.classList.remove("active");
    });

    li.classList.add("active");

    localStorage.setItem("info-name", li.dataset.article);

    // Remove active class from all articles and add it to choosen article
    tabsCont.forEach((ele) => {
      ele.classList.remove("active");
      if (ele.classList.contains(li.dataset.article)) {
        ele.classList.add("active");
      }
    });
  });
});

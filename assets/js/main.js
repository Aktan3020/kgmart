const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
});

const menuData = [
  {
    id: 1,
    title: "Женщинам",
    data: [
      {
        id: 10,
        title: "Платье и сарафаны",
        data: [
          {
            id: 1,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_UCsBSU6-uuC9Qctd1jcXLZq6eAnNw2e9A&s",
            title: "Тест Актан 1",
          },
          {
            id: 2,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qfkOLr5GD5unloUdNSLP2tvEu3pwgJ9PBw&s",
            title: "Тест Актан 2",
          },
        ],
      },
      {
        id: 22,
        title: "Блузки и рубашки",
        data: [
          {
            id: 1,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAo0dnCNrdAulTAE9OJ7yMjydqEDpv8cnpmg&s",
            title: "Тест Актан 1",
          },
          {
            id: 2,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOh-yWkcCO3Y5BDw08B3CtFOCRSJe0PO3dA&s",
            title: "Тест Актан 2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Мужчинам",
    data: [
      {
        id: 33,
        title: "Обувь",
        data: [
          {
            id: 1,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUp-p1knzLklg_wovM0hxiub2W4zgV64F_SQ&s",
            title: "Тест Актан 1",
          },
          {
            id: 2,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh55iHn2WceAa0uDcKi90DsMV02YPvX--yig&s",
            title: "Тест Актан 2",
          },
        ],
      },
      {
        id: 66,
        title: "Штаны",
        data: [
          {
            id: 1,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqS2wnRnxb-iNs6s20UzBTOPeL8IltegP6A&s",
            title: "Тест Актан 1",
          },
          {
            id: 2,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhNH8LwOnlONJNpBc7N7Mu3zS8HQCHuLLaQ&s",
            title: "Тест Актан 2",
          },
        ],
      },
    ],
  },
];

let currentSecondMenuItem = 0;
document.querySelector(".menu__close").addEventListener("click", () => {
  document.querySelector(".menu").classList.add("menu_hidden");
});
document.querySelector(".header__burger").addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("menu_hidden");
});
const mouseOverMenu = (e) => {
  const finalelement = document.querySelector(".menu__final");
  finalelement.innerHTML = "";
  finalelement.classList.remove("activate");
  const id = +e.currentTarget.getAttribute("data-id");
  const idx = +e.currentTarget.getAttribute("data-index");
  const secondMenuItemIdx = menuData.findIndex((item) => +item.id === id);
  const secondMenuItem = menuData[secondMenuItemIdx];
  const menu_secondEl = document.querySelector(".menu__second");
  menu_secondEl.classList.add("activate");
  menu_secondEl.innerHTML = "";
  menu_secondEl.innerHTML += `<h4>${secondMenuItem.title}</h4>`;
  secondMenuItem.data.forEach((item) => {
    menu_secondEl.innerHTML += `
        <div class="menu__second__item" data-id="${item.id}" data-index="${idx}"><span>${item.id}</span>${item.title}</div>
        `;
  });
  const allSecond = document.querySelectorAll(".menu__second__item");
  allSecond.forEach((element) => {
    element.addEventListener("click", (e) => {
      const finalelement = document.querySelector(".menu__final");
      finalelement.innerHTML = "";
      finalelement.classList.add("activate");
      const id = +e.currentTarget.getAttribute("data-id");
      const idx = +e.currentTarget.getAttribute("data-index");

      const data = menuData[idx];
      const data_render_idx = data.data.findIndex((item) => item.id === id);

      const data_render = data.data[data_render_idx];

      data_render.data.forEach((item) => {
        finalelement.innerHTML += `
                    <div class="final_item">
                    <img src="${item.image}">
                    <p>${item.title}</p>
                    </div>
                    <div class="lineMenu"></div>
                `;
      });
    });
  });
};

const allMenuItemFirst = document.querySelectorAll(".menu__firstItem");
allMenuItemFirst.forEach((element) => {
  element.addEventListener("click", mouseOverMenu);
});

function openSearch() {
  const header_bottom = document.querySelector(".header__bottom");
  const header_bottom_html = header_bottom.innerHTML;
  function closeSearch() {
    header_bottom.innerHTML = header_bottom_html;
    document
      .querySelector(".header__mobileSearch")
      .addEventListener("click", openSearch);
      document.querySelector(".header__burger").addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("menu_hidden");
      });
  }
  header_bottom.innerHTML = `
  <div class='close_mobileSearch' ><img src='./assets/icons/close-w.svg'></div>
    <div class="header__search_mobile">
            <input type="text" placeholder="Найти среди 266 227 товаров..." />
            <button><img src="./assets/icons/loupe.svg" alt="" /></button>
          </div>
  `;
  document.querySelector(".close_mobileSearch").onclick = closeSearch;
}
document
  .querySelector(".header__mobileSearch")
  .addEventListener("click", openSearch);

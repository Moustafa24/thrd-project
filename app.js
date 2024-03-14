const menu = [
  {
    id: 1,
    category: "launch",
    image: "./Images/image1.jpg",
    title: "Eggs With Soab",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem alia. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "30",
  },
  {
    id: 2,
    category: "launch",
    image: "./Images/image2.jpg",
    title: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "20",
  },
  {
    id: 3,
    category: "dinner",
    image: "./Images/image3.jpg",
    title: "Beef Meat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "50",
  },
  {
    id: 4,
    category: "breakfast",
    image: "./Images/image4.jpg",
    title: "Pancakes With Dates",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "15",
  },
  {
    id: 5,
    category: "breakfast",
    image: "./Images/image5.jpg",
    title: "Honey Pancakes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "15",
  },
  {
    id: 6,
    category: "launch",
    image: "./Images/image6.jpg",
    title: "Noodles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "25",
  },
  {
    id: 7,
    category: "snaks",
    image: "./Images/image7.jpg",
    title: "Cream Cake",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "15",
  },
  {
    id: 8,
    category: "snaks",
    image: "./Images/image8.jpg",
    title: "Croisson",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "10",
  },
  {
    id: 9,
    category: "launch",
    image: "./Images/image9.jpg",
    title: "Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "20",
  },
  {
    id: 10,
    category: "breakfast",
    image: "./Images/image10.jpg",
    title: "Egg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "5",
  },
  {
    id: 11,
    category: "dinner",
    image: "./Images/image11.jpg",
    title: "Motzarilla Eggs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "25",
  },
  {
    id: 12,
    category: "snaks",
    image: "./Images/image12.jpg",
    title: "Backings",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi, sapiente repudiandae dolorem aliquid expedita. Pariatur adipisci doloribus saepe aspernatur dolores maiores veritatis.",
    price: "10",
  },
];

const btns = document.querySelector(".filter-btns");
const menuItems = document.querySelector(".menu-items");

document.addEventListener("DOMContentLoaded", function () {
  displayMenuContent(menu);
  filter();
});

function filter() {
  btns.addEventListener("click", function (e) {
    if (e.target.classList.contains("breakfast")) {
      //menucategory is a new array containing the data that got filtered from the menu array accroding to the given condition
      let menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === "breakfast") {
          return menuItem;
        }
      });
      displayMenuContent(menuCategory);
    }
    if (e.target.classList.contains("launch")) {
      let menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === "launch") {
          return menuItem;
        }
      });
      displayMenuContent(menuCategory);
    }
    if (e.target.classList.contains("dinner")) {
      let menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === "dinner") {
          return menuItem;
        }
      });
      displayMenuContent(menuCategory);
    }
    if (e.target.classList.contains("snaks")) {
      let menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === "snaks") {
          return menuItem;
        }
      });
      displayMenuContent(menuCategory);
    }
    if (e.target.classList.contains("All")) {
      displayMenuContent(menu);
    }
  });
}

function displayMenuContent(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<article class="menu-item">
            <div class="img"><img src=${item.image} alt="img" /></div>
            <div class="item-content">
              <div class="item-heading">
                <h2>${item.title}</h2>
                <span>Price : $ ${item.price}</span>
              </div>
              <p>
                ${item.description}
              </p>
            </div>
          </article>`;
  });

  //join() method : Adds all the elements of an array into a string, separated by the specified separator string.
  //   there was commas in between the string after being add of each menu element, join("") removed it
  menuItems.innerHTML = displayMenu.join("");
}

window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
});

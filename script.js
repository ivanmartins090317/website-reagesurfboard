const openMenuMobile = document.querySelector(".icon-button-header");
const containerMenuMobile = document.querySelector(".nav-mobile");
const closeMenu = document.querySelector(".close-menu");
const navMobile = document.querySelector(".link");

// modal mobile
openMenuMobile.addEventListener("click", () => {
  containerMenuMobile.style.display = "block";
  console.log(containerMenuMobile);
});

containerMenuMobile.addEventListener("click", (event) => {
  const elementClicked = event.target.classList[0];
  const classNames = [
    "link-models",
    "link-history",
    "link-sobre",
    "link-contato",
    "close-menu",
  ];

  const elementForCloseMenu = classNames.some(
    (className) => className === elementClicked
  );

  if (elementForCloseMenu) {
    containerMenuMobile.style.display = "none";
  }
});
// modal mobile

// navegação de links internos
const menuLinks = document.querySelector(".nav-footer");

menuLinks.addEventListener("click", (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("href");
  const distanceToTop = document.querySelector(id).offsetTop - 140;
  smoothScrollTo(0, distanceToTop);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}
// navegação de links internos

// delegation para deslocamentos de cards models
const containerModels = document.querySelector("#models");
const next = document.querySelector(".next");
const models02 = document.querySelector(".s2");
const models01 = document.querySelector(".s1");

const effectTransition = (element, marginLeft) => {
  models01.style.marginLeft = marginLeft;
  element.style.transition = "0.7s";
};

containerModels.addEventListener("click", (event) => {
  const elementClicked = event.target.classList[0];
  const isElementClickedOne = ["nextmodel", "container-models"];
  const isElementClickedTwo = ["nextmodelTwo", "img02"];

  const isOkOne = isElementClickedOne.some(
    (element) => element === elementClicked
  );
  const isOkTwo = isElementClickedTwo.some(
    (element) => element === elementClicked
  );
  if (isOkOne) {
    effectTransition(models02, "-16%");
    return;
  }
  if (isOkTwo) {
    effectTransition(models01, "3%");
  }
});
// delegation para deslocamentos de cards models

// evento para lidar com abertura de texto de cards models
// const buttonInfo = document.querySelectorAll(".button-info");
// const containerModel = document.querySelector(".container-models");
// const textModels = document.querySelectorAll(".container-models .information .description p");

// buttonInfo.forEach((button) => {
//   button.addEventListener("click", () => {
//     containerModel.classList.toggle("active");

//     if (containerModel.classList.contains("active")) {
//       button.textContent = "LER MENOS";
//       textModels.forEach((text) => {
//         text.style.maxWidth = "70%";
//         text.style.whiteSpace = "wrap"
//       })
//     } else {
//       button.textContent = "LER MAIS";
//       textModels.forEach((text) =>{
//         text.style.maxWidth = "15ch"
//         text.style.whiteSpace = "nowrap"
//       }) ;
//     }
//   });
// });


const buttonInfo = document.querySelectorAll(".button-info");
const extractButton = Array.from(buttonInfo);
const buttonFirstCard = buttonInfo[0];
const buttonsecondCard = buttonInfo[1];
const clouseInformation = document.querySelector(".fechar");
const containerModel = document.querySelector(".container-models");
const textModels = document.querySelectorAll(".container-models .information .description p");


// const showDesciption = (showtext, hiddenText, index) =>{
//   containerModel.classList.toggle("active");
//   console.log('ShowDesciption');
//   const isActiveClass = containerModel.classList.contains("active")
//   if (isActiveClass) {
//     buttonFirstCard.textContent = showtext;
//         textModels[index].style.maxWidth = "90%";
//         textModels[index].style.whiteSpace = "wrap";
//         return
//   }
//   buttonFirstCard.textContent = hiddenText;
//   textModels[index].style.maxWidth = "25ch";
//   textModels[index].style.whiteSpace = "nowrap";
// }


// buttonInfo[0].addEventListener('click', () =>{
//   containerModel.classList.toggle("active");
//   const isActiveClass = containerModel.classList.contains("active")
//   if (isActiveClass) {
//     buttonFirstCard.textContent = "LER MENOS";
//         textModels[0].style.maxWidth = "90%";
//         textModels[0].style.whiteSpace = "wrap";
//       return
//   }
//       buttonFirstCard.textContent = "LER MAIS"
//       textModels[0].style.maxWidth = "25ch";
//       textModels[0].style.whiteSpace = "nowrap";
   
  
// })

// buttonsecondCard.addEventListener("click", () => {
//   containerModel.classList.toggle("active");
//   const isActiveClass = containerModel.classList.contains("active");
//   if (isActiveClass) {
//     buttonFirstCard.textContent = "LER MENOS";
//     textModels[1].style.maxWidth = "90%";
//     textModels[1].style.whiteSpace = "wrap";
//     return;
//   }
//   buttonFirstCard.textContent = "LER MAIS";
//   textModels[1].style.maxWidth = "25ch";
//   textModels[1].style.whiteSpace = "nowrap";
// });
// buttonFirstCard.addEventListener("click", () => {
//   containerModel.classList.toggle("active");
//   const isActiveClass = containerModel.classList.contains("active");

//   if (isActiveClass) {
//     buttonFirstCard.textContent = "LER MENOS";
//     textModels.forEach(
//       (text) => text.style.display = "block"
//     )
//     return;
//   }
//   buttonFirstCard.textContent = "LER MAIS";
//    textModels.forEach((text) => (text.style.display = "none"));
// });
// buttonsecondCard.addEventListener("click", () => {
//   models02.classList.toggle("active");
//   const isActiveClass = models02.classList.contains("active");

//   if (isActiveClass) {
//     buttonsecondCard.textContent = "LER MENOS";
//     return;
//   }
//   buttonsecondCard.textContent = "LER MAIS";
// });
// evento para lidar com abertura de texto de cards models

// animation para os texto de entrada e saida da tela
const observerElement = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("show");
      return;
    }
    element.target.classList.remove("show");
  });
});

const elementsHidden = document.querySelectorAll(".hidden");
elementsHidden.forEach((elementHidden) =>
  observerElement.observe(elementHidden)
);
// animation para os texto de entrada e saida da tela

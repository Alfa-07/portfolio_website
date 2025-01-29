const menubtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menubtn.querySelector("i");

menubtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
}); 

const scrollRevelOption ={
    distance :"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header__image img",{
    ...scrollRevelOption,
    origin:"right",
});
ScrollReveal().reveal(".header__content h2",{
    ...scrollRevelOption,
    delay:500,
});
ScrollReveal().reveal(".header__content h1",{
    ...scrollRevelOption,
    delay:1000,
});
ScrollReveal().reveal(".header__content h3",{
    ...scrollRevelOption,
    delay:1500,
});
ScrollReveal().reveal(".header__content p",{
    ...scrollRevelOption,
    delay:2000,
});
ScrollReveal().reveal(".header__btns",{
    ...scrollRevelOption,
    delay:2500,
});
ScrollReveal().reveal(".intro__image", {
    ...scrollRevelOption,
    origin: "left",
  });
  ScrollReveal().reveal(".intro__content .section__subheader", {
    ...scrollRevelOption,
    delay: 500,
  });
  ScrollReveal().reveal(".intro__content .section__header", {
    ...scrollRevelOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".intro__description", {
    ...scrollRevelOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".intro__grid", {
    ...scrollRevelOption,
    delay: 2000,
  });
  ScrollReveal().reveal(".intro__content h4", {
    ...scrollRevelOption,
    delay: 2500,
  });
  ScrollReveal().reveal(".intro__flex div", {
    ...scrollRevelOption,
    delay: 3000,
    interval: 500,
  });
  

let hamBtn = document.getElementsByClassName("header-ham");
let navMenu = document.getElementsByClassName("header-nav")[0];
let isOpen = false;
hamBtn[0].addEventListener("click", (d=> {
    if(isOpen)
    {
        hamBtn[0].src = "../images/icon-hamburger.svg"
        navMenu.classList.remove("open");
        isOpen=false;
    }
    else
    {
        navMenu.classList.add("open")
        isOpen=true;
        hamBtn[0].src = "../images/icon-close.svg"
    }
}))
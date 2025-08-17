let calcScrollValue = () => {
    //let scrollProgress = document.querySelector(".yukari-cik");
    //let progressValue = document.querySelector(".yukaricikbtn");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    let header = document.querySelector("header");

    if (pos > 0) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Mini menu


function showmenu(){
    var hlogo=document.querySelector(".header-logo img");
    var minimenu = document.querySelector(".mini-menu");
    var header = document.querySelector("header");
    var body=document.querySelector("body");
    minimenu.classList.add("active");
    hlogo.src="../content/images/logo.png";
    header.classList.remove("active");
    body.classList.add("passive");
}
function minimenuclose(){
    var hlogo=document.querySelector(".header-logo img");
    var minimenu = document.querySelector(".mini-menu");
    var header = document.querySelector("header");
    var body=document.querySelector("body");
    minimenu.classList.remove("active");
    hlogo.src="../content/images/logo.png";
    header.classList.add("active");
    body.classList.remove("passive");
}
function navclose(){
    var minimenu = document.querySelector(".mini-menu");
    var body=document.querySelector("body");
    minimenu.classList.remove("active");
    body.classList.remove("passive");
}
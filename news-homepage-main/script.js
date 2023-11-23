const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

const changeImageOnPhone = () =>{
    const img = document.getElementById('desktop-view');
    const checkPhoneView = window.matchMedia('(max-width:768px)');
    if(checkPhoneView.matches){
       img.src = "/assets/images/image-web-3-mobile.jpg";
       console.log("matches")
       
    }
    else{
        img.src = "/assets/images/image-web-3-desktop.jpg";
    }
}

addEventListener("resize",changeImageOnPhone);
addEventListener("load",changeImageOnPhone);

const toggleNavMenu = () =>{
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("bg-overlay");
    if(mobileMenu.style.display == "none" || mobileMenu.style.display == ""){
        mobileMenu.style.display = "block"
        overlay.style.display = "block"
    }
    else{
        mobileMenu.style.display = "none";
        overlay.style.display = "none"
    }
}

menuIcon.addEventListener('click',toggleNavMenu);
closeIcon.addEventListener('click',toggleNavMenu)
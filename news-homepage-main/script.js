

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

addEventListener("resize",changeImageOnPhone)
addEventListener("load",changeImageOnPhone)
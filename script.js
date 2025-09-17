let arrowLeft=document.querySelector(".fa-solid.fa-circle-arrow-left");
let arrowRight=document.querySelector(".fa-solid.fa-circle-arrow-right");
let sliderImgDiv=document.querySelector(".slider-img");
arrowLeft.addEventListener("click",()=>{
    let front=document.querySelector(".front-image");
    sliderImgDiv.removeChild(front);

    let mid=document.querySelector(".mid-image");
    mid.classList.replace("mid-image","front-image");
    // mid.classList.remove("mid-image");
    // mid.classList.add("front-image");

    let end=document.querySelector(".end-image");
    end.classList.replace("end-image","mid-image");
    // end.classList.remove("end-image");
    // end.classList.add("mid-image");

    let div=document.createElement("div");
    div.classList.add("end-image","image-container-images");

    let img=document.createElement("img");
    let a=Math.floor(Math.random()*10)+1;
   img.src = `assets/slider/img${a}.jpg`;

    div.appendChild(img);
    sliderImgDiv.appendChild(div);
});
arrowRight.addEventListener("click",()=>{
    let end=document.querySelector(".end-image");
    sliderImgDiv.removeChild(end);

    let mid=document.querySelector(".mid-image");
    mid.classList.replace("mid-image","end-image");
    // mid.classList.remove("mid-image");
    // mid.classList.add("front-image");

    let front=document.querySelector(".front-image");
    front.classList.replace("front-image","mid-image");
    // end.classList.remove("end-image");
    // end.classList.add("mid-image");

    let div=document.createElement("div");
    div.classList.add("front-image","image-container-images");

    let img=document.createElement("img");
    let a=Math.floor(Math.random()*10)+1;
    img.src = `assets/slider/img${a}.jpg`;

    div.appendChild(img);
    // sliderImgDiv.appendChild(div);
     sliderImgDiv.insertBefore(div, sliderImgDiv.firstChild);
});
let galleryBtn=document.querySelector(".create-gallery");
galleryBtn.addEventListener("click",()=>{
    window.location.href = "gallery2.html";
});

let photosBtn=document.querySelector(".photosBtn");
photosBtn.addEventListener("click",()=>{
    window.location.href="photo.html";
});
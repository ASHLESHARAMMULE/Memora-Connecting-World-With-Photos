const select = document.getElementById('Images');
const addButton = document.querySelector('.add-image');
let body=document.querySelector("body");

addButton.addEventListener('click', () => {
    let selectedValue=select.value;
    if(selectedValue){
        let div=document.createElement("div");
        div.classList.add("image-column");
        let divInside=document.createElement("div");
        divInside.classList.add("image-container-images");
        let img=document.createElement("img");
        img.src=selectedValue;
        divInside.appendChild(img);
        div.appendChild(divInside);
        let cont=document.querySelector(".image-container");
        cont.appendChild(div);
        

    }else{
        alert("Select Image");
    }

});
let home=document.querySelector(".home");
home.addEventListener("click",(event)=>{
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(()=>{
          window.location.href="index.html";
    },200);
    

});

let photosBtn=document.querySelector(".photosBtn");
photosBtn.addEventListener("click",()=>{
    window.location.href="photo.html";
});
// Get folder name from URL
const urlParams = new URLSearchParams(window.location.search);
const folder = urlParams.get("folder") || "default";

// Image counts per folder
const folderImageCount = {
    default: 12,
    beach: 2,
    camp: 4,
    coder: 2,
    life: 4,
    random: 4
};

// Select container
const imageContainer = document.querySelector(".image-container");
imageContainer.innerHTML = ""; // clear old HTML

// How many images to load
const count = folderImageCount[folder] || 0;

// Create 4 columns
const numColumns = 4;
const columns = [];
for (let c = 0; c < numColumns; c++) {
    const col = document.createElement("div");
    col.classList.add("image-column");
    imageContainer.appendChild(col);
    columns.push(col);
}

// Distribute images across columns
for (let i = 1; i <= count; i++) {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("image-container-images");

    const img = document.createElement("img");
    img.src = `assets/${folder}/${folder}${i}.jpg`;
    img.alt = `${folder} ${i}`;

    imgDiv.appendChild(img);
    columns[(i - 1) % numColumns].appendChild(imgDiv);
}

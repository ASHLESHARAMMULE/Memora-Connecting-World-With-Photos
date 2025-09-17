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
// const select = document.getElementById('Images');
// const addButton = document.querySelector('.add-image');


// const firstColumn = document.querySelector('.image-column');
// const imageContainer=document.querySelector(".image-container");

// addButton.addEventListener('click', () => {
//     let selectedValue = select.value;

//     if (selectedValue) {
//         let divInside = document.createElement("div");
//         divInside.classList.add("image-container-images");

//         let img = document.createElement("img");
//         img.src = selectedValue;

//         divInside.appendChild(img);

//         firstColumn.appendChild(divInside); 
//     } else {
//         alert("Select Image");
//     }
// });
// Read folder from query param
// Get folder name from URL
// console.log(window.location.search);?folder=camp
// const params = new URLSearchParams(window.location.search);
// let folder = params.get("folder");
// if (!folder) {
//     folder = "default"; // 👈 put your fallback folder name here
// }


// const imageContainer = document.querySelector(".image-container");

// // Clear all existing images and columns
// imageContainer.innerHTML = "";

// // Define how many images per folder (adjust as needed)
// const folderImageCount = {
//     default:12,
//     beach: 2,
//     camp: 4,
//     coder: 2,
//     life: 4,
//     random: 4
// };

// // How many images to load
// const count = folderImageCount[folder] || 5;

// // Create 4 columns dynamically
// const numColumns = 4;
// const columns = [];
// for (let c = 0; c < numColumns; c++) {
//     const col = document.createElement("div");
//     col.classList.add("image-column");
//     imageContainer.appendChild(col);
//     columns.push(col);
// }

// // Distribute images across columns (masonry style)
// for (let i = 1; i <= count; i++) {
//     const imgDiv = document.createElement("div");
//     imgDiv.classList.add("image-container-images");

//     const img = document.createElement("img");
//     img.src = `assets/${folder}/${folder}${i}.jpg`;
//     img.alt = `${folder} ${i}`;

//     imgDiv.appendChild(img);

//     // Add to column in round-robin
//     columns[(i - 1) % numColumns].appendChild(imgDiv);
// }

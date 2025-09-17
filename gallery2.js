let heroCards = document.querySelectorAll(".hero-template");

heroCards.forEach(card => {
  card.addEventListener("click", () => {
    const folder = card.classList[1];
   
    // card.classList[1] will be like 'beach', 'camp', etc.
    window.location.href= `folder.html?folder=${folder}`;
  });
});
let btn=document.querySelector(".folder");
btn.addEventListener("click",()=>{
    let input=document.querySelector(".inp");
    let inputValue=input.value.toUpperCase();
    let select=document.getElementById("Images");
    let selectedValue=select.value;
    if(!selectedValue){
        alert("Select Image");
    }
    if(!inputValue){
        alert("Enter Name Of Folder");
    }
    let div=document.createElement("div");
    div.classList.add("hero-template",inputValue);
    let img=document.createElement("img");
    img.src=selectedValue;
    let divInside=document.createElement("div");
    divInside.classList.add("folder-para");
    let p=document.createElement("p");
    let b=document.createElement("b");
    let pInside=document.createElement("p");
    pInside.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, adipisci.";
    b.innerText=inputValue;
    p.appendChild(b);
    divInside.appendChild(p);
    divInside.appendChild(pInside);
    div.appendChild(img);
    div.appendChild(divInside);
    let hero=document.querySelector(".hero");
    hero.appendChild(div);
    input.value="";
    selectedValue="";
});
let home=document.querySelector(".home");
home.addEventListener("click",(event)=>{
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(()=>{
          window.location.href="index.html";
    },200);
    

});
let photo=document.querySelector(".photo");
photo.addEventListener("click",(event)=>{
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(()=>{
          window.location.href="photo.html";
    },200);
    

});
// When a card is clicked → go to folder.html?folder=name
document.querySelector(".hero").addEventListener("click", (e) => {
    const card = e.target.closest(".hero-template");
    if (card) {
        // the second class of the div (beach, camp, coder, etc.)
        const folder = card.classList[1];
        window.location.href = `folder.html?folder=${folder}`;
    }
});

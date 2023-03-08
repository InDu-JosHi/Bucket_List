let pencil = document.querySelector(".pencil");
let allItems = document.querySelector(".allItems ");
let userInput = document.querySelector(".userInput");


userInput.addEventListener("keydown", (event)=>{
if(event.key == "Enter"){
    addItem();
}
})

pencil.addEventListener("click", ()=>{
    allItems.innerHTML = "";
})

function addItem(){
    let h2 = document.createElement("h2");
    h2.innerHTML = '-' + userInput.value;


    h2.addEventListener("click",()=>{
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend",h2);

    userInput.value = "";
}



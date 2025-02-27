const ringButtons = document.querySelectorAll(".ring-button");
const productImageBase ="../images/";

for(let i = 0; i < ringButtons.length; i++){
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener('click', function(event){
         const color = event.target.id.replace("-color", "");

        for(let j = 0; j<ringButtons.length; j++){
         ringButtons[j].classList.remove('border-purple-600');
         ringButtons[j].classList.add('border-gray-200');
        }

        // Add-border-color-in-ring-Buttons
        event.target.classList.add('border-purple-600');
        event.target.classList.remove('border-gray-200');

        const productImage = document.getElementById('product-image');
        // productImage.src =`./images/${color}.png`;
        productImage.src = productImageBase + color +".png";
    })
}

// size select js

function selectTheSize(size){
   const sizes = ["S", "M","L","XL"];

   for(let i = 0; i<sizes.length; i++){
    const button = document.getElementById("size-" + sizes[i]);
    const element = sizes[i];
    if(size === element){
        button.classList.add('border-purple-600');
    }else{
        button.classList.remove('border-purple-600');
    }
    
   }
}

// quntity count js

const quantityElements = document.querySelectorAll('.quantity-button');

for (let btn of quantityElements){
    btn.addEventListener("click", function(event){
       const amount = event.target.innerText === "+" ? 1 : -1;
       const quantityElement = document.getElementById('quantity');
       const currentQuantity = parseInt(quantityElement.innerText);
       const newQuantity = Math.max(0, currentQuantity + amount);
       
       quantityElement.innerText = newQuantity;
       
    })
}

const ringButtons = document.querySelectorAll(".ring-button");
const productImageBase ="./images/";

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

// add to cart method js
let cartCount = 0;
let cartItems = [];
document.getElementById("add-to-cart")
    .addEventListener('click', function(){
        const quantity = parseInt(document.getElementById('quantity').innerText); 
        
        if(quantity > 0){
            document.getElementById("checkout-container").classList.remove('hidden');
            cartCount += quantity;
            document.getElementById('cart-count').innerText = cartCount;


           const selectedColorButton = document.querySelector("button.border-purple-600.w-6");
           const selectedColor = selectedColorButton
            ? selectedColorButton.id.split("-")[0]
            : "S";
            
            const sizeSelector = document.querySelector("button.border-purple-600:not(.w-6)");

            const selectedSize = sizeSelector.innerText.split("$");
            const size = selectedSize[0];
            const price = selectedSize[1];
            
            const productImage = document.getElementById('product-image');
            cartItems.push({
                 image :productImageBase + selectedColor + '.png',
                 title : "Classy Morden Smart Watch",
                 color : selectedColor,
                 size : size,
                 price : quantity * parseInt(price),
                 quantity : quantity,
            })

            console.log(cartItems);

            console.log(size, price);

        }else{
            alert('plz select a item');
        }
       
    })


    document.getElementById("checkout-container")
        .addEventListener('click', function(){
            document.getElementById("cart-modal").classList.remove('hidden');
            const cartItemsContainer = document.getElementById("cart-items");

            for(let i = 0; i < cartItems.length; i++){
                const item = cartItems[i];
                const tr = document.createElement('tr');
                tr.classList.add("border-b");

                tr.innerHTML=`
                <td class="py-2 px-4">
                 <div class="flex justify-center items-center space-x-4">
                   <img class="w-12 h-12 object-cover rounded-lg" src="${item.image}" alt="">
                   <span>${item.title}</span>
                 </div>
                 <td class="py-2 px-4">${item.color}</td>
                 <td class="py-2 px-6">${item.size}</td>
                 <td class="py-2 px-10">${item.quantity}</td>
                 <td class="py-2 px-4">${item.price}</td>
                </td>
                `;
                cartItemsContainer.appendChild(tr);
            }
        })
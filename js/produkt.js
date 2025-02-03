const productContainer = document.querySelector(".item_container");

// 1️⃣ Hent produkt-ID fra URL'en
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

if (!productId) {
  console.error("Ingen produkt-ID i URL’en!");
} else {
  // 2️⃣ Hent data fra API'et
  fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      // 3️⃣ Indsæt dynamisk produktdata i HTML
      productContainer.innerHTML = `
         <div class="item">
           <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}" />
         </div>
         <div class="item_description">
           <h3>${data.productdisplayname}</h3>
           <p>${data.price} DKK</p>

           <div class="size-options">
             <p><strong>Size:</strong> M</p>
             <div class="size-buttons">
               <div class="size">S</div>
               <div class="size">M</div>
               <div class="size">L</div>
               <div class="size">XL</div>
               <div class="size">XXL</div>
             </div>
           </div>

           <div class="outline">
             <h5>Product Information:</h5>
             <div class="product_information_grid">
               <div>
                 <h4>Category</h4>
                 <p class="description_text">${data.usagetype}</p>
               </div>
               <div>
                 <h4>Brandname</h4>
                 <p class="description_text">${data.brandname}</p>
               </div>
               <div>
                 <h4>Season</h4>
                 <p class="description_text">${data.season}</p>
               </div>
               <div>
                 <h4>Inventory number</h4>
                 <p class="description_text">${data.id}</p>
               </div>
             </div>
           </div>
           <a href="#"><div class="cart">ADD TO CART</div></a>
           <p class="description_item">
             Blue round neck Sahara Team India jersey, has short sleeves, print on the chest and back chest. Warranty for manufacturing defects: 6 months (not valid on products with more than 20% discount). Cheer for the Indian cricket team on and off
             the fields in this blue polo neck jersey from Nike.
           </p>
         </div>
      `;
    })
    .catch((error) => console.error("Fejl ved hentning af produkt:", error));
}

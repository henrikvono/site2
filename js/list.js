const productGrid = document.querySelector(".product_grid");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((products) => {
    productGrid.innerHTML = products
      .map((product) => {
        return `
       <section class="card">
          <a href="produkt.html">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produktbillede" style="width: 100%" />
            <article class="card_container">
              <h2>${product.productdisplayname}</h2>
              <p class="price">${product.price} DKK</p>
            </article>
          </a>
        </section>
        `;
      })
      .join(""); // Converts array into a string to insert into HTML
  })
  .catch((error) => console.error("Error fetching products:", error));

const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

if (season) {
  document.getElementById("category-title").textContent = season;
  fetchProducts(season);
}

async function fetchProducts(season) {
  const url = `https://kea-alt-del.dk/t7/api/products?season=${season}`;
  const response = await fetch(url);
  const products = await response.json();

  displayProducts(products);
}

function displayProducts(products) {
  const container = document.querySelector(".product_grid");
  container.innerHTML = ""; // Ryd tidligere indhold

  products.forEach((product) => {
    const discountLabel = product.discount ? `<div class="discount-label">Udsalg: ${product.discount}%</div>` : "";

    const soldoutLabel = product.soldout ? `<div class="soldout-label">Udsolgt</div>` : "";

    const productHTML = `
      <section class="card">
      <a href="produkt.html?id=${product.id}">
         ${discountLabel}
         ${soldoutLabel}
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          <article class="card_container">
          <h2>${product.productdisplayname}</h2>
          <p class="price">${product.price} DKK</p>
          </article>
      </a>
      </section>
    `;
    container.innerHTML += productHTML;
  });
}

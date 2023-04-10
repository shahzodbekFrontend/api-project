document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".products");
  async function fetchProducts(url) {
    try {
        let data = await fetch(url);
        let response = await data.json();
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            let description = response[i].description;
            let title = response[i].title;
            products.innerHTML += `
                <div class="product">
                    <img class="product-img" src="${response[i].image}" alt="${
                    response[i].category.name
                    }">
                    <div class="product-content">
                        <h2 class="product-title">${
                        title.length > 15
                        ? title.substr(0, 15).concat("...more")
                        : title
                        }</h2>
                        <h4 class="product-category">${
                        response[i].category.name
                        }</h4>
                        <p class="product-description">${
                        description.length > 20
                        ? description.substr(0, 80).concat("...more")
                        : description
                        }</p>
                        <div class="product-price--container">
                            <h3 class="product-price">$${response[i].price}</h3>
                            <a class="add-to-cart" data-producId="${
                            response[i].id
                            }" href="#"><ion-icon name="cart-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>
                
            `;
    //   console.log(response[i].id);
    }
    }
    catch(err) {
        console.log(err);
    }
  }
  fetchProducts("https://fakestoreapi.com/products");
});

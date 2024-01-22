async function getitems() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const items = data.products;

  const result = items
    .map(function (item) {
      return `
      <div class="item">
      <img src = "${item.thumbnail}"/>
      <h2>${item.title}</h2>
      <h2>${item.price}$</h2>
    
      </div>
      `;
    })
    .join("");
  document.querySelector(".items").innerHTML = result;
}

getitems();

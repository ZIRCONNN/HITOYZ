function displayProducts() {
    const products = document.querySelectorAll('.product');
  
    products.forEach((product) => {
      const addToCartBtn = product.querySelector('.btn');
      addToCartBtn.addEventListener('click', addToCart);
    });
  }
  
  function addToCart(event) {
    event.preventDefault();
    const product = event.target.parentElement;
    const productName = product.querySelector('h3').textContent;
    alert(`Added ${productName} to cart!`);
  }
  
  displayProducts();
  
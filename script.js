
// Add products to the product grid
const productGrid = document.querySelector('.product-grid');

// Fetch product data (replace with your own data)
const products = [
    { name: 'Premium Dog Food', image: 'assets/product1.png', price: 29.99 },
    { name: 'Organic Cat Food', image: 'assets/product2.jpg', price: 24.99 },
    { name: 'Puppy Training Treats', image: 'assets/product3.png', price: 14.99 },
    { name: 'Senior Cat Dry Food', image: 'assets/product4.webp', price: 19.99 },
    { name: 'Dental Dog Chews', image: 'assets/product5.jpeg', price: 39.99 },
    { name: 'Dental Dog Chews', image: 'assets/product2.jpg', price: 29.99 },
    { name: 'Puppy Training Treats', image: 'assets/product7.jpg', price: 14.99 },
    { name: 'Senior Cat Dry Food', image: 'assets/product6.jpg', price: 19.99 },
    { name: 'Dental Dog Chews', image: 'assets/product1.png', price: 39.99 },
    { name: 'Dental Dog Chews', image: 'assets/product7.jpg', price: 49.99 },
    { name: 'Organic Cat Food', image: 'assets/product2.jpg', price: 24.99 },
    { name: 'Puppy Training Treats', image: 'assets/product3.png', price: 14.99 },
    // Add more products as needed
  ];

// Create and append product items to the grid
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
  
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
  
    const productName = document.createElement('h3');
    productName.textContent = product.name;
  
    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
  
    const quantityControls = document.createElement('div');
    quantityControls.classList.add('quantity-controls');
  
    const minusButton = document.createElement('button');
    minusButton.classList.add('minus-btn');
    minusButton.textContent = '-';
    minusButton.addEventListener('click', () => decreaseQuantity(product, quantityInput));
  
    const quantityInput = document.createElement('input');
    quantityInput.classList.add('quantity-input');
    quantityInput.type = 'number';
    quantityInput.value = 1;
    quantityInput.min = 1;
  
    const plusButton = document.createElement('button');
    plusButton.classList.add('plus-btn');
    plusButton.textContent = '+';
    plusButton.addEventListener('click', () => increaseQuantity(product, quantityInput));
  
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('btn', 'btn-primary');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product, quantityInput.value));
  
    quantityControls.appendChild(minusButton);
    quantityControls.appendChild(quantityInput);
    quantityControls.appendChild(plusButton);
  
    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(quantityControls);
    productItem.appendChild(addToCartButton);
  
    productGrid.appendChild(productItem);
  });
  
  function decreaseQuantity(product, quantityInput) {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  }
  
  function increaseQuantity(product, quantityInput) {
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
  }
  
  function addToCart(product, quantity) {
    // Add the product to the cart with the specified quantity
    console.log(`Adding ${quantity} of "${product.name}" to the cart.`);
  }
  
  // Add to cart functionality
  let cart = [];
  
  function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
  }
  
  function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
  
    cart.forEach(product => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
  
      const productName = document.createElement('h4');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price.toFixed(2)}`;
  
      const removeButton = document.createElement('button');
      removeButton.classList.add('btn', 'btn-danger');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => removeFromCart(product));
  
      cartItem.appendChild(productName);
      cartItem.appendChild(productPrice);
      cartItem.appendChild(removeButton);
  
      cartContainer.appendChild(cartItem);
    });
  }
  
  function removeFromCart(product) {
    const index = cart.indexOf(product);
    if (index !== -1) {
      cart.splice(index, 1);
      updateCartDisplay();
    }
  }

// Add event listener to the "Shop Now" button
const shopNowButton = document.querySelector('.shop-now');
shopNowButton.addEventListener('click', () => {
  // Implement the "Shop Now" functionality here
  console.log('Redirecting to the products page...');
});

document.addEventListener('DOMContentLoaded', function() {
    const welcomeSection = document.querySelector('.welcome');
    const welcomeContent = document.querySelectorAll('.welcome-content > *');
  
    function animateOnScroll() {
      const sectionTop = welcomeSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight * 0.8) {
        welcomeContent.forEach(element => {
          element.classList.add('animate__animated');
        });
      }
    }
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger the animation on page load
  });

  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-sine'
    });
  });
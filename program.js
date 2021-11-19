let button = document.querySelector('.main-right__button');
let cart = document.querySelector('.header-icons__cart');
let innerCart = document.querySelector('.inner-icons__cart');
let discountCart = document.querySelector('.discount-icons__cart');
let form = document.querySelector('.order-form');
function handleButtonClick() {
   form.scrollIntoView({block: "center", behavior: "smooth"});
}
button.addEventListener('click', handleButtonClick);
cart.addEventListener('click', handleButtonClick);
innerCart.addEventListener('click', handleButtonClick);
discountCart.addEventListener('click', handleButtonClick);
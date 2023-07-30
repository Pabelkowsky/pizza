let pizza = document.querySelector('#pizza');
let kebab = document.querySelector('#kebab');
let fastFood = document.querySelector('#fast-food');
let drinks = document.querySelector('#drinks');

let pizzaMenu = document.querySelector('.pizza-menu');
let kebabMenu = document.querySelector('.kebab-menu');
let fastFoodMenu = document.querySelector('.fast-food-menu');
let drinksMenu = document.querySelector('.drinks-menu');

pizza.addEventListener('click', () => {
  pizzaMenu.style.display = 'block';
  kebabMenu.style.display = 'none';
  fastFoodMenu.style.display = 'none';
  drinksMenu.style.display = 'none';
});

kebab.addEventListener('click', () => {
  pizzaMenu.style.display = 'none';
  kebabMenu.style.display = 'block';
  fastFoodMenu.style.display = 'none';
  drinksMenu.style.display = 'none';
});

fastFood.addEventListener('click', () => {
  pizzaMenu.style.display = 'none';
  kebabMenu.style.display = 'none';
  fastFoodMenu.style.display = 'block';
  drinksMenu.style.display = 'none';
});

drinks.addEventListener('click', () => {
  pizzaMenu.style.display = 'none';
  kebabMenu.style.display = 'none';
  fastFoodMenu.style.display = 'none';
  drinksMenu.style.display = 'block';
});











let burger = document.querySelector('.burger');
let navbar = document.querySelector('.nav');
let clickCount = 0

burger.addEventListener('click', function() {
  let computedStyle = window.getComputedStyle(navbar);
  let display = computedStyle.getPropertyValue('display');

  if (display === 'none') {
    navbar.style.display = 'flex';
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-100%)';

    setTimeout(function() {
      navbar.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease';
      navbar.style.opacity = '1';
      navbar.style.transform = 'translateY(0)';
    }, 10);
  } else {
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-100%)';

    setTimeout(function() {
      navbar.style.transition = 'none';
      navbar.style.display = 'none';
    }, 300);
  }
  clickCount++
    let rotation = clickCount % 2 === 0 ? 0 : -90
    burger.style.transition = 'transform 0.5s'
    burger.style.transform = `rotate(${rotation}deg)`
});


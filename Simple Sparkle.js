// function addedToCart() {
 
// }
document.querySelectorAll('.whale').forEach((cartButton) => {
  cartButton.addEventListener('click', () => {
    console.log("hello");
  // if (cartButton.innerText === 'ADD TO CART') {
  //   cartButton.innerText = 'ADDED';
  //   cartButton.classList.add('cooked-whale');
  // } else {
  //   cartButton.innerText = 'ADD TO CART';
  //   cartButton.classList.remove('cooked-whale');
  // }
  });
});

console.log('hello world');
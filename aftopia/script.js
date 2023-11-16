const button = document.querySelector(".header__login");
button.addEventListener("click", () => {
  button.classList.toggle("active");
})
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// ==========================================================


// function firstToUpperCase(str)
// {
// let arr=str.split("")
// let i=0
// while(i != arr.length)
// {
//   arr[0]=arr[0].toUpperCase()
//   if(arr[i-1] == " "){
//     arr[i]=arr[i].toUpperCase()
//   }
// i++
// }
// return arr.join("")
// }

// let str = "here is your string"
// console.log("str before func: ", str)
// str = firstToUpperCase(str)
// console.log("str after func: ", str)


// ==========================================================

// ==========================================================
window.addEventListener("scroll", ()=>{
  console.log(window.pageYOffset + 'px');
})
// в мене ідея зробити тут щось типу if(window.pageYOffset > 600) {почати анімацію topcreators__card_anim }

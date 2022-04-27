let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


document.getElementById('cartButton').addEventListener('click' , function(){

  if(document.getElementById('hide').style.display == 'none'){
    document.getElementById('hide').style.display = 'block';
  } else if (document.getElementById('hide').style.display == 'block'){
    document.getElementById('hide').style.display = 'none';
  }
});

document.getElementById('heartButton').addEventListener('click' , function(){

  if(document.getElementById('hide2').style.display == 'none'){
    document.getElementById('hide2').style.display = 'block';
  } else if (document.getElementById('hide2').style.display == 'block'){
    document.getElementById('hide2').style.display = 'none';
  }
});

// function closeCart() {
//   document.getElementById("hide").style.visibility = "none";
//   document.getElementById("hide").style.display = "none";
// }

// function openCart() {
//   document.getElementById("hide").style.visibility = "visible";
//   document.getElementById("hide").style.display = "";
// }



function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;


function openCart(){

}

let btn = document.querySelectorAll(".clk");

btn[0].addEventListener("click",()=>{
  let img = btn[0].parentElement.firstElementChild.nextElementSibling;
  let price = btn[0].previousElementSibling;
  let food_name = btn[0].parentElement.firstElementChild.nextElementSibling.nextElementSibling;
  
  let item = document.createElement("li").innerHTML=img+food_name+price;
  let cart = document.getElementById("buyItems").appendChild(item)
})
















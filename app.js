//NAV ANIMATION
const nav = document.querySelector(".nav");
const hero = document.querySelector(".feature");
var navposition = nav.getBoundingClientRect().bottom;
var heroposition = hero.getBoundingClientRect().top;
console.log(heroposition);
console.log(navposition);

/*window.addEventListener('scroll' , function(e){
	if (navposition > heroposition) {
	nav.classList.add("box-shadow");
    }else{
	nav.classList.remove("box-shadow");
    };

});*/





//HUMBERGER EFFECT
const menu = document.querySelector(".menu__btn");
const menuitem = document.querySelector("ul");

menu.addEventListener("click" , function(){
	menu.classList.toggle("active");
	menuitem.classList.toggle("is-active");
	nav.classList.toggle("navactive");
})

//QUESTION EFFECT

const arrow = document.querySelectorAll(".fas");
const para = document.querySelectorAll(".question__p");
const question = document.querySelectorAll(".question");

	arrow[0].addEventListener("click" , function(){
	    para[0].classList.toggle("question__p__active");
	    question[0].classList.toggle("question__active");
	    arrow[0].classList.toggle("arrow__active");
    });


//NAV ANIMATION COLOR



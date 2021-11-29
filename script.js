const navtoggle = document.querySelector('.nav__toggle');
const navmenu = document.querySelector('.nav__menu');

navtoggle.addEventListener('click',()=>{
	navmenu.classList.toggle('active')
})
const navlinks = document.querySelectorAll('.nav__link');
navlinks.forEach(n => n.addEventListener('click',()=>{
	navmenu.classList.remove('active')
}));
const slider = document.querySelector('.slider').children;
const slide = document.querySelector('slide');
let index = 0;

function nextSlide(){
	if(index == slider.length - 1){
		index == 0;
	}
	else{
		index++;
	}
	changeSlide();
}
function changeSlide(){
	for(i=0; i<slider.length; i++){
		slider[i].classList.remove('active');
	}
	slider[index].classList.add('active')
}
let autoplay = setInterval(nextSlide,5000);
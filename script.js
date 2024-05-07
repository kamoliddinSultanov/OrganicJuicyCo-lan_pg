const menuIcon = document.querySelector('.menu-icon'),
	  header = document.querySelector('header');


menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('menu-icon-active');
	header.classList.toggle('header-mobile');
});


//slider arrows
const sliderArrows = document.querySelector('.slider-arrows'),
      slidesArrows = sliderArrows.querySelectorAll('.slider-arrow_item'),
      prev = sliderArrows.querySelector('.slider-arrows_arrow-left'),
      next = sliderArrows.querySelector('.slider-arrows_arrow-right');



let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));

function showSlideArrows(n) {
	// console.log(n);
	slideIndex = slideIndex + n; //slideIndex += n; <--- In a short
	
	if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
	if(slideIndex >= slidesArrows.length) slideIndex = 0;

	console.log(slideIndex);

	slidesArrows.forEach(item => item.style.display = 'none');
	slidesArrows[slideIndex].style.display = 'block';
}

showSlideArrows(0);


// slider dots
const sliderDots = document.querySelector('.slider-dots'),
	slidesDots = sliderDots.querySelectorAll('.slider-dots_item'),
	wrapperDots = sliderDots.querySelector('.slider-dots_nav');
console.log(slidesDots);


const dots = [];

for (let i=0; i<slidesDots.length; i++){
	console.log(i);
	const dot = document.createElement('button');
	console.log(dot);

	dot.dataset.slideTo = i;

	dot.classList.add('slider-dots_nav-item');
	if(i==0) dot.classList.add('slider-dots_nav-item-active');

	if(i!=0) slidesDots[i].style.display = 'none';

	dot.addEventListener('click', showSlideDots);

	wrapperDots.append(dot);
	dots.push(dot);
}

function showSlideDots(e) {
	const slideTo = e.target.dataset.slideTo;

	slidesDots.forEach(item => item.style.display = 'none');
	slidesDots[slideTo].style.display = 'block';

	dots.forEach(dot => dot.classList.remove('slider-dots_nav-item-active'));
	e.target.classList.add('slider-dots_nav-item-active');
}
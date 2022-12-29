// TESTIMONIAL SLIDER

const testimonials = [
	{
		title: 'Tenz, Sentinels',
		text: "Valorant is a great game. It's a lot of fun to play and it's very competitive. I think it's very well balanced and it's a lot of fun to play.",
		image: 'assets/tenz.png',
		alt: 'Player Tenz from the Sentinels team',
	},
	{
		title: 'Asuna, 100 Thieves',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'assets/asuna.jpg',
		alt: 'Player Asuna from the 100 Thieves team',
	},
	{
		title: 'Yay, Cloud 9',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
		image: 'assets/yay.png',
		alt: 'Player Yay from the Cloud 9 team',
	},
];

let i = 0;

let j = testimonials.length;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const imageContainer = document.querySelector('.testimonials__card__image img');
const nameContainer = document.querySelector('.testimonials__name');
const textContainer = document.querySelector('.testimonials__text');

const updateTestimonial = () => {
	const test = testimonials[i];
	imageContainer.src = test.image;
	imageContainer.alt = test.alt;
	nameContainer.innerHTML = test.title;
	textContainer.innerHTML = test.text;
};

prev.addEventListener('click', () => {
	i = (j + i + 1) % j;
	updateTestimonial();
});

next.addEventListener('click', () => {
	i = (j + i - 1) % j;
	updateTestimonial();
});

window.addEventListener('DOMContentLoaded', () => {
	updateTestimonial();
});

// MUSIC BUTTON

const musicBtn = document.getElementById('music_btn');
const musicAudio = document.getElementById('music');

musicBtn.addEventListener('click', () => {
	if (musicAudio.paused) {
		musicAudio.play();
		musicBtn.classList.remove('fa-play');
		musicBtn.classList.add('fa-pause');
	} else {
		musicAudio.pause();
		musicBtn.classList.remove('fa-pause');
		musicBtn.classList.add('fa-play');
	}
});

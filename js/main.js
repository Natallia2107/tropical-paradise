const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	navBtnBars.classList.remove('black-bars-color')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = `${year} `
}

const logHeartMessage = () => {
	console.log('Odpal sobie to w konsoli! NIE CZYTAJ W KODZIE!!!!!!!')
	console.log(
		'Natusia, w funkcji handleCurrentYear wyświetla się rok bazując na ustawionym czasie użytkownika w systemie'
	)
	console.log('Czyli, że jak ktoś będzie miał 2099 to wyświetli się 2099')
	console.log('Więc trzeba z serwerka zassać, żeby nie można było zmieniać')
	console.log('ale dużo konsol logów')
	console.log('jestem mega z Ciebie dumny!')
	console.log('i kocham Cię najmocniej na świecie!')
	console.log('%c❤️', 'font-size: 116px')
}

logHeartMessage()
handleCurrentYear()
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)

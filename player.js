const slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0
let slideInterval = setInterval(nextSlide, 100)

function nextSlide() {
	slides[currentSlide].className = 'slide'
	currentSlide = (currentSlide+1)%slides.length
	slides[currentSlide].className = 'slide showing'
}

let playing = true
const pauseButton = document.getElementById('pause')

const pauseSlideshow = () => {
	pauseButton.innerHTML = 'Relancer les cartes'
	playing = false
	clearInterval(slideInterval)
}

const playSlideshow = () => {
	pauseButton.innerHTML = 'Tirer un Gosunet'
	playing = true
	slideInterval = setInterval(nextSlide, 100)
}

pauseButton.onclick = function() {
	playing ? pauseSlideshow() : playSlideshow()
}

const music = new Audio('contact.mp3')
music.play()
music.loop =true

const musicControl = document.getElementById('musicControl')
let musicOn = true
musicControl.onclick = function() {
    if (musicOn) {
        music.pause()
        musicOn = false
    } else {
        music.play()
        musicOn = true
    }
}
// music.pause()
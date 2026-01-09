// when scroll reaches end of hero minus x, toggle the navbar animation
const main = () => {
    addEventNavbarScroll()
}

window.addEventListener("load", main)


const addEventNavbarScroll = () => {
    
    // get the navbar
    const navbar = document.querySelector("header > .navbar")
    // get the hero
    const hero = document.querySelector("header > .hero")
    // get the hero y coordinate of bottom border

    // if there's a scroll, and the y coordinate of the hero's
    // bottom border is less than the actual position of where the 
    // viewport is at right now, activate the animation

    window.addEventListener("scroll", (event) => {
        // check if y scroll is > or < than hero - x 
        const heroCoordinates = hero.getBoundingClientRect()
        console.log(heroCoordinates.bottom)
        if (heroCoordinates.bottom < 150) {
            // console.log("activate animation")
            navbar.classList.add("navbar-animate")
        }
        else {
            // navbar.classList.remove("navbar-animate")

            // console.log("deactivate animation")
        }
    })
}

document.querySelector(".mobileNav").addEventListener("click", () => { //Added Event Listener to the nav icon
    document.querySelector(".navMenuContainer").style.display = "flex" //Onclick toggles nav menu to be visible
    document.querySelector(".navMenuContainer").style.right = "-99vw" //Nav menu right position changes to -99vw
    setTimeout(() => {
        document.querySelector(".navMenuContainer").style.right = "0" //After 1s navMenuContainer right position = 0, previous value was -99vw, changing to 0 will cause an animation
    }, 1)
    setTimeout(() => {
        document.querySelector(".mobileNav").style.display = "hidden" //After 0.6s nav icon disappears
    }, 600)
})

//This function does everythin in the previous function but in reverse
document.querySelector(".closeNav").addEventListener("click", () => {
    document.querySelector(".navMenuContainer").style.right = "-99vw"
    setTimeout(() => {
        document.querySelector(".navMenuContainer").style.display = "none"
        document.querySelector(".mobileNav").style.display = "flex"
    }, 400)
})
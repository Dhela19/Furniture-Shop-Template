document.querySelector(".closeNav").addEventListener("click", () => {
    document.querySelector(".navMenuContainer").style.right = "-99vw"
    setTimeout(() => {
        document.querySelector(".navMenuContainer").style.display = "none"
        document.querySelector(".mobileNav").style.display="flex"
    }, 900)
})
document.querySelector(".mobileNav").addEventListener("click", () => {
    document.querySelector(".navMenuContainer").style.display = "flex"
    document.querySelector(".navMenuContainer").style.right = "-99vw"
    setTimeout(() => {
        document.querySelector(".navMenuContainer").style.right = "0"
        // document.querySelector(".mobileNav").style.display="none"
    }, 1)
    setTimeout(() => {
        document.querySelector(".mobileNav").style.display="none"
    }, 1100)
})
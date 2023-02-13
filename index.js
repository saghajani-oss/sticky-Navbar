const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", ()=> {
    // 50 is the margin for text in bottom-container
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("active")
    } else {
        navbarEl.classList.remove("active")
    }
})
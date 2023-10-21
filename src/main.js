const navBtn = document.querySelector("#menu")
const menuBar = document.querySelector('[role="menubar"]')

navBtn.addEventListener('click', () => {
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'))
    navBtn.setAttribute('aria-expanded', !isExpanded)
     setTimeout(() => {
       menuBar.classList.toggle("hidden");
       menuBar.classList.toggle("flex");
     }, 500);
})



// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

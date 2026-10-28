let body = document.body;
let button = document.getElementById("themeToggle");
let heading = document.getElementById("heading");

// load the saved themed
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark"){
body.classList.add("dark")
}
// update heading tag and button
function updateTheme(){
    const isDark = body.classList.contains("dark")
  heading.textContent = isDark
   ?"dark mode"
    :"light mode"

    button.textContent = isDark
    ?"light mode"
    :"dark mode"
}

updateTheme()
// toggle the theme on click
button.addEventListener("click", function(){
    body.classList.toggle("dark")

    const theme = body.classList.contains("dark")
    ?"dark"
    :"light"

    localStorage.setItem("theme", theme)
    updateTheme()
})
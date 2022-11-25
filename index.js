
const generateBtn = document.getElementById("generate-color")

generateBtn.addEventListener("click", function () {
    generateBtn.style.display = "none";
    document.getElementById("load-bar").style.display = "block";
    generateColorScheme()
})


function generateColorScheme() {
    let colorVal = document.getElementById("color").value.slice(1)
    let modeValue = document.getElementById("mode").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorVal}&mode=${modeValue}`)
        .then(res => res.json())
        .then(data => {

            for (let i = 0; i < 5; i++) {
                document.getElementsByClassName("color-flex")[i].style.backgroundColor =
                    data.colors[i].hex.value
                document.getElementsByClassName("color-name")[i].textContent =
                    data.colors[i].hex.value
            }
            generateBtn.style.display = "block";
            document.getElementById("load-bar").style.display = "none";
        })
}
generateColorScheme()

for (let i = 0; i < 5; i++) {
    let colorName = document.getElementsByClassName("color-name")
    let copyIcon = document.getElementsByClassName("color-flex");
    colorName[i].addEventListener("click", function () {
        navigator.clipboard.writeText(colorName[i].textContent)
        copyIcon[i].innerHTML = `
            <span class="copy display">Copied!</span>
            `
        setTimeout(function () {
            copyIcon[i].innerHTML = ""
        }, 500)


    })
}


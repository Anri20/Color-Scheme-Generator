let colors = ["#808080", "#9A9898", "#B4B1B1", "#CECACA", "#E7E4E4"]

const form = document.querySelector("form")

getScheme()

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const formData = new FormData(form)
    const dataObject = Object.fromEntries(formData.entries())

    // console.log(dataObject)

    getScheme(dataObject.colorPicker.slice(1), dataObject.colorMode)
})

function getScheme(hex = "ffffff", mode = "monochrome") {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            colors = data.colors.map(color => color.hex.value)
            const scheme = document.querySelector("section.scheme")
            const colorName = document.querySelector("section.color-name")

            const colorScheme = colors.map(color => {
                return `<div id="${color}" class="color"></div>`
            }).join("")

            scheme.innerHTML = colorScheme

            colors.map(color => {
                document.getElementById(`${color}`).style.backgroundColor = color
            })

            const colorNames = colors.map(color => {
                return `<div class="c-names">${color}</div>`
            }).join("")

            colorName.innerHTML = colorNames
        })
}

const toggle = document.getElementById("toggleSwitch")

toggle.addEventListener("change", (e) => {
    const root = document.documentElement

    if (e.target.checked) {
        // Dark Mode
        console.log("checked")
        root.style.setProperty("--bg-color", "#1F2937")
        root.style.setProperty("--color", "#D5D4D8")
        root.style.setProperty("--btn-bg", "#3D4B60")
        root.style.setProperty("--btn-color", "#FFFFFF")
        root.style.setProperty("--border", "none")

    } else {
        // Light Mode
        console.log("unchecked")
        root.style.setProperty("--bg-color", "##FFFFFF")
        root.style.setProperty("--color", "#000000")
        root.style.setProperty("--btn-bg", "#FFFFFF")
        root.style.setProperty("--btn-color", "#000000")
        root.style.setProperty("--border", "1px solid #D1D5DB")
    }
})
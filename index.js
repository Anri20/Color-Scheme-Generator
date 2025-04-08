const colors = ["red", "green", "blue", "yellow", "black"]

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
    return `<div id="${color}" class="c-names">#${color}</div>`
}).join("")

colorName.innerHTML = colorNames

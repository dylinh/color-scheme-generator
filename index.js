const formEl = document.getElementById("color-form")
const colorContainerEl = document.getElementById("color-container")
const blockOne = document.getElementById("color-one")
const blockTwo = document.getElementById("color-two")
const blockThree = document.getElementById("color-three")
const blockFour = document.getElementById("color-four")
const blockFive = document.getElementById("color-five")
const labelOne = document.getElementById("label-one")
const labelTwo = document.getElementById("label-two")
const labelThree = document.getElementById("label-three")
const labelFour = document.getElementById("label-four")
const labelFive = document.getElementById("label-five")

function copy(){
    
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const color = document.getElementById("color").value
    const theme = document.getElementById("theme").value

    const colorSubstring = color.substring(1)

    async function getColors(){
        const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorSubstring}&mode=${theme}&count=5`)
        const data = await response.json()
        console.log(data.colors[0].hex)

        blockOne.style.backgroundColor = data.colors[0].hex.value
        blockTwo.style.backgroundColor = data.colors[1].hex.value
        blockThree.style.backgroundColor = data.colors[2].hex.value
        blockFour.style.backgroundColor = data.colors[3].hex.value
        blockFive.style.backgroundColor = data.colors[4].hex.value

        labelOne.textContent = data.colors[0].hex.value
        labelTwo.textContent = data.colors[1].hex.value
        labelThree.textContent = data.colors[2].hex.value
        labelFour.textContent = data.colors[3].hex.value
        labelFive.textContent = data.colors[4].hex.value


    }

    getColors()

})
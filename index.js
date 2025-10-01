// Get the information from the two inputs
// Use the information from the two inputs and fetch the API


let formEl = document.getElementById("color-form")
let colorContainerEl = document.getElementById("color-container")


formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const color = document.getElementById("color").value
    const theme = document.getElementById("theme").value

    const colorSubstring = color.substring(1)

    async function getColors(){
        const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorSubstring}&mode=${theme}&count=5`)
        const data = await response.json()
        console.log(data.colors)
    }

    function getColorElements(colorsObj){
        let palette = colorsObj.map((color) => {
            
        })
    }

    getColors()

    formEl.reset()
})
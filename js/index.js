import { config } from './config.js'

const btnLength = document.querySelector('#btn-length')
const textLabelValue = document.querySelector('#lab-value')
const selectFrom = document.querySelector('#convert-from')
const selectTo = document.querySelector('#convert-to')
const convertForm = document.querySelector("#convert-form")
const convertValue = document.querySelector("#convert-value")
const result = document.querySelector("#result")
const buttonsTab = document.querySelectorAll('.btn-tab')
const resetButton = document.querySelector('#btn-reset')
let convertType = "length"

function createSelectOption(units) {
    selectFrom.innerHTML = ''
    selectTo.innerHTML = ''

    units.forEach(un => {
        const option = document.createElement('option')
        option.value = un
        option.text = un

        selectFrom.appendChild(option)
        selectTo.appendChild(option.cloneNode(true))
    })
}

buttonsTab.forEach(btn => {
    btn.addEventListener("click", () => {
        buttonsTab.forEach(b => b.classList.remove("active"))

        btn.classList.add("active")
        convertType = btn.dataset.type
        textLabelValue.textContent = `Enter the ${convertType} to convert`

        createSelectOption(config[convertType].units)
    })
})

convertForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const value = parseFloat(convertValue.value)

    result.textContent = config[convertType].convert(value, selectFrom.value, selectTo.value)
})

resetButton.addEventListener("click", () => {
    convertType = "length"
    buttonsTab.forEach(b => b.classList.remove("active"))
    btnLength.classList.add("active")
    textLabelValue.textContent = `Enter the ${convertType} to convert`
    createSelectOption(config[convertType].units)
    convertValue.value = ""
    result.textContent = "--"
})

createSelectOption(config["length"].units)
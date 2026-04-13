const lengthUnits = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34
}

const weightUnits = {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592
}

const toCelsius = {
    Fahrenheit: v => (v - 32) * 5/9,
    Kelvin: v => v - 273.15,
    Celsius: v => v
}

const fromCelsius = {
    Fahrenheit: v => v * 9/5 + 32,
    Kelvin: v => v + 273.15,
    Celsius: v => v
}

export function convertLength(value, from, to) {
    return (value * lengthUnits[from] / lengthUnits[to])
}
export function convertWeight(value, from, to) {
    return (value * weightUnits[from] / weightUnits[to])
}

export function convertTemperature(value, from, to) {
    if (from === to) return value
    const celsius = toCelsius[from](value)
    return fromCelsius[to](celsius)
}
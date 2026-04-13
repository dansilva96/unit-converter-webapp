import { convertLength, convertWeight, convertTemperature } from './converters.js'

export const config = {
    length: {
        units: ['millimeter', 'centimeter', 'meter', 'kilometer', 'inch', 'foot', 'yard', 'mile'],
        convert: convertLength
    },
    weight: {
        units: ['milligram', 'gram', 'kilogram', 'ounce', 'pound'],
        convert: convertWeight
    },
    temperature: {
        units: ['Celsius', 'Fahrenheit', 'Kelvin'],
        convert: convertTemperature
    }
}
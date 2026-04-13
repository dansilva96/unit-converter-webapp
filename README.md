# Unit Converter WebApp

A simple web-based unit converter built with HTML, CSS, and JavaScript.  
This project allows users to convert between different units of length, weight, and temperature.

## Inspiration

This project was based on the roadmap.sh challenge:
https://roadmap.sh/projects/unit-converter

## Features

- Convert **Length** units (meter, kilometer, inch, etc.)
- Convert **Weight** units (gram, kilogram, pound, etc.)
- Convert **Temperature** (Celsius, Fahrenheit, Kelvin)
- Dynamic UI with tabs
- Instant result display
- Reset functionality

## How It Works

- Length and weight conversions are based on proportional factors.
- Temperature conversion uses formulas and a base scale (Celsius).

## Project Structure

unit-converter-webapp/
```
├── index.html         # Estrutura principal e acessibilidade
├── styles.css         # Design responsivo e variáveis CSS
└── js/
    ├── index.js       # Orquestração do DOM e eventos
    ├── config.js      # Mapas de unidades e constantes
    └── converters.js  # Motores de cálculo (lógica pura)
```

## How to Run

This project uses ES Modules, so you must run it with a local server.

### Option 1 (Recommended)
Use **Live Server** in VS Code.

### Option 2
```bash
npx serve
```

Then open the URL shown in the terminal (usually):
http://localhost:3000

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)

## Author

Daniel Silva

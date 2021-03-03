// colors from tailwind CSS
const tailwindColors = require('tailwindcss/colors')

const jsColorToCSSVariable = require('../utils/jsColorsToCSSVariables')

const createColorFile = () => {
  const colors = jsColorToCSSVariable(tailwindColors)

  const colorsFilePath = './css/colors.css'
  const cssString = `:root{
    ${colors.join('\n\t')}
  }`

  fs.writeFile(colorsFilePath, cssString, function (err) {
    if (err) throw err
    console.log('Saved!')
  })
}

module.exports = { createColorFile }

// wee use the tailwind tool to flatten the colors
const flatten = require('tailwindcss/lib/util/flattenColorPalette.js').default

const jsColorToCSSVariable = (colors) => {
  const flattenColors = flatten(colors)

  return Object.keys(flattenColors).map((value) => {
    return `--${value}: ${flattenColors[value]};`
  })
}

module.exports = jsColorToCSSVariable

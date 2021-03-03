var fs = require("fs")

// colors from tailwind CSS
const tailwindColors = require("tailwindcss/colors")
const chalk = require("chalk")

const jsColorToCSSVariable = require("../utils/jsColorsToCSSVariables")

const createColorFile = () => {
  const colors = jsColorToCSSVariable(tailwindColors)

  const colorsFilePath = "./css/_colors.css"
  const cssString = `:root{\n\t${colors.join("\n\t")}\n}`

  fs.writeFile(colorsFilePath, cssString, function (err) {
    if (err) throw err
    console.log(chalk.green(`🎉 G O O D    N E W S 🎉\n`))
    console.log(chalk.green(`🎉 Colors saved in ${colorsFilePath}`))
    console.log(
      chalk.green(`🎉 ${Object.keys(colors).length} variable generated 😊\n\n`)
    )
  })
}

module.exports = { createColorFile }

var fs = require("fs")
const chalk = require("chalk")

const sass = require("sass")
const autoprefixer = require("autoprefixer")
const postcss = require("postcss")

module.exports = () => {
  var result = sass.renderSync({
    file: "css/main.scss",
    outputStyle: "compressed",
  })
  postcss([autoprefixer])
    .process(result.css.toString(), { from: undefined })
    .then((result) => {
      result.warnings().forEach((warn) => {
        console.warn(warn.toString())
      })

      const outputPath = "_dist/carrot-css.min.css"
      fs.writeFile(outputPath, result.css, function (err) {
        if (err) throw err
        console.log(chalk.green(`🎉 G O O D    N E W S 🎉\n`))
        console.log(chalk.green(`🎉 CSS built under ${outputPath}`))
      })
    })
}

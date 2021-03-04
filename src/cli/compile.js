var fs = require("fs")
const chalk = require("chalk")
var filesize = require("filesize")

const sass = require("sass")
const autoprefixer = require("autoprefixer")
const postcss = require("postcss")

module.exports = (outputPath, minimize = false) => {
  var result = sass.renderSync({
    file: "css/main.scss",
    outputStyle: minimize ? "compressed" : "expanded",
  })
  postcss([autoprefixer])
    .process(result.css.toString(), { from: undefined })
    .then((result) => {
      result.warnings().forEach((warn) => {
        console.warn(warn.toString())
      })

      // const outputPath = "_dist/carrot-css.min.css"
      fs.writeFile(outputPath, result.css, function (err) {
        if (err) throw err
        console.log(chalk.green(`🎉 G O O D    N E W S 🎉\n`))
        console.log(chalk.green(`🎉 CSS built under ${outputPath}\n`))
        const stats = fs.statSync(outputPath)
        const fileSizeInKb = filesize(stats.size, { round: 0 })
        // we write the building size in a file to be displayed in the documentation
        console.log(chalk.green(`File size: ${fileSizeInKb}\n\n\n\n`))
        if (minimize) {
          fs.writeFile(
            "./docs/lib_size.json",
            `{"libSize": "${fileSizeInKb}"}`,
            () => {}
          )
        }
      })
    })
}

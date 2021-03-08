var css = require("css")
var fs = require("fs")

const cssToJs = (cssContent) => {
  console.log(css.parse(cssContent).stylesheet.rules[0].declarations)
  return css.parse(cssContent).stylesheet.rules[0].declarations
}
const jsToCss = (js) => {}

module.exports = { cssToJs, jsToCss }

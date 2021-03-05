const pluginSass = require("eleventy-plugin-sass")

const util = require("util")
const moment = require("moment")
const { fstat } = require("fs")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ["css/*.css", "css/*.scss", "css/**/*.css", "css/**/*.scss"],
    sourcemaps: true,
    outputDir: "docs/_site/css/",
  })

  eleventyConfig.addWatchTarget("./css/")
  // eleventyConfig.addWatchTarget("**.njk")
  // eleventyConfig.addWatchTarget("**.html")
  // eleventyConfig.addWatchTarget("**.md")

  eleventyConfig.addFilter("console", function (value) {
    return util.inspect(value)
  })

  return {
    dir: {
      output: "./docs/_site/",
      input: "./docs/",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["html", "njk", "md"],
  }
}

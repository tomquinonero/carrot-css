const pluginSass = require("eleventy-plugin-sass")

const util = require("util")
const moment = require("moment")
const { fstat } = require("fs")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: [
      "css/*.css",
      "css/*.scss",
      "css/**/*.css",
      "css/**/*.scss",
      "docs/css/*.scss",
      "docs/css/*.css",
    ],
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

  function sortByOrder(values) {
    let vals = [...values] // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order))
  }

  eleventyConfig.addFilter("sortByOrder", sortByOrder)

  // markdown library
  let markdownIt = require("markdown-it")
  let markdownItAnchor = require("markdown-it-anchor")
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  }

  let mdLibrary = markdownIt(options).use(markdownItAnchor, {})

  eleventyConfig.setLibrary("md", mdLibrary)

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

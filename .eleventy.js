const pluginSass = require("eleventy-plugin-sass")

const util = require("util")
const moment = require("moment")

module.exports = function (eleventyConfig) {
  // design images
  // eleventyConfig.addPassthroughCopy({ public: 'public' })
  // eleventyConfig.addPassthroughCopy('_dist')

  // eleventyConfig.addCollection('sortedGallery', function (collectionApi) {
  //   return collectionApi.getFilteredByTag('gallery').sort(function (a, b) {
  //     return b.data.date - a.data.date
  //   })
  // })

  eleventyConfig.addPlugin(pluginSass, {
    watch: ["css/*.css", "css/*.scss", "css/**/*.css", "css/**/*.scss"],
    sourcemaps: true,
    outputDir: "docs/_site/css/",
  })

  eleventyConfig.addWatchTarget("css")
  eleventyConfig.addWatchTarget("./docs/")
  eleventyConfig.addWatchTarget("docs/index.html")
  eleventyConfig.addWatchTarget("docs/test.njk")

  // eleventyConfig.addFilter('console', function (value) {
  //   return util.inspect(value)
  // })

  // eleventyConfig.addFilter('getPageBySlug', function (collection, slug) {
  //   let item = collection.find(function (item) {
  //     return item.data.page.fileSlug == slug
  //   })
  //   return item ? item.data : null
  // })

  // eleventyConfig.addFilter('formatDate', function (date) {
  //   return moment(date).format('DD.MM.YYYY')
  // })

  return {
    dir: {
      output: "./docs/_site/",
      input: "./docs/",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["html", "njk"],
  }
}

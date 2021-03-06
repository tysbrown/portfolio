const { DateTime } = require("luxon");
const util = require('util')
const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const urlFor = require('./utils/imageUrl');

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('croppedUrlFor', (image,width,height) => {
    return urlFor(image)
      .width(width)
      .height(height)
      .auto('format')
  })

  eleventyConfig.addShortcode('imageUrlFor', (image, width = "400") => {
    return urlFor(image)
      .width(width)
      .auto('format')
  })

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("node_modules/bootstrap/scss");
  eleventyConfig.addPassthroughCopy({
    "node_modules/aos/dist/aos.css": "assets/aos.css",
    "node_modules/aos/dist/aos.js": "assets/aos.js"
  });

  // https://www.11ty.io/docs/quicktips/inline-css/
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("debug", function(value) {
    return util.inspect(value, {compact: false})
   });

   eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toDateString()
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

  eleventyConfig.addFilter("markdownify", function(value) {
    const md = new markdownIt(options)
    return md.render(value)
  })
  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid",
      "png"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}

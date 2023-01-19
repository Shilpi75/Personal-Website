const mediumToMarkdown = require("medium-to-markdown")

// Enter url here
mediumToMarkdown
  .convertFromUrl(
    "https://medium.com/the-sphere/how-you-might-be-biased-at-your-workplace-without-realizing-14e6128ea2c1"
  )
  .then(function (markdown) {
    console.log(markdown) //=> Markdown content of medium post
  })

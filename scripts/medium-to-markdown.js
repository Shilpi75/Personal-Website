const mediumToMarkdown = require("medium-to-markdown")

// Enter url here
mediumToMarkdown
  .convertFromUrl(
    "https://medium.com/the-sphere/google-women-techmakers-scholarship-program-19d807e8e480"
  )
  .then(function (markdown) {
    console.log(markdown) //=> Markdown content of medium post
  })

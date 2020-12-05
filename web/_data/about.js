const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePage (page) {
  return {
    ...page,
    body: BlocksToMarkdown(page.body, { serializers, ...client.config() }),
    sidebar: BlocksToMarkdown(page.sidebar, { serializers, ...client.config() })
  }
}

async function getPage () {
  const filter = groq`*[_type == "about"]`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const genPage = docs.map(generatePage)
  const reducedPage = overlayDrafts(hasToken, genPage)
  return reducedPage[0]
}

module.exports = getPage

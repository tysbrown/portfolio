const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateProject (project) {
  return {
    ...project,
    body: BlocksToMarkdown(project.body, { serializers, ...client.config() })
  }
}

async function getProjects () {
  const filter = groq`*[_type == "portfolioProject"] | order(_createdAt desc) {
  ...,
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const genProject = docs.map(generateProject)
  const reducedProject = overlayDrafts(hasToken, genProject)
  return reducedProject
}

module.exports = getProjects

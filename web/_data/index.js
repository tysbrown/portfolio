const groq = require('groq')
const client = require('../utils/sanityClient')

module.exports =  async function() {
  const query = await client.fetch(groq`
    *[_type == "homepage"]{
      ...,
      selectedWorks[]->{
        name,
        slug,
        image,
        stack,
        projectExcerpt
      }
    }[0]
  `);
  return query;
}

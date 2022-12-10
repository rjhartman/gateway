// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import page from './documents/page'
import logos from './documents/logos'
import companyInfo from './documents/companyInfo'
import navigation from './documents/navigation'

// objects
import seo from './objects/seo'
import navItem from './objects/navItem'
import link from './objects/link'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    page,
    navigation,
    logos,
    companyInfo,

    // objects
    seo,
    navItem,
    link,
  ]),
})

import { createClient as createCodegenClient } from 'sanity-codegen'
import { createClient as createDefaultClient } from 'next-sanity'
import { Documents } from './schema'

// This type parameter enables the client to be aware of your generated types
//                           👇👇👇
export default createCodegenClient<Documents>({
  // Note: these are useful to pull from environment variables
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: 'v2021-10-21',

  // (required) the fetch implementation to use
  fetch,

  // (optional) only required if your dataset is private or if you want to use preview mode
  //
  // (optional) enables the usage of `apicdn.sanity.io`. this is recommended
  // if you plan on using this in browsers. don't use this with preview mode
  // see here: https://www.sanity.io/docs/api-cdn
  // useCdn: true,
})

export const defaultSanityClient = createDefaultClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: 'v2021-10-21',
})

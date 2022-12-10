import AssetSource from 'part:sanity-plugin-media-library/asset-source'

export default {
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      options: {
        sources: [AssetSource],
      },
    },
  ],
}

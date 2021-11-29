import { decodeAssetId } from '../../lib/sanity/decode-asset-id'

const seoFields = [
  {
    type: 'string',
    name: 'title',
    title: 'Title',
    description: 'SEO title of the page',
    validation: (Rule) => Rule.required(),
  },
  {
    type: 'boolean',
    name: 'addTitleSuffix',
    title: "Add ' - PROJECT_NAME' to the title",
  },
  {
    type: 'text',
    name: 'description',
    rows: 5,
    title: 'og:description',
  },
  {
    type: 'image',
    name: 'image',
    title: 'og:image (1200 x 630)',
    validation: (Rule) =>
      Rule.custom((image) => {
        if (!image) return true
        const { dimensions } = decodeAssetId(image.asset._ref)
        return (
          (dimensions.width === 1200 && dimensions.height === 630) ||
          'Image must be 1200 x 630'
        )
      }),
  },
  {
    type: 'boolean',
    name: 'noindex',
    title: 'No index',
    options: { layout: 'checkbox' },
  },
  {
    type: 'boolean',
    name: 'nofollow',
    title: 'No follow',
    options: { layout: 'checkbox' },
  },
]

export default seoFields

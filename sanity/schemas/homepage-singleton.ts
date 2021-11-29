import Tabs from 'sanity-plugin-tabs'
import seoFields from './seo-fields'

export const homepageSingleton = {
  type: 'document',
  title: `Homepage`,
  name: `homepage-singleton`,
  preview: {
    select: {
      title: '',
    },
  },
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'fields',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'content', title: 'Content' },
        { name: 'seo', title: 'SEO' },
      ],
      fields: [
        {
          type: 'object',
          name: 'content',
          fieldset: 'content',
          inputComponent: Tabs,
          fields: [
            {
              type: 'string',
              name: 'title',
              title: 'Title',
              rows: 1,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          type: 'object',
          name: 'seo',
          fieldset: 'seo',
          inputComponent: Tabs,
          fields: seoFields,
        },
      ],
    },
  ],
}

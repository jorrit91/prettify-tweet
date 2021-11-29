// in sanity-structure.js

import S from '@sanity/desk-tool/structure-builder'
const hiddenDocTypes = ['homepage-singleton']
const filteredDocumentTypes = S.documentTypeListItems().filter(
  (item) => !hiddenDocTypes.includes(item.getId())
)

export default () =>
  S.list()
    .title('Content')
    .items(
      [
        ...filteredDocumentTypes,
        S.listItem()
          .title('Pages / Homepage')
          .child(
            S.editor()
              .id('homepage')
              .schemaType('homepage-singleton')
              .documentId('homepage-singleton')
          ),
      ].sort((a, b) => a.spec.title.localeCompare(b.spec.title)) // sort alphabetically
    )

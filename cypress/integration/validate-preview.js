/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-wait-until" />

context('Validate preview', () => {
  it('should show the preview for 10 random tweets', () => {
    cy.request({
      method: 'POST',
      url: 'https://prettify-tweet-api-o79jc.ondigitalocean.app/graphql',
      body: {
        operationName: 'getRandomTweetIds',
        query: `
          query getRandomTweetIds {
            getRandomTweetIds(count: 10) {
              ids
            }
          }
        `,
      },
    }).then((result) => {
      if (
        result.body &&
        result.body.data &&
        result.body.data.getRandomTweetIds
      ) {
        const ids = result.body.data.getRandomTweetIds.ids
        for (const id of ids) {
          cy.visit(`/configure/${id}`)
          cy.findByText('Save & Download')
        }
      }
    })
  })
})

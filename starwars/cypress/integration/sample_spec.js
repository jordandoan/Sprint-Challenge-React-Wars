describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('localhost:3000')
      cy.contains('Luke')
      cy.get('div.character')
        .contains("Chicken")

    })
  })
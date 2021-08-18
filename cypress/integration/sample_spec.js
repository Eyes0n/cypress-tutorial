describe('My First Test', () => {
  it('Does do much', () => {
    // Arrange - setup inital app state
    // Act - take an ation
    // Assert - make an assertion
    expect(true).to.equal(true);
  });

  it('Does not do much', () => {
    expect(true).to.not.equal(false);
  });

  it('Visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io');
  });

  it('Finds an element', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type');
  });

  it('Clicks an element', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();
  });

  it('Makes an assertion', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');
  });

  it('Gets, types and assertion', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com');
  });
});

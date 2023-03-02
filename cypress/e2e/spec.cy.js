describe('Test with backend', () => {
  beforeEach('searching images', () => {
    cy.intercept('GET', '/users*');
  });
  it('Should return a JSON Object', () => {
    cy.intercept('POST', '/users*', {
      statusCode: 201,
      body: {
        name: 'Peter Pan',
      },
    });
  });
});

export class charactersPage {

  constructor() {

  }
  verifyAppCharacters() {
    cy.title().should('eq', 'TntAssignment')
    cy.get('#people').click()
    return this;

  }
  //this function uses the enter key to search
  search(text: string) {
    cy.get('#query').type(`${text}{enter}`)
    return this;
  }

  name(text: string) {
    cy.get('h6.card-subtitle').contains(`${text}`)
    return this;
  }

  gender(text: string) {
    cy.findByText('Gender:').siblings()
    .should('contain', `${text}`)
    return this;
  }

  birthYear(text: string) {
    cy.findByText('Birth year:').siblings()
    .should('contain', `${text}`)
    return this;
  }

  eyeColor(text: string) {
    cy.findByText('Eye color:').siblings()
    .should('contain', `${text}`)
    return this;
  }

  skinColor(text: string) {
    cy.findByText('Skin color:').siblings()
    .should('contain', `${text}`)
    return this;
  }

  noResult() {
    cy.findByText('Not found.')
    cy.get('#query').clear()
    return this;
  }

  clearSearchPage() {
    cy.get('#query').clear().type(`{enter}`)
    cy.findAllByText('Gender:').next().should('not.be.visible')
    return this;
  }

}
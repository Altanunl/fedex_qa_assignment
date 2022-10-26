export class planetsPage {

  constructor() {

  }
  verifyAppPlanets() {
        cy.title().should('eq', 'TntAssignment')
        cy.get('#planets').click()
        return this;

  }
  //This function is using the click on button to search
  search(text: string) {
        cy.get('#query').type(`${text}`)
        cy.get('button').click()
        return this;
  }

  name(text: string) {
        cy.get('h6.card-subtitle').contains(`${text}`)
        return this;
  }

  population(text: string) {
        cy.findByText('Population:').siblings()
        .should('contain', `${text}`)
        return this;
  }

  climate(text: string) {
        cy.findByText('Climate:').siblings()
        .should('contain', `${text}`)
        return this;
  }

  gravity(text: string) {
        cy.findByText('Gravity:').siblings()
        .should('contain', `${text}`)
        return this;
  }

  noResult() {
      cy.findByText('Not found.')
      cy.get('#query').clear()
  }   

  verifyPlanetsOnPage(number: number) {
      cy.get('app-planet > div > div').find('h6').should('not.be.null')
      .its('length').should('eq', number)
      cy.findAllByText('Population:').next().should('not.be.null')
      cy.findAllByText('Climate:').next().should('not.be.null')
      cy.findAllByText('Gravity:').next().should('not.be.null')
      return this;
  }
}
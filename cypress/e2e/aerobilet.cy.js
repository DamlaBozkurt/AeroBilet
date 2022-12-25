describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.aerobilet.com.tr/')
    //cy.login()
    cy.findTicket()
    //cy.travelerInfo()
    cy.contactInfo()
    cy.paymentInfo()

  })
})
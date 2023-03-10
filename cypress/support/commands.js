
Cypress.Commands.add('visitSite', (visitSite) => {

  cy.visit()
  

})
Cypress.Commands.add('login',(login) => {

  cy.get('a[href="javascript:void(0)"]').eq('3').click()
  cy.get('input[class="required"]').eq('0').click().type('Damla')
  cy.get('input[name="j_password"]').click().type('123')
  cy.get('button[type="submit"]').eq('0').click()
  cy.get('i[class="fas fa-times"]').click()

})
Cypress.Commands.add('findTicket', (from, to, departureDate) => {
  cy.get('input[id="fromAirport"]').click().type('Madrid')
  cy.get('li[class="ui-menu-item"]').click()
  cy.get('input[class="setSelection required airportAutoComplete return clear_input ui-autocomplete-input"]').click().type('Adana')
  //cy.get('li[class="ui-menu-item"]').eq('1').click()
  cy.get('input[id="departureDate"]').click()
  cy.get('td[data-handler="selectDay"]').eq('1').click()
  cy.get('a[class="travelerSelect"]').click()
  cy.get('span[class="ui-icon ui-icon-triangle-1-n"]').eq('0').click()
  cy.get('button[class="btn btn-primary btn-block"]').eq('0').click()
  cy.get('button[class="button price-btn priceDetailButton"]').eq('1').click()

})

Cypress.Commands.add('travelerInfo', (gender, name, surname, birth, passNo, expDate) => {
  cy.get('input[id="adult_genderFemale_0"]').click()
  cy.get('input[id="adult_name_0"]').click().type('Damla')
  cy.get('input[id="adult_surname_0"]').click().type('Bo')
  cy.get('input[id="adult_birthdate_0"]').click().type('223344')
  cy.get('input[itype="passNo"]').eq('0').click().type('d')
  cy.get('input[class="expDate required dateTr doubleDateBoundries"]').eq('0').click().type('375')
})

Cypress.Commands.add('contactInfo', (phoneNumber, email) => {

  cy.get('div[class="selected-flag"]').eq('0').click()
  //cy.get('select').select("country-name").should('have.value', '682').should('have.value', 'Cook Islands').click({force: true})
  //cy.get('select').select('682').should('have.value', '682').eq('6').click()
  //SELECT KULLANAMADIM, NEDEN?

  cy.get('span[class="country-name"]').eq('46').click()
  cy.get('input[class="required email form-control"]').click().type('dd.mail')
  cy.get('input[type="checkbox"]').eq('2').click()
  cy.get('input[class="farePriceRadio"]').eq('1').click()
  cy.get('span[class="glyphicon glyphicon-remove-circle"]').click({force: true})
  cy.get('tr[class="coupon-head"]').click()
  cy.get('input[id="couponCode"]').click({force: true}).type('333553')
  //cy.contains("couponCode").click()
  cy.get('tr[class="withoutCoupon"]').click({force: true}).type('3')
  cy.get('input[id="insuranceRequest"]').click()
  cy.get('a[id="addCoupon"]').click()
})

Cypress.Commands.add('paymentInfo', (CardNumber, CardExp, CardSec, CardOwner) => {
  cy.get('form[id="paymentForm"]').click()
  cy.get('input[id="pan"]').click().type('3434')
  cy.get('div[id="divPayment"]').click()
  cy.get('div[class="col-xs-6 cc-select-month inputstyle"]').click()
  cy.get('span[class="field-arrow"]').eq('0').click({force: true})
  cy.get('span[class="field-value-select"]').eq('0').click({force: true})
  cy.get('div[class="clearfix"]').eq('0').click()
  cy.get('div[class="col-xs-6 cc-select-month inputstyle"]').click()
  cy.get('span[class="field-arrow"]').eq('0').click({force: true})
  cy.get('.btn').eq('3').click({force: true})
  cy.get('img[src="/images/newui/icon-down-blue.png"]').eq('0').click({force: true})
  cy.get('span[class="field-value-select"]').eq('0')
  cy.get('.btn').eq('3').click({force: true})
  cy.get('button').eq('7').debug().click({force: true})
  cy.get('select[id="cc_expire_month"]')
  cy.get('[value="02"]').click({force: true})
  cy.get('select[id="cc_expire_year"]')
  cy.get('span[class="field-value-select"]').eq('1').click({force: true})
  //cy.contains('span[class="field-arrow"]').find('button').click({force: true})
  //cy.get('span[class="field-arrow"]').eq('1').click({force: true})
  //cy.get("#dropdown").select('2022');
  //AFTER ALL THESE STEPS, ?? FINALLY FOUND OUT THE SOLUTION:
  cy.get('select[id="cc_expire_year"]').select('23').should('have.value', '23')
  cy.get('select[id="cc_expire_month"]').select('03').should('have.value', '03')
  cy.get('input[id="cv2"]').click().type(6868)
  cy.get('input[class="form-control required upperNomark cc_owner_name alphaOnly acceptComma acceptPoint"]').click().type('dd')  
  cy.get('input[id="use3dSecure"]').click()
  cy.get('input[id="agree"]').click()
  cy.get('button[type="button"]').eq('3').click()

  })
  Cypress.Commands.add('insurance', (insuranceInfo, travelerInfo) => {
    cy.get('div[class="clearfix"]').eq('1').click()
   // cy.get('a[href="/travel-insurance"]').should('have.value', 'insurance').click()
    cy.get('div[class="col-sm-2 col-xs-4 fn-5 footer-nav-item"]').click()
    cy.get('input[class="required"]').eq('0').click()
    cy.get('input[id="travelStartDate"]').click()
    cy.get('a[href="#"]').contains('31').click()
    cy.get('input[id="travelEndDate"]').click()
    cy.get('td[class=" ui-datepicker-week-end "]').eq('0').click()
    cy.get('a[class="ui-state-default"]').contains('5').click({force: true})
    cy.get('span[class="ddlabel"]').eq('0').click()
    cy.get('span[class="ddlabel"]').eq('48').click()
    cy.get('input[id="adult_name_0"]').click().type('Dams')
    cy.get('input[id="adult_surname_0"]').click().type('AA')
    cy.get('input[inputtype="birthdate"]').eq('0').click().type('33557777')
    cy.get('input[id="adult_idno_0"]').click().type('348759')
    cy.get('button[class="searchButton btn btn-primary"]').click() 
   })

   Cypress.Commands.add('alert', (priceAlert) => {
   cy.get('a[href="javascript:void(0)"]').eq('6').click()
  // cy.get('div[class="col-xs-12"]').click()
   cy.get('input[id="pa-fromAirport"]').eq('0').click({force: true}).type('Cartagena')
   cy.get('input[id="pa-toAirport"]').eq('0').click({force: true}).type('Ankara')
   cy.get('div[class="row direction"]').click()
   cy.get('span[class="ui-button-text"]').eq('2').click({force: true})
   cy.get('input[id="pa-returnDate"]').click({force: true})
   cy.get('span[class="ui-icon ui-icon-circle-triangle-e"]').click()
   cy.get('a[class="ui-state-default"]').contains('11').click()
   cy.get('a[href="javascript:void(0)"]').eq('7').click({force: true})
   cy.get('input[id="pa-email"]').click({force: true}).type('d@email')
   cy.get('input[id="subscription"]').click()
   cy.get('button[id="btnPriceAlert"]').eq('0').click()
   })


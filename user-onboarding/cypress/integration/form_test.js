describe('User Form App', () => {

  const nameInput = () => cy.get('input[name="name"]')
  const emailInput = () => cy.get('input[name="email"]')
  const passwordInput = () => cy.get('input[name="password"]')
  const submitButton = () => cy.get('button')


  describe('Inputs and Submit Buttons', () => {
    it('Navigate to http://localhost:3000', () => {
      cy.visit('http://localhost:3000')
    })

    it('Submit button is disabled', () => {
      submitButton().should('be.disabled')
    })






    describe('Submitting a new form', () => {
      it('Can navigate to http://localhost:3000', () => {
        cy.visit('http://localhost:3000')
      })

      it('Can type something in the inputs and submit', () => {
        nameInput().type('Name')
        emailInput().type('Email@mail.com')
        passwordInput().type('Password')
        submitButton().click()
      })
    })

  })
})
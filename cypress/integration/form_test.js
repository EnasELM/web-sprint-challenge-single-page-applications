describe('pizza', () => {
    beforeEach(() => {
        
        cy.visit('http://localhost:3000/');
    })

    // Getters to cut down on typing
    const textInput = () => cy.get('input[id=name-input]');
    
    const submitBtn = () => cy.get("button[id='pizza-form']");
    const specialText = () => cy.get("button[id='special-text']");

    

    it('the proper elements are showing', () => {
        textInput().should('exist');
        
       
    })
    it('the proper elements are showing', () => {
        specialText().should('exist');
        
       
    })
    it('can type in the inputs', () => {
        textInput()
            .should('have.value', '')
            .type('happy')
            .should('have.value', 'happy');
           
        })
    
    describe('Filling out the inputs and submit', () => {
     
        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })
        it('the submit button enables when both inputs are filled out', () => {
           
            textInput().type('1234');
            
            submitBtn().should('not.be.disabled');
        })
    })
})

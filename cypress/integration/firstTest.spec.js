/// <reference types="cypress" />

describe('Test with backend', () =>{
    beforeEach('login to the app', ()=>{
        cy.loginToApplication()
    })

    it('verify correct request nd response', () => {

        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('This is a title')
        cy.get('[formcontrolname="description"]').type('This is a description')
        cy.get('[formcontrolname="body"]').type('This is a body of article')
        cy.contains('Publish Article').click()
       
    
    })
})
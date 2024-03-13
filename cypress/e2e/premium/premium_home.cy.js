// <reference types="cypress" />
import locators from "../../support/locators/premium_home"

const textoHomeContainerBranco = Cypress.env('textoHomeContainer')
const textoHomeContainerVerde = 'Resultados fora da curva.'

describe('Abrir a home da consultoria Squad Premium', () => {

    beforeEach(() => {

        cy.viewport(1920,1080)
        cy.visit('https://squadpremium.com.br/')

    })

    it('Validar texto da Home', () => {

        cy.get(locators.TEXTO_BRANCO).contains(textoHomeContainerBranco).should('be.visible')
        cy.get(locators.TEXTO_VERDE).contains(textoHomeContainerVerde).should('be.visible')
        

    })

    it('Validar Links do header Desktop', () =>{

        cy.get(locators.NAV_BAR_HEADER).then(links => {
            expect(links[0]).to.contain.text('Início')
            cy.get(links[0]).should('have.attr', 'href').and('include', '/')
            
            expect(links[1]).to.contain.text('Sobre')
            expect(links[2]).to.contain.text('Serviços')
            expect(links[3]).to.contain.text('Contratar')
            expect(links[4]).to.contain.text('Carreira')
            expect(links[5]).to.contain.text('Blog')
        })

    })

})

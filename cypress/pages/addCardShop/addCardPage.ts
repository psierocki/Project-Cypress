import addCardPageSelectors from './addCardPageSelectors'

class AddCardPages {
    addCardPage() {
        cy.wait(5000)
        cy.get(addCardPageSelectors.checkLogo).should('be.visible')
    }

}

export const addCardPages = new AddCardPages();
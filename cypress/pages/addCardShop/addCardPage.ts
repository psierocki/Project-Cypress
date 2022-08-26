import addCardPageSelectors from './addCardPageSelectors';

class AddCardPages {
	addCardPage() {
		cy.visit('http://automationpractice.com')
		cy.get(addCardPageSelectors.checkLogo).should('be.visible'); //Check logo
		cy.get(addCardPageSelectors.chooseCardProduct) // check product name
			.should('be.visible')
			.and('contain.text', 'Faded Short Sleeve T-shirts');
        cy.get(addCardPageSelectors.addToCard).should('be.visible').and('contain.text', 'Add to cart').click(); // check the button is visible and the button name is correct = true

	};
    checkAddNewProduct(){
        const priceForProduct = 
        cy.get(addCardPageSelectors.contentTrueAddProduct).should('be.visible').and('contain.text', 'Product successfully added to your shopping cart');
        cy.get(addCardPageSelectors.proceedCheckout).should('contain.text', 'Proceed to checkout').and('be.visible');
        cy.get(addCardPageSelectors.continueShop).should('contain.text', 'Continue shopping').and('be.visible');

    };
};

export const addCardPages = new AddCardPages();


/// cy.get(addCardPageSelectors.moreInfoProduct).should('be.visible').and('contain.text', 'More') // check the button is visible and the button name is correct = true
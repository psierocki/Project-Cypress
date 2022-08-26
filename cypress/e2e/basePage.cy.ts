import { addCardPages } from '../pages/addCardShop/addCardPage'
import addCardPageSelectors from '../pages/addCardShop/addCardPageSelectors'

describe('Check add Card Shop', () => {
	it('pass test case', () => {
		addCardPages.addCardPage();
		addCardPages.checkAddNewProduct();
		
	})
})

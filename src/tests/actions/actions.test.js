import actions from '../../actions'
import ProductMock from '../mocks/productMock'

describe('Testing Actions', () => {
    test('Testing Add To Cart action', () => {
        const payload = ProductMock
        const expected = {
            type: 'ADD_TO_CART',
            payload: payload
        }
        expect(actions.addToCart(payload)).toEqual(expected)
    })

    test('Testing Remove From Cart action', () => {
        const payload = ProductMock
        const expected = {
            type: 'REMOVE_FROM_CART',
            payload: payload
        }
        expect(actions.removeFromCart(payload)).toEqual(expected)
    })

})
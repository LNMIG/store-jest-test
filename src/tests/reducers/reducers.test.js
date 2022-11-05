import reducer from '../../reducers'
import ProductMock from '../mocks/productMock'

describe('Testing Reducers', () => {
    test('Return Initial State', () => {
        expect(reducer([], '')).toEqual([])
    })

    test('Return State with One Product Added to Cart', () => {
        const actionToBeSent = {
            type: 'ADD_TO_CART',
            payload: ProductMock
        }
        const stateExpected = {
            cart: [ProductMock],
        }
        expect(reducer({cart: []},actionToBeSent)).toEqual(stateExpected)
    })

    test('Return State with One Product Removed From Cart', () => {
        const actionToAdd = {
            type: 'ADD_TO_CART',
            payload: ProductMock
        }
        const actionToRemove = {
            type: 'REMOVE_FROM_CART',
            payload: ProductMock
        }
        const addedStateExpected = {
            cart: [ProductMock],
        }
        const removedStateExpected = {
            cart: []
        }
        const actualState = reducer({cart: []},actionToAdd)
        expect(reducer({cart: []},actionToAdd)).toEqual(addedStateExpected)
        expect(reducer(actualState,actionToRemove)).toEqual(removedStateExpected)
    })
})
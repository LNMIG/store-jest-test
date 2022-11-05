import React from "react"
import {render, screen, fireEvent} from '@testing-library/react'
import ProductMock from "../mocks/productMock"
import Product from '../../components/product'


import { store } from '../../store/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


describe(('Testing Product component'), () => {
    test('Check Product is rendering', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Product product={ProductMock} handleAddToCart={()=>{}}/>
                </BrowserRouter>
            </Provider>
        )
    });
    test("Check Buton 'comprar' is working", async () => {
        const handleAddToCart = jest.fn()
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Product product={ProductMock} handleAddToCart={handleAddToCart}/>
                </BrowserRouter>
            </Provider>
        )
        fireEvent.click(screen.getByText('Comprar'))
        expect(handleAddToCart).toHaveBeenCalledTimes(1)
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'Camiseta')
    });
})
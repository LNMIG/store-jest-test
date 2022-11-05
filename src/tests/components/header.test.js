import React from "react"
import {render, screen} from '@testing-library/react'
import ProviderMock from "../mocks/providerMock"
import Header from '../../components/header'


import { store } from '../../store/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


describe(('Testing Header component'), () => {
    test('Check Header is rendering', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
            </Provider>
        )
        expect(screen.getByText('T-shirt Store')).toBeInTheDocument()
        expect(screen.getByRole('heading', {name: 'T-shirt Store'})).toHaveAttribute('class', 'Header-title')
        expect(screen.getByRole('link', {name: 'T-shirt Store'})).toHaveAttribute('href', '/')
        expect(screen.getByRole('link', {name: ''})).toHaveAttribute('href', '/checkout')
    });

    test('Check Header is rendering with ProviderMock', () => {
      render(
        <ProviderMock>
            <Header/>
        </ProviderMock>
      )
    })
})
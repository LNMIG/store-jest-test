import React from "react";
import {render, screen} from '@testing-library/react'

import Footer from '../../components/footer.jsx'

describe(('Testing footer component'), () => {
    test('Check footers components text rendering 1', () => {
        render(<Footer/>)
      expect(screen.getByText('T-shirt Store')).toBeInTheDocument()
    });
    test('Check footers components text rendering 2', () => {
        render(<Footer/>)
        expect(screen.getByText('Rights reserved?')).toBeInTheDocument()
      })
})
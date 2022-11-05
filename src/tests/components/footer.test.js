import React from "react";
import { create } from "react-test-renderer"
import { render, screen } from '@testing-library/react'
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

describe(('Footer snapshot'), () => {
    test("Checking component footer's UI", () => {
      const footer = create(<Footer/>)
      expect(footer.toJSON).toMatchSnapshot()
    })
})
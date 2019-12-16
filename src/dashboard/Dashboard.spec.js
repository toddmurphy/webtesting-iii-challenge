// Test away
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';

test('Dashboard component displays correctly', () => {
    render(<Dashboard />)
})

test('When "Lock Gate" button is clicked Unlocked green text changes text to "Locked"', () => {
    const {getByText} = render(<Dashboard />)
    const button = getByText(/^lock gate$/i)
    fireEvent.click(button)
    getByText(/^locked$/i)
    getByText(/^unlock gate$/i)
})

test('When "Open Gate" button is clicked Closed red text changes to Open text and Close Gate button', () => {
    const {getByText} = render(<Dashboard />)
    const button = getByText(/^open gate$/i)
    fireEvent.click(button)
    getByText(/^open$/i)
    getByText(/^close gate$/i)
})
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
    const button = getByText(/^Lock Gate$/i)
    fireEvent.click(button)
    getByText(/^Locked$/)
})
// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

test('Controls component is displaying correctly', () => {
    render(<Controls />)

})


test('Click unlock gate button that changes to unlocked green color', () => {
    const {getByText} = render(<Dashboard />)
    const button = getByText(/^Lock Gate$/i)
    const button2 = getByText(/^open gate$/i)
    fireEvent.click(button)
    getByText(/^Unlock Gate$/i)
    expect(button2).toBeDisabled()
})


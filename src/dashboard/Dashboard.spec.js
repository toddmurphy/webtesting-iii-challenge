// Test away
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard is displaying correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot()  
})


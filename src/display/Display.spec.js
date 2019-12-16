// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Display from './Display';

test('Display component is displaying correctly', () => {
    render(<Display />)
})
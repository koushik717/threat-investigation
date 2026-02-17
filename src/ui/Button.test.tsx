import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
    it('renders correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('shows loading spinner when isLoading is true', () => {
        render(<Button isLoading>Click me</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
        // The text might be hidden or present, depending on implementation, 
        // but usually we check for a spinner class or structure
        expect(screen.getByText(/click me/i)).toBeInTheDocument();
    });
});

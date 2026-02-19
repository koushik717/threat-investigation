import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Button } from '../ui/Button';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="u-flex-col u-items-center u-justify-center" style={{ height: '100vh', gap: 'var(--space-4)', textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-status-critical)' }}>Something went wrong.</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px' }}>
                        {this.state.error?.message || 'An unexpected error occurred.'}
                    </p>
                    <Button onClick={() => window.location.reload()}>Reload Application</Button>
                </div>
            );
        }

        return this.props.children;
    }
}

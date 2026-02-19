import { render, screen, waitFor } from '@testing-library/react';
import { AlertsPage, GET_ALERTS } from './AlertsPage';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';

// Mock translation hook
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

const mocks = [
    {
        request: {
            query: GET_ALERTS,
        },
        result: {
            data: {
                alerts: [
                    {
                        id: 'ALT-1',
                        timestamp: '2023-01-01T00:00:00Z',
                        severity: 'critical',
                        status: 'new',
                        title: 'Test Alert',
                        category: 'Test',
                        source: 'Test Source',
                        entity: 'Test Entity',
                    },
                ],
            },
        },
    },
];

describe('AlertsPage', () => {
    it('renders loading state initially', () => {
        render(
            <MockedProvider mocks={[]} addTypename={false}>
                <BrowserRouter>
                    <AlertsPage />
                </BrowserRouter>
            </MockedProvider>
        );
        expect(screen.getByText('alerts.loading')).toBeInTheDocument();
    });

    it('renders alerts after loading', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BrowserRouter>
                    <AlertsPage />
                </BrowserRouter>
            </MockedProvider>
        );

        await waitFor(() => {
            expect(screen.getByText('alerts.title')).toBeInTheDocument();
        });

        expect(screen.getByText('Test Alert')).toBeInTheDocument();
        expect(screen.getByText('Test Entity')).toBeInTheDocument();
    });

    it('renders error state', async () => {
        const errorMock = [
            {
                request: {
                    query: GET_ALERTS,
                },
                error: new Error('An error occurred'),
            },
        ];

        render(
            <MockedProvider mocks={errorMock} addTypename={false}>
                <BrowserRouter>
                    <AlertsPage />
                </BrowserRouter>
            </MockedProvider>
        );

        await waitFor(() => {
            expect(screen.getByText(/alerts.error/i)).toBeInTheDocument();
        });
    });
});

import { graphql, HttpResponse } from 'msw';
import { MANY_MOCK_ALERTS } from '../services/mockData';

export const handlers = [
    graphql.query('GetAlerts', () => {
        return HttpResponse.json({
            data: {
                alerts: MANY_MOCK_ALERTS,
            },
        });
    }),

    graphql.query('GetAlert', ({ variables }) => {
        const { id } = variables;
        const alert = MANY_MOCK_ALERTS.find((a) => a.id === id);

        if (!alert) {
            return HttpResponse.json({
                errors: [
                    {
                        message: `Alert not found: ${id}`,
                    },
                ],
            });
        }

        return HttpResponse.json({
            data: {
                alert,
            },
        });
    }),
];

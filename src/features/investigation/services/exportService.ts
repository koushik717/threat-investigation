import type { Alert, TimelineEvent } from '../../../services/mockData';

export interface IncidentSnapshot {
    exportedAt: string;
    alert: Alert;
    timeline: TimelineEvent[];
    metadata: {
        version: string;
        generatedBy: string;
    };
}

export const downloadIncidentSnapshot = (alert: Alert, timelineEvents: TimelineEvent[]) => {
    const snapshot: IncidentSnapshot = {
        exportedAt: new Date().toISOString(),
        alert,
        timeline: timelineEvents,
        metadata: {
            version: '1.0.0',
            generatedBy: 'Threat Investigation Console',
        },
    };

    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `incident-snapshot-${alert.id}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

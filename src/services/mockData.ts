export interface Alert {
    id: string;
    timestamp: string;
    severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
    status: 'new' | 'investigating' | 'resolved' | 'false_positive';
    title: string;
    category: string;
    source: string;
    entity: string;
    assignee?: string;
}

export const MOCK_ALERTS: Alert[] = [
    {
        id: 'ALT-1024',
        timestamp: '2025-05-15T08:30:00Z',
        severity: 'critical',
        status: 'new',
        title: 'Suspicious PowerShell Execution',
        category: 'Execution',
        source: 'EDR',
        entity: 'WORKSTATION-01',
    },
    // ... existing static alerts ...
];

const SEVERITIES: Alert['severity'][] = ['critical', 'high', 'medium', 'low', 'info'];
const STATUSES: Alert['status'][] = ['new', 'investigating', 'resolved', 'false_positive'];
const CATEGORIES = ['Execution', 'Credential Access', 'Reconnaissance', 'Malware', 'Exfiltration', 'Defense Evasion'];
const SOURCES = ['EDR', 'Firewall', 'Identity Provider', 'Active Directory', 'System', 'NDR'];

export const generateMockAlerts = (count: number): Alert[] => {
    return Array.from({ length: count }, (_, i) => {
        const id = `ALT-${10000 + i}`;
        const severity = SEVERITIES[Math.floor(Math.random() * SEVERITIES.length)];
        const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
        const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
        const source = SOURCES[Math.floor(Math.random() * SOURCES.length)];

        return {
            id,
            timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
            severity,
            status,
            title: `${category} detected on ${source}`,
            category,
            source,
            entity: `HOST-${Math.floor(Math.random() * 1000)}`,
        };
    });
};

export const MANY_MOCK_ALERTS = [...MOCK_ALERTS, ...generateMockAlerts(10000)];

export interface TimelineEvent {
    id: string;
    alertId: string;
    timestamp: string;
    title: string;
    description: string;
    source: string;
    type: 'process' | 'network' | 'file' | 'registry' | 'auth';
}

export const MOCK_TIMELINE_EVENTS: TimelineEvent[] = [
    {
        id: 'EVT-001',
        alertId: 'ALT-1024',
        timestamp: '2025-05-15T08:25:00Z',
        title: 'Process Started',
        description: 'powershell.exe started by cmd.exe',
        source: 'EDR',
        type: 'process',
    },
    {
        id: 'EVT-002',
        alertId: 'ALT-1024',
        timestamp: '2025-05-15T08:28:10Z',
        title: 'Network Connection',
        description: 'powershell.exe connected to 192.168.1.100:4444',
        source: 'Firewall',
        type: 'network',
    },
    {
        id: 'EVT-003',
        alertId: 'ALT-1024',
        timestamp: '2025-05-15T08:30:00Z',
        title: 'File Created',
        description: 'C:\\Users\\Admin\\AppData\\Local\\Temp\\mimikatz.exe',
        source: 'File System',
        type: 'file',
    },
    {
        id: 'EVT-004',
        alertId: 'ALT-1023',
        timestamp: '2025-05-15T08:10:00Z',
        title: 'User Login',
        description: 'Login from IP 45.33.22.11 (USA)',
        source: 'Identity Provider',
        type: 'auth',
    },
    {
        id: 'EVT-005',
        alertId: 'ALT-1023',
        timestamp: '2025-05-15T08:15:22Z',
        title: 'User Login',
        description: 'Login from IP 88.99.00.11 (Germany)',
        source: 'Identity Provider',
        type: 'auth',
    },
];

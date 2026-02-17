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
    {
        id: 'ALT-1023',
        timestamp: '2025-05-15T08:15:22Z',
        severity: 'high',
        status: 'investigating',
        title: 'Impossible Travel Detected',
        category: 'Credential Access',
        source: 'Identity Provider',
        entity: 'jdoe@example.com',
        assignee: 'Admin User',
    },
    {
        id: 'ALT-1022',
        timestamp: '2025-05-15T07:45:10Z',
        severity: 'medium',
        status: 'new',
        title: 'Port Scanning Activity',
        category: 'Reconnaissance',
        source: 'Firewall',
        entity: '192.168.1.50',
    },
    {
        id: 'ALT-1021',
        timestamp: '2025-05-14T23:10:05Z',
        severity: 'low',
        status: 'resolved',
        title: 'Failed Login Attempt',
        category: 'Credential Access',
        source: 'Active Directory',
        entity: 'bsmith',
        assignee: 'Admin User',
    },
    {
        id: 'ALT-1020',
        timestamp: '2025-05-14T22:00:00Z',
        severity: 'info',
        status: 'false_positive',
        title: 'Software Update Installed',
        category: 'Configuration',
        source: 'System',
        entity: 'SERVER-DB-02',
    },
    {
        id: 'ALT-1019',
        timestamp: '2025-05-14T21:45:30Z',
        severity: 'high',
        status: 'new',
        title: 'Ransomware Pattern Match',
        category: 'Malware',
        source: 'Anti-Virus',
        entity: 'FINANCE-PC',
    },
    {
        id: 'ALT-1018',
        timestamp: '2025-05-14T20:30:15Z',
        severity: 'medium',
        status: 'new',
        title: 'Data Exfiltration via DNS',
        category: 'Exfiltration',
        source: 'NDR',
        entity: '10.0.0.88',
    },
];

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

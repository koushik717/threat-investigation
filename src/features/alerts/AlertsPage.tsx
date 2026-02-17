import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../../ui/Table';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { MOCK_ALERTS } from '../../services/mockData';
import type { Alert } from '../../services/mockData';
import { Filter, ChevronDown, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AlertsPage = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [alerts] = useState<Alert[]>(MOCK_ALERTS);
    const [filterText, setFilterText] = useState('');

    const filteredAlerts = useMemo(() => {
        return alerts.filter(alert =>
            alert.title.toLowerCase().includes(filterText.toLowerCase()) ||
            alert.entity.toLowerCase().includes(filterText.toLowerCase()) ||
            alert.id.toLowerCase().includes(filterText.toLowerCase())
        );
    }, [alerts, filterText]);

    const getSeverityVariant = (severity: Alert['severity']) => {
        switch (severity) {
            case 'critical': return 'critical';
            case 'high': return 'warning'; // Using warning color for high, or create specific
            case 'medium': return 'warning';
            case 'low': return 'success';
            case 'info': return 'info';
            default: return 'default';
        }
    };

    const getStatusVariant = (status: Alert['status']) => {
        switch (status) {
            case 'new': return 'accent';
            case 'investigating': return 'warning';
            case 'resolved': return 'success';
            case 'false_positive': return 'neutral';
            default: return 'default';
        }
    };

    const handleRowClick = (id: string) => {
        navigate(`/investigation/${id}`);
    };

    return (
        <div className="u-flex-col" style={{ gap: 'var(--space-6)', height: '100%' }}>
            {/* Page Header */}
            <div className="u-flex u-items-center u-justify-between">
                <div>
                    <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 600 }}>Alerts</h1>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                        Triage and investigate incoming security alerts.
                    </p>
                </div>
                <div className="u-flex" style={{ gap: 'var(--space-2)' }}>
                    <Button variant="secondary" leftIcon={<RefreshCw size={16} />}>Refresh</Button>
                    <Button>Export</Button>
                </div>
            </div>

            {/* Toolbar */}
            <div className="u-flex u-items-center u-justify-between" style={{
                backgroundColor: 'var(--color-bg-secondary)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)'
            }}>
                <div className="u-flex" style={{ gap: 'var(--space-4)', flex: 1 }}>
                    <Input
                        placeholder="Search alerts..."
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                        style={{ maxWidth: '300px' }}
                    />
                    <Button variant="secondary" leftIcon={<Filter size={16} />} rightIcon={<ChevronDown size={14} />}>
                        Severity
                    </Button>
                    <Button variant="secondary" leftIcon={<Filter size={16} />} rightIcon={<ChevronDown size={14} />}>
                        Status
                    </Button>
                </div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    Showing {filteredAlerts.length} alerts
                </div>
            </div>

            {/* Data Grid */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Entity</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredAlerts.map((alert) => (
                        <TableRow
                            key={alert.id}
                            onClick={() => handleRowClick(alert.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <TableCell style={{ fontFamily: 'var(--font-family-mono)' }}>{alert.id}</TableCell>
                            <TableCell>
                                <Badge variant={getSeverityVariant(alert.severity)}>{alert.severity.toUpperCase()}</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge variant={getStatusVariant(alert.status)}>{alert.status.replace('_', ' ')}</Badge>
                            </TableCell>
                            <TableCell style={{ fontWeight: 500 }}>{alert.title}</TableCell>
                            <TableCell>{alert.entity}</TableCell>
                            <TableCell>{alert.category}</TableCell>
                            <TableCell style={{ color: 'var(--color-text-secondary)' }}>
                                {format(new Date(alert.timestamp), 'MMM d, HH:mm:ss')}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

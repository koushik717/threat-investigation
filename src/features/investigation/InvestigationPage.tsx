import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, MoreHorizontal, Server, User } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { MOCK_ALERTS, MOCK_TIMELINE_EVENTS } from '../../services/mockData';
import { format } from 'date-fns';
import { Timeline } from './components/Timeline';
import { downloadIncidentSnapshot } from './services/exportService';

export const InvestigationPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const alert = MOCK_ALERTS.find(a => a.id === id);

    const handleExport = () => {
        if (alert) {
            const events = MOCK_TIMELINE_EVENTS.filter(e => e.alertId === alert.id);
            downloadIncidentSnapshot(alert, events);
        }
    };

    if (!alert) {
        return (
            <div className="u-flex-col u-items-center u-justify-center" style={{ height: '100%' }}>
                <h2>Alert not found</h2>
                <Button onClick={() => navigate('/alerts')}>Back to Alerts</Button>
            </div>
        );
    }

    return (
        <div className="u-flex-col" style={{ gap: 'var(--space-6)', height: '100%' }}>
            {/* Header / Breadcrumb */}
            <div className="u-flex u-items-center u-justify-between">
                <div className="u-flex u-items-center" style={{ gap: 'var(--space-4)' }}>
                    <Button variant="ghost" size="sm" onClick={() => navigate('/alerts')}>
                        <ArrowLeft size={20} />
                    </Button>
                    <div>
                        <div className="u-flex u-items-center" style={{ gap: 'var(--space-2)' }}>
                            <h1 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600 }}>{alert.title}</h1>
                            <Badge variant="critical">{alert.severity.toUpperCase()}</Badge>
                        </div>
                        <div className="u-flex u-items-center" style={{ gap: 'var(--space-4)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                            <span>ID: <span style={{ fontFamily: 'var(--font-family-mono)' }}>{alert.id}</span></span>
                            <span>•</span>
                            <span>{format(new Date(alert.timestamp), 'MMM d, yyyy HH:mm:ss')}</span>
                        </div>
                    </div>
                </div>
                <div className="u-flex" style={{ gap: 'var(--space-2)' }}>
                    <Button variant="secondary" leftIcon={<Share2 size={16} />} onClick={handleExport}>
                        Export Snapshot
                    </Button>
                    <Button variant="secondary"><MoreHorizontal size={16} /></Button>
                    <Button variant="primary">Take Action</Button>
                </div>
            </div>

            {/* Workspace Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '320px 1fr',
                gap: 'var(--space-6)',
                flex: 1,
                minHeight: 0
            }}>
                {/* Left Panel: Context */}
                <div className="u-flex-col" style={{ gap: 'var(--space-4)', overflowY: 'auto' }}>

                    <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>KEY ENTITIES</h3>
                        <div className="u-flex-col" style={{ gap: 'var(--space-3)' }}>
                            <div className="u-flex u-items-center" style={{ gap: 'var(--space-3)' }}>
                                <Server size={16} style={{ color: 'var(--color-text-secondary)' }} />
                                <span>{alert.entity}</span>
                            </div>
                            <div className="u-flex u-items-center" style={{ gap: 'var(--space-3)' }}>
                                <User size={16} style={{ color: 'var(--color-text-secondary)' }} />
                                <span>SYSTEM</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>MITRE ATT&CK</h3>
                        <Badge variant="neutral">{alert.category}</Badge>
                    </div>

                </div>

                {/* Right Panel: Investigation / Timeline */}
                <div style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                    <Timeline events={MOCK_TIMELINE_EVENTS.filter(e => e.alertId === alert.id)} />
                </div>
            </div>
        </div>
    );
};

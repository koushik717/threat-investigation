import { Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';

export const InvestigationDashboard = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
            <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(88, 166, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-6)'
            }}>
                <Shield size={40} color="var(--color-accent-primary)" />
            </div>

            <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>Investigation Center</h1>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', marginBottom: 'var(--space-8)', lineHeight: '1.6' }}>
                Select an alert from the Alerts Inbox to begin an investigation, or search for a specific entity ID to view its history.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                <Button onClick={() => navigate('/alerts')} rightIcon={<ArrowRight size={16} />}>
                    Go to Alerts Inbox
                </Button>
                <Button variant="secondary">
                    Search Entity
                </Button>
            </div>
        </div>
    );
};

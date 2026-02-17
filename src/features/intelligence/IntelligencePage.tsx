import { Activity, Globe, Zap } from 'lucide-react';

export const IntelligencePage = () => {
    return (
        <div style={{ padding: 'var(--space-6)' }}>
            <div style={{ marginBottom: 'var(--space-6)' }}>
                <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>Threat Intelligence</h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>Global threat landscape and tracked adversary campaigns.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-6)'
            }}>
                <div style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    padding: 'var(--space-6)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                        <Globe size={24} color="var(--color-accent-primary)" />
                        <h3 style={{ fontWeight: 600 }}>Global Threat Feed</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                        Real-time feed of global security indicators and compromised hosts.
                    </p>
                    <div style={{ marginTop: 'var(--space-4)', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}></div>
                </div>

                <div style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    padding: 'var(--space-6)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                        <Activity size={24} color="var(--color-status-critical)" />
                        <h3 style={{ fontWeight: 600 }}>Active Campaigns</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                        Tracking 3 active ransomware campaigns targeting financial institutions.
                    </p>
                    <div style={{ marginTop: 'var(--space-4)', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}></div>
                </div>

                <div style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    padding: 'var(--space-6)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                        <Zap size={24} color="var(--color-status-medium)" />
                        <h3 style={{ fontWeight: 600 }}>Vulnerability Watch</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                        Critical CVEs discovered in the last 24 hours requiring immediate attention.
                    </p>
                    <div style={{ marginTop: 'var(--space-4)', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}></div>
                </div>
            </div>
        </div>
    );
};

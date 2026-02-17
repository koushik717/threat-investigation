import { StatCard } from './components/StatCard';
import { RecentActivity } from './components/RecentActivity';
import { ShieldAlert, Activity, CheckCircle, Server } from 'lucide-react';
import { MOCK_ALERTS } from '../../services/mockData';
import './DashboardPage.css';

export const DashboardPage = () => {
    // Calculate specific stats from mock data
    const criticalCount = MOCK_ALERTS.filter(a => a.severity === 'critical').length;
    // const highCount = MOCK_ALERTS.filter(a => a.severity === 'high').length;
    const activeCount = MOCK_ALERTS.filter(a => a.status === 'new' || a.status === 'investigating').length;
    const resolvedCount = MOCK_ALERTS.filter(a => a.status === 'resolved').length;

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Security Overview</h1>
                <p className="dashboard-subtitle">Real-time insight into security posture and active threats.</p>
            </div>

            {/* Stats Grid */}
            <div className="dashboard-grid">
                <StatCard
                    label="Active Threats"
                    value={activeCount}
                    icon={<ShieldAlert size={20} />}
                    variant="critical"
                    trend={{ value: 12, isPositive: false }}
                />
                <StatCard
                    label="Critical Alerts"
                    value={criticalCount}
                    icon={<Activity size={20} />}
                    variant="warning"
                    trend={{ value: 5, isPositive: true }}
                />
                <StatCard
                    label="Resolved Today"
                    value={resolvedCount}
                    icon={<CheckCircle size={20} />}
                    variant="success"
                    trend={{ value: 8, isPositive: true }}
                />
                <StatCard
                    label="Monitored Assets"
                    value="1,240"
                    icon={<Server size={20} />}
                    variant="info"
                />
            </div>

            <div className="dashboard-content">
                {/* Main Chart Area (Placeholder for now) */}
                <div className="dashboard-chart-section">
                    <h3 className="dashboard-section-title">Alert Volume (Last 24h)</h3>
                    <div className="dashboard-chart-placeholder">
                        <div className="chart-bars">
                            {[60, 40, 75, 50, 90, 30, 80, 55, 45, 70, 65, 85].map((height, i) => (
                                <div key={i} className="chart-bar" style={{ height: `${height}%` }} />
                            ))}
                        </div>
                        <div className="chart-labels">
                            <span>00:00</span>
                            <span>04:00</span>
                            <span>08:00</span>
                            <span>12:00</span>
                            <span>16:00</span>
                            <span>20:00</span>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="dashboard-activity-section">
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
};

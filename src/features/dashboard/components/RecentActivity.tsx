import { format } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
import { MOCK_ALERTS } from '../../../services/mockData';
import { useNavigate } from 'react-router-dom';
import './RecentActivity.css';

export const RecentActivity = () => {
    const navigate = useNavigate();
    const recentAlerts = MOCK_ALERTS.slice(0, 5);

    return (
        <div className="recent-activity">
            <h3 className="recent-activity__title">Recent Alerts</h3>
            <div className="recent-activity__list">
                {recentAlerts.map((alert) => (
                    <div
                        key={alert.id}
                        className="recent-activity__item"
                        onClick={() => navigate(`/investigation/${alert.id}`)}
                    >
                        <div className={`recent-activity__icon recent-activity__icon--${alert.severity}`}>
                            <ShieldAlert size={16} />
                        </div>
                        <div className="recent-activity__content">
                            <div className="recent-activity__header">
                                <span className="recent-activity__alert-title">{alert.title}</span>
                                <span className="recent-activity__time">
                                    {format(new Date(alert.timestamp), 'HH:mm')}
                                </span>
                            </div>
                            <div className="recent-activity__meta">
                                <span>{alert.entity}</span>
                                <span className="recent-activity__dot">•</span>
                                <span>{alert.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

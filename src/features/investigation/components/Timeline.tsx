import { format } from 'date-fns';
import { Terminal, Globe, File, HardDrive, User, CheckCircle } from 'lucide-react';
import type { TimelineEvent } from '../../../services/mockData';
import clsx from 'clsx';
import './Timeline.css';

interface TimelineProps {
    events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
    const getIcon = (type: TimelineEvent['type']) => {
        switch (type) {
            case 'process': return <Terminal size={16} />;
            case 'network': return <Globe size={16} />;
            case 'file': return <File size={16} />;
            case 'registry': return <HardDrive size={16} />;
            case 'auth': return <User size={16} />;
            default: return <CheckCircle size={16} />;
        }
    };

    const getVariant = (type: TimelineEvent['type']) => {
        switch (type) {
            case 'process': return 'process';
            case 'network': return 'network';
            case 'file': return 'file';
            case 'auth': return 'auth';
            default: return 'default';
        }
    };

    return (
        <div className="timeline-container">
            <h3 className="timeline-header">Investigation Timeline</h3>
            <div className="timeline">
                {events.map((event, index) => (
                    <div key={event.id} className="timeline-item">
                        <div className="timeline-item__left">
                            <span className="timeline-item__time">
                                {format(new Date(event.timestamp), 'HH:mm:ss')}
                            </span>
                            <span className="timeline-item__date">
                                {format(new Date(event.timestamp), 'MMM d')}
                            </span>
                        </div>

                        <div className="timeline-item__separator">
                            <div className={clsx('timeline-item__dot', `timeline-item__dot--${getVariant(event.type)}`)}>
                                {getIcon(event.type)}
                            </div>
                            {index !== events.length - 1 && <div className="timeline-item__line" />}
                        </div>

                        <div className="timeline-item__content">
                            <div className="timeline-card">
                                <div className="timeline-card__header">
                                    <span className="timeline-card__title">{event.title}</span>
                                    <span className="timeline-card__source">{event.source}</span>
                                </div>
                                <p className="timeline-card__description">{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {events.length === 0 && (
                    <div className="timeline-empty">No events found for this alert.</div>
                )}
            </div>
        </div>
    );
};

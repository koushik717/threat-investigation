import React from 'react';
import { clsx } from 'clsx';
import './StatCard.css';

interface StatCardProps {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    className?: string;
    variant?: 'default' | 'critical' | 'warning' | 'success' | 'info';
}

export const StatCard = ({ label, value, icon, trend, className, variant = 'default' }: StatCardProps) => {
    return (
        <div className={clsx('stat-card', `stat-card--${variant}`, className)}>
            <div className="stat-card__header">
                <span className="stat-card__label">{label}</span>
                {icon && <span className="stat-card__icon">{icon}</span>}
            </div>
            <div className="stat-card__content">
                <span className="stat-card__value">{value}</span>
                {trend && (
                    <span className={clsx('stat-card__trend', trend.isPositive ? 'stat-card__trend--positive' : 'stat-card__trend--negative')}>
                        {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                    </span>
                )}
            </div>
        </div>
    );
};

import React from 'react';
import clsx from 'clsx';
import './Badge.css';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'neutral' | 'accent' | 'success' | 'warning' | 'critical' | 'info';
    size?: 'sm' | 'md';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={clsx(
                    'ui-badge',
                    `ui-badge--${variant}`,
                    `ui-badge--${size}`,
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

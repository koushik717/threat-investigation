import React from 'react';
import './Button.css';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isLoading = false,
        leftIcon,
        rightIcon,
        children,
        disabled,
        ...props
    }, ref) => {

        return (
            <button
                ref={ref}
                className={clsx(
                    'ui-button',
                    `ui-button--${variant}`,
                    `ui-button--${size}`,
                    isLoading && 'ui-button--loading',
                    className
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <span className="ui-button__spinner" aria-hidden="true" />}
                {!isLoading && leftIcon && <span className="ui-button__icon ui-button__icon--left">{leftIcon}</span>}
                <span className="ui-button__content">{children}</span>
                {!isLoading && rightIcon && <span className="ui-button__icon ui-button__icon--right">{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

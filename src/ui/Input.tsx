import React from 'react';
import clsx from 'clsx';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, leftIcon, rightIcon, fullWidth = false, id, ...props }, ref) => {
        const generatedId = React.useId();
        const inputId = id || generatedId;

        return (
            <div className={clsx('ui-input-wrapper', fullWidth && 'ui-input-wrapper--full', className)}>
                {label && (
                    <label htmlFor={inputId} className="ui-input-label">
                        {label}
                    </label>
                )}
                <div className="ui-input-container">
                    {leftIcon && <span className="ui-input-icon ui-input-icon--left">{leftIcon}</span>}
                    <input
                        ref={ref}
                        id={inputId}
                        className={clsx(
                            'ui-input',
                            error && 'ui-input--error',
                            leftIcon && 'ui-input--has-left-icon',
                            rightIcon && 'ui-input--has-right-icon'
                        )}
                        {...props}
                    />
                    {rightIcon && <span className="ui-input-icon ui-input-icon--right">{rightIcon}</span>}
                </div>
                {error && <span className="ui-input-error">{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';

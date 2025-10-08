import React from 'react';
import { useTheme } from '../../theme/useTheme';

const Button = ({
    variant = 'primary',
    children,
    loading,
    disabled,
    onClick,
    className = '',
    ...props
}) => {
    const { components } = useTheme();
    const buttonClasses = components.button;

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`
                ${buttonClasses.base}
                ${buttonClasses.variants[variant]}
                ${(disabled || loading) ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg' : ''}
                ${className}
            `}
            {...props}
        >
            {loading && (
                <svg
                    className="w-5 h-5 mr-2 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.58 0 0 5.58 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            )}
            <span className="flex items-center">{children}</span>
        </button>
    );
};

export default Button;
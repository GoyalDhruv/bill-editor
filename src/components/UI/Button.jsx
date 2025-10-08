import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    disabled = false,
    loading = false,
    ...props
}) => {
    const baseClasses = 'font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-4';

    const variants = {
        primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 border-0',
        secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl hover:scale-105 border-0',
        success: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 border-0',
        danger: 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:scale-105 border-0',
        ghost: 'bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-0 hover:scale-105'
    };

    return (
        <button
            className={`
        ${baseClasses}
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}
        ${className}
      `}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Loading...
                </div>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
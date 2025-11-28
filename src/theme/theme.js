export const theme = {
    // Color Palette - IZO Dashboard Theme
    colors: {
        // Primary Colors - Blue (Main brand color)
        primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
        },

        // Secondary Colors - Orange (IZO Brand Accent)
        secondary: {
            50: '#fff7ed',
            100: '#fed7aa',
            200: '#fdba74',
            300: '#fb923c',
            400: '#f97316',
            500: '#ea580c',
            600: '#c2410c',
            700: '#92400e',
            800: '#78350f',
            900: '#7c2d12',
        },

        // Neutral Colors - Slate (Text, backgrounds)
        neutral: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
        },

        // Success Colors - Emerald
        success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#145231',
        },

        // Warning Colors - Amber
        warning: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
        },

        // Error Colors - Red
        error: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
        },

        // Info Colors - Sky Blue
        info: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
        },
    },

    // Gradients - IZO Professional
    gradients: {
        // Primary gradient - Blue dominant (clean)
        primary: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',

        // Secondary gradient - Orange accent (brand)
        secondary: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',

        // Dark gradient - Deep professional
        dark: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',

        // Light gradient - Clean backgrounds
        light: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',

        // Glass effect - Frosted UI
        glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',

        // Success gradient
        success: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',

        // Warning gradient
        warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',

        // Error gradient
        error: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',

        // Orange accent gradient (IZO brand)
        accent: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
    },

    // Shadows - Professional depth
    shadows: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',

        // Brand shadows
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-orange': '0 0 20px rgba(234, 88, 12, 0.3)',
        'hover': '0 10px 25px rgba(59, 130, 246, 0.2)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 24px rgba(0, 0, 0, 0.12)',
    },

    // Typography
    typography: {
        fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
            mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            display: ['Inter', 'system-ui', 'sans-serif'],
        },
        fontSize: {
            xs: '0.75rem',      // 12px
            sm: '0.875rem',     // 14px
            base: '1rem',       // 16px
            lg: '1.125rem',     // 18px
            xl: '1.25rem',      // 20px
            '2xl': '1.5rem',    // 24px
            '3xl': '1.875rem',  // 30px
            '4xl': '2.25rem',   // 36px
            '5xl': '3rem',      // 48px
        },
        fontWeight: {
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
        },
        lineHeight: {
            tight: '1.2',
            normal: '1.5',
            relaxed: '1.75',
            loose: '2',
        },
    },

    // Spacing - Consistent across app
    spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
    },

    // Border Radius - Modern rounded design
    borderRadius: {
        none: '0',
        sm: '0.375rem',
        base: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
    },

    // Animations - Smooth & professional
    animations: {
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-in',
        'scale-in': 'scaleIn 0.2s ease-out',
        'scale-out': 'scaleOut 0.2s ease-in',
    },

    // Transitions
    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },

    // Components - Preset styles
    components: {
        // Button variants
        button: {
            base: 'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',

            variants: {
                // Primary button - Blue
                primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-blue-500 focus:ring-offset-white',

                // Secondary button - Orange (IZO brand)
                secondary: 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-orange-500 focus:ring-offset-white',

                // Ghost button - Outline style
                ghost: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 focus:ring-blue-500',

                // Outline button - Neutral
                outline: 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50 focus:ring-blue-500',

                // Success button - Green
                success: 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-emerald-500 focus:ring-offset-white',

                // Danger button - Red
                danger: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-red-500 focus:ring-offset-white',

                // Warning button - Amber
                warning: 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-amber-500 focus:ring-offset-white',

                // Soft button - Muted
                soft: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',

                // Orange accent button (IZO brand)
                accent: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-orange-500 focus:ring-offset-white',
            },

            sizes: {
                sm: 'px-3 py-1.5 text-sm',
                md: 'px-4 py-2 text-base',
                lg: 'px-6 py-3 text-lg',
                xl: 'px-8 py-4 text-xl',
            },
        },

        // Card component
        card: {
            base: 'bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300',
            header: 'px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white',
            body: 'p-6',
            footer: 'px-6 py-4 border-t border-gray-200 bg-gray-50',
        },

        // Input component
        input: {
            base: 'w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300',
            error: 'border-red-500 focus:ring-red-500',
            success: 'border-emerald-500 focus:ring-emerald-500',
        },

        // Badge component
        badge: {
            base: 'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold',
            variants: {
                primary: 'bg-blue-100 text-blue-700 border border-blue-200',
                secondary: 'bg-orange-100 text-orange-700 border border-orange-200',
                success: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
                warning: 'bg-amber-100 text-amber-700 border border-amber-200',
                error: 'bg-red-100 text-red-700 border border-red-200',
                gray: 'bg-gray-100 text-gray-700 border border-gray-200',
            },
        },

        // Tag component
        tag: {
            base: 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium',
            filled: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white',
            outline: 'border-2 border-blue-600 text-blue-600 bg-transparent',
        },
    },

    // Breakpoints - Responsive design
    breakpoints: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    // Z-index scale
    zIndex: {
        hide: '-1',
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        modal: '1040',
        popover: '1050',
        tooltip: '1060',
    },
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Classname utility - combines multiple classes
 */
export const cn = (...classes) => {
    return classes
        .filter(Boolean)
        .join(' ')
        .trim();
};

/**
 * Get color from theme by name and shade
 * @example getColor('primary.500') or getColor('primary', 600)
 */
export const getColor = (colorPath, shade = null) => {
    if (typeof colorPath === 'string' && colorPath.includes('.')) {
        const [color, colorShade] = colorPath.split('.');
        return theme.colors[color]?.[colorShade] || colorPath;
    }

    const color = colorPath;
    const colorShade = shade || 500;
    return theme.colors[color]?.[colorShade] || colorPath;
};

/**
 * Get gradient from theme
 * @example getGradient('primary')
 */
export const getGradient = (gradientName) => {
    return theme.gradients[gradientName] || gradientName;
};

/**
 * Get shadow from theme
 * @example getShadow('lg')
 */
export const getShadow = (shadowName) => {
    return theme.shadows[shadowName] || theme.shadows.md;
};

/**
 * Get spacing value from theme
 * @example getSpacing(4) or getSpacing('4')
 */
export const getSpacing = (spacingKey) => {
    return theme.spacing[spacingKey] || spacingKey;
};

/**
 * Merge component classes with overrides
 * @example mergeClasses('button', 'primary', 'custom-class')
 */
export const mergeClasses = (component, variant = 'base', customClass = '') => {
    const base = theme.components[component]?.base || '';
    const variantClass = theme.components[component]?.variants?.[variant] || '';
    return cn(base, variantClass, customClass);
};

/**
 * Get responsive breakpoint
 * @example getBreakpoint('md')
 */
export const getBreakpoint = (breakpointName) => {
    return theme.breakpoints[breakpointName] || '768px';
};

/**
 * Create media query string
 * @example createMediaQuery('md') -> '@media (min-width: 768px)'
 */
export const createMediaQuery = (breakpointName, minOrMax = 'min') => {
    const bp = getBreakpoint(breakpointName);
    return `@media (${minOrMax}-width: ${bp})`;
};

/**
 * Get z-index value
 * @example getZIndex('modal')
 */
export const getZIndex = (level) => {
    return theme.zIndex[level] || 'auto';
};

// Export theme as default
export default theme;
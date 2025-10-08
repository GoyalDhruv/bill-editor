import { theme } from './theme';

export const useTheme = () => {
    return {
        theme,
        colors: theme.colors,
        gradients: theme.gradients,
        shadows: theme.shadows,
        typography: theme.typography,
        spacing: theme.spacing,
        borderRadius: theme.borderRadius,
        animations: theme.animations,
        components: theme.components,
    };
};
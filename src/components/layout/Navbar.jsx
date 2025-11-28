import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Breadcrumbs,
    Button,
    Chip,
    IconButton,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Home as HomeIcon,
    ChevronRight as ChevronRightIcon,
    Description as TemplateIcon,
    Palette as PaletteIcon,
    Download as DownloadIcon,
    Refresh as RefreshIcon,
} from '@mui/icons-material';

const Navbar = ({
    appState,
    onBackToGallery,
    currentTemplate,
    onExportPDF,
    isExporting
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: '#ffffff',
                color: '#1e293b',
                borderBottom: '1px solid #e2e8f0',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            }}
        >
            {/* Main Toolbar */}
            <Toolbar sx={{
                justifyContent: 'space-between',
                minHeight: { xs: 70 },
                px: { xs: 2 },
                py: { xs: 1 },
                gap: 3,
            }}>
                {/* Left Section - Logo */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1, md: 2 },
                    }}>
                        <img
                            src="/logo/izo-logo-light.png"
                            alt="IZO Logo"
                            style={{
                                height: isMobile ? 45 : 80,
                                width: 'auto',
                                filter: 'brightness(0.9) contrast(1.1)',
                            }}
                        />
                    </Box>
                </Box>

                {/* Right Section - Actions & Status */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2, md: 3 },
                    flexShrink: 0,
                }}>


                    {/* Gallery Mode Status */}
                    {appState === 'gallery' && currentTemplate && (
                        <Chip
                            icon={<TemplateIcon />}
                            label={`Selected: ${currentTemplate.name}`}
                            variant="filled"
                            size="medium"
                            sx={{
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.contrastText,
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                px: 1,
                                '& .MuiChip-icon': {
                                    color: 'inherit',
                                },
                                boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)',
                            }}
                        />
                    )}

                    {/* App Mode Indicator */}
                    <Chip
                        label={appState === 'gallery' ? 'Gallery Mode' : 'Editor Mode'}
                        color={appState === 'gallery' ? 'secondary' : 'primary'}
                        variant="outlined"
                        size="small"
                        sx={{
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            borderWidth: '2px',
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    />

                    {/* Editor Mode Actions */}
                    {appState === 'editor' && (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1, sm: 1.5, md: 2 }
                        }}>

                            {/* Change Template Button */}
                            <Button
                                variant="outlined"
                                startIcon={<PaletteIcon />}
                                onClick={onBackToGallery}
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    minWidth: 'auto',
                                    borderColor: theme.palette.primary.light,
                                    color: theme.palette.primary.dark,
                                    backgroundColor: 'white',
                                    fontWeight: 600,
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                    px: { xs: 1.5, sm: 2 },
                                    py: { xs: 0.75, sm: 1 },
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.light,
                                        borderColor: theme.palette.primary.main,
                                        color: 'white',
                                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                                        transform: 'translateY(-1px)',
                                    },
                                    transition: 'all 0.2s ease-in-out',
                                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {isMobile ? 'Templates' : 'Change Template'}
                            </Button>

                            {/* Export PDF Button */}
                            <Button
                                variant="contained"
                                startIcon={isExporting ?
                                    <RefreshIcon sx={{ animation: 'spin 1s linear infinite' }} /> :
                                    <DownloadIcon />
                                }
                                onClick={onExportPDF}
                                disabled={isExporting}
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    minWidth: 'auto',
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                    fontWeight: 700,
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                    px: { xs: 2, sm: 2.5 },
                                    py: { xs: 0.75, sm: 1 },
                                    boxShadow: `0 4px 14px 0 ${theme.palette.primary.main}40`,
                                    '&:hover': {
                                        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                                        boxShadow: `0 6px 20px 0 ${theme.palette.primary.main}60`,
                                        transform: 'translateY(-2px)',
                                    },
                                    '&:active': {
                                        transform: 'translateY(0)',
                                    },
                                    '&.Mui-disabled': {
                                        background: theme.palette.grey[300],
                                        color: theme.palette.grey[500],
                                    },
                                    transition: 'all 0.3s ease-in-out',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: '-100%',
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                        transition: 'left 0.5s',
                                    },
                                    '&:hover::before': {
                                        left: '100%',
                                    },
                                }}
                            >
                                {isExporting ? (
                                    isMobile ? 'Exporting...' : 'Exporting...'
                                ) : (
                                    isMobile ? 'Export PDF' : 'Export PDF'
                                )}
                            </Button>
                        </Box>
                    )}
                </Box>
            </Toolbar>

            {/* Mobile Breadcrumbs & Template Info */}
            {appState === 'editor' && currentTemplate && (
                <Toolbar
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        minHeight: 45,
                        px: { xs: 2, sm: 3 },
                        py: 1,
                        borderTop: '1px solid #f1f5f9',
                        backgroundColor: '#f8fafc',
                        background: 'linear-gradient(90deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        {/* Breadcrumbs */}
                        <Breadcrumbs
                            separator={<ChevronRightIcon fontSize="small" sx={{ color: theme.palette.primary.light }} />}
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: '0.8rem',
                                flex: 1,
                            }}
                        >
                            <Button
                                startIcon={<HomeIcon />}
                                onClick={onBackToGallery}
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontSize: '0.8rem',
                                    minHeight: 32,
                                    fontWeight: 600,
                                    px: 1,
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.light + '20',
                                        borderRadius: 1,
                                    },
                                    textTransform: 'none',
                                }}
                                size="small"
                            >
                                Templates
                            </Button>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    color: theme.palette.text.primary,
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                }}
                            >
                                <TemplateIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                                {currentTemplate.name}
                            </Typography>
                        </Breadcrumbs>

                        {/* Template Type Badge */}
                        <Chip
                            label={currentTemplate.type}
                            size="small"
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.7rem',
                                boxShadow: '0 2px 4px rgba(99, 102, 241, 0.3)',
                            }}
                        />
                    </Box>
                </Toolbar>
            )}
        </AppBar>
    );
};

export default Navbar;
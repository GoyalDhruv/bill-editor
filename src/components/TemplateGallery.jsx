import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Chip,
    Container,
    Grid,
    useTheme,
    alpha,
    Fade,
} from '@mui/material';
import {
    CheckCircle as CheckCircleIcon,
    Description as DescriptionIcon,
} from '@mui/icons-material';
import TemplatePreview from './TemplatePreview';

const TemplateGallery = ({ templates, onSelectTemplate, currentTemplate }) => {
    const [selectedTemplate, setSelectedTemplate] = useState(currentTemplate);
    const [filterType, setFilterType] = useState('All');
    const theme = useTheme();

    const templateTypes = {
        Professional: { color: 'primary', gradient: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)` },
        Minimal: { color: 'success', gradient: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)` },
        Creative: { color: 'info', gradient: `linear-gradient(135deg, ${theme.palette.info.main} 0%, ${theme.palette.info.dark} 100%)` },
        Custom: { color: 'warning', gradient: `linear-gradient(135deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.dark} 100%)` },
        Business: { color: 'secondary', gradient: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)` },
    };

    const uniqueTypes = ['All', ...new Set(templates.map((t) => t.type))];

    const filteredTemplates =
        filterType === 'All'
            ? templates
            : templates.filter((t) => t.type === filterType);

    const handleSelectTemplate = (template) => {
        setSelectedTemplate(template);
        setTimeout(() => {
            onSelectTemplate(template);
        }, 300);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.light, 0.05)} 50%, ${theme.palette.background.default} 100%)`,
                py: 4,
                px: 2,
            }}
        >
            <Container maxWidth="xl">
                {/* Hero Section */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Chip
                        label="Invoice Templates"
                        color="primary"
                        variant="filled"
                        sx={{
                            mb: 3,
                            px: 2,
                            py: 1,
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                        }}
                    />
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            color: 'text.primary',
                            mb: 2,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                        }}
                    >
                        Choose Your
                        <Box
                            component="span"
                            sx={{
                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                backgroundClip: 'text',
                                display: 'block',
                                mt: 1,
                            }}
                        >
                            Invoice Template
                        </Box>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.primary',
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.3,
                            fontWeight: 500,
                        }}
                    >
                        Select from professionally designed templates, customize with your data, and export instantly.
                    </Typography>
                </Box>

                {/* Filter Tabs */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                    {uniqueTypes.map((type) => (
                        <Button
                            key={type}
                            variant={filterType === type ? "contained" : "outlined"}
                            onClick={() => setFilterType(type)}
                            sx={{
                                borderRadius: 8,
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: '0.9rem',
                                ...(filterType === type && {
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                    boxShadow: theme.shadows[4],
                                }),
                            }}
                        >
                            {type}
                        </Button>
                    ))}
                </Box>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template) => (
                        <Grid item xs={12} sm={6} lg={4} key={template.id}>
                            <Card
                                onClick={() => handleSelectTemplate(template)}
                                sx={{
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease-in-out',
                                    border: `2px solid ${selectedTemplate?.id === template.id
                                        ? theme.palette.primary.main
                                        : theme.palette.divider
                                        }`,
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    background: 'background.paper',
                                    boxShadow: selectedTemplate?.id === template.id ? theme.shadows[8] : theme.shadows[2],
                                    transform: selectedTemplate?.id === template.id ? 'scale(1.02)' : 'scale(1)',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: theme.shadows[16],
                                        borderColor: theme.palette.primary.light,
                                    },
                                }}
                            >
                                {/* Preview Section */}
                                <Box sx={{ position: 'relative', height: 280 }}>
                                    <TemplatePreview template={template} />

                                    {/* Type Badge */}
                                    <Chip
                                        icon={<DescriptionIcon />}
                                        label={template.type}
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            left: 16,
                                            fontWeight: 700,
                                            background: templateTypes[template.type]?.gradient || theme.palette.grey[500],
                                            color: 'white',
                                            boxShadow: theme.shadows[4],
                                            '& .MuiChip-icon': {
                                                color: 'inherit',
                                            },
                                        }}
                                    />

                                    {/* Selected Overlay */}
                                    {selectedTemplate?.id === template.id && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: alpha(theme.palette.primary.main, 0.1),
                                                borderTop: `4px solid ${theme.palette.primary.main}`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Box sx={{ textAlign: 'center' }}>
                                                <CheckCircleIcon
                                                    sx={{
                                                        fontSize: 48,
                                                        color: theme.palette.primary.main,
                                                        mb: 1,
                                                    }}
                                                />
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    Selected
                                                </Typography>
                                            </Box>
                                        </Box>
                                    )}
                                </Box>

                                {/* Info Section */}
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            color: 'text.primary',
                                            mb: 1,
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {template.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            mb: 3,
                                            lineHeight: 1.5,
                                            minHeight: '40px',
                                        }}
                                    >
                                        {template.description}
                                    </Typography>

                                    <Button
                                        fullWidth
                                        variant={selectedTemplate?.id === template.id ? "contained" : "outlined"}
                                        size="large"
                                        sx={{
                                            borderRadius: 3,
                                            py: 1.5,
                                            fontWeight: 700,
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            ...(selectedTemplate?.id === template.id && {
                                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                                boxShadow: theme.shadows[4],
                                            }),
                                        }}
                                    >
                                        {selectedTemplate?.id === template.id ? 'Using This Template' : 'Select Template'}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </div>

                {/* Empty State */}
                {filteredTemplates.length === 0 && (
                    <Box sx={{ textAlign: 'center', py: 12 }}>
                        <DescriptionIcon sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
                            No Templates Found
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Try a different filter or add new templates.
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default TemplateGallery;
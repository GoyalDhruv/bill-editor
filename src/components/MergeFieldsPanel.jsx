import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Chip,
    Card,
    CardContent,
    InputAdornment,
    useTheme,
    useMediaQuery,
    alpha
} from '@mui/material';
import {
    Search as SearchIcon,
    DragIndicator as DragIcon,
    Person as PersonIcon,
    Business as BusinessIcon,
    AttachMoney as MoneyIcon,
    Event as EventIcon,
    Description as DescriptionIcon
} from '@mui/icons-material';

const MergeFieldsPanel = ({ fields, onInsertField, isEditorReady }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const categories = [
        { id: 'all', name: 'All', icon: <DescriptionIcon fontSize="small" /> },
        { id: 'customer', name: 'Customer', icon: <PersonIcon fontSize="small" /> },
        { id: 'company', name: 'Company', icon: <BusinessIcon fontSize="small" /> },
        { id: 'financial', name: 'Financial', icon: <MoneyIcon fontSize="small" /> },
        { id: 'dates', name: 'Dates', icon: <EventIcon fontSize="small" /> },
    ];

    const getFieldCategory = (fieldId) => {
        if (
            fieldId.includes('customer') ||
            fieldId.includes('name') ||
            fieldId.includes('address') ||
            fieldId.includes('email') ||
            fieldId.includes('phone')
        )
            return 'customer';
        if (fieldId.includes('company')) return 'company';
        if (
            fieldId.includes('amount') ||
            fieldId.includes('total') ||
            fieldId.includes('subtotal') ||
            fieldId.includes('tax') ||
            fieldId.includes('balance')
        )
            return 'financial';
        if (fieldId.toLowerCase().includes('date')) return 'dates';
        return 'other';
    };

    const filteredFields = fields.filter((field) => {
        const matchesSearch =
            field.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            field.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === 'all' || getFieldCategory(field.id) === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const fieldIcons = {
        customer: <PersonIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />,
        company: <BusinessIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />,
        financial: <MoneyIcon fontSize="small" sx={{ color: theme.palette.success.main }} />,
        dates: <EventIcon fontSize="small" sx={{ color: theme.palette.warning.main }} />,
        other: <DescriptionIcon fontSize="small" sx={{ color: theme.palette.info.main }} />,
    };

    const handleDragStart = (e, field) => {
        if (!isEditorReady) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData('text/plain', `${field.sample}`);
        e.dataTransfer.effectAllowed = 'copy';
    };

    const handleClick = (fieldId) => {
        if (isEditorReady) onInsertField(fieldId);
    };

    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'background.paper',
                borderRight: `1px solid ${theme.palette.divider}`,
                minWidth: 280,
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    px: 3,
                    py: 2,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    backgroundColor: alpha(theme.palette.primary.main, 0.02),
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                    Merge Fields
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                    Drag & drop or click to insert fields
                </Typography>
            </Box>

            {/* Search */}
            <Box sx={{ px: 2, py: 2 }}>
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Search fields..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: 'background.default',
                            '&:hover fieldset': {
                                borderColor: theme.palette.primary.light,
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: theme.palette.primary.main,
                                borderWidth: 1,
                            },
                        },
                    }}
                />
            </Box>

            {/* Categories */}
            <Box sx={{ px: 2, py: 1, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {categories.map((category) => (
                        <Chip
                            key={category.id}
                            label={category.name}
                            icon={category.icon}
                            onClick={() => setSelectedCategory(category.id)}
                            size="small"
                            variant={selectedCategory === category.id ? "filled" : "outlined"}
                            color={selectedCategory === category.id ? "primary" : "default"}
                            sx={{
                                fontWeight: 600,
                                fontSize: '0.7rem',
                                height: 28,
                                '& .MuiChip-icon': {
                                    fontSize: '0.9rem',
                                },
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Fields List */}
            <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
                {filteredFields.length > 0 ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {filteredFields.map((field) => {
                            const category = getFieldCategory(field.id);
                            const isDisabled = !isEditorReady;

                            return (
                                <Card
                                    key={field.id}
                                    draggable={!isDisabled}
                                    onDragStart={(e) => handleDragStart(e, field)}
                                    onClick={() => handleClick(field.id)}
                                    sx={{
                                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                                        opacity: isDisabled ? 0.6 : 1,
                                        transition: 'all 0.2s ease-in-out',
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: 2,
                                        backgroundColor: 'background.paper',
                                        '&:hover': !isDisabled && {
                                            transform: 'translateY(-2px)',
                                            boxShadow: theme.shadows[4],
                                            borderColor: theme.palette.primary.light,
                                        },
                                        '&:active': !isDisabled && {
                                            transform: 'translateY(0)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 32,
                                                height: 32,
                                                borderRadius: 1,
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                flexShrink: 0,
                                            }}>
                                                {fieldIcons[category]}
                                            </Box>
                                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: 'text.primary',
                                                        fontSize: '0.8rem',
                                                        lineHeight: 1.2,
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    {field.label}
                                                </Typography>
                                                <Box
                                                    component="code"
                                                    sx={{
                                                        display: 'block',
                                                        fontSize: '0.7rem',
                                                        backgroundColor: alpha(theme.palette.primary.main, 0.05),
                                                        color: theme.palette.primary.dark,
                                                        padding: '2px 6px',
                                                        borderRadius: 1,
                                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                                        fontFamily: 'monospace',
                                                        wordBreak: 'break-all',
                                                    }}
                                                >
                                                    {field.sample}
                                                </Box>
                                            </Box>
                                            {!isDisabled && (
                                                <DragIcon
                                                    fontSize="small"
                                                    sx={{
                                                        color: 'text.disabled',
                                                        flexShrink: 0,
                                                        mt: 0.5,
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </Box>
                ) : (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                            No fields found
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                            Try a different search or category
                        </Typography>
                    </Box>
                )}
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    px: 2,
                    py: 1.5,
                    borderTop: `1px solid ${theme.palette.divider}`,
                    backgroundColor: alpha(theme.palette.primary.main, 0.02),
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        display: 'block',
                        fontSize: '0.7rem',
                    }}
                >
                    {filteredFields.length} fields available • Drag to editor
                </Typography>
            </Box>
        </Box>
    );
};

export default MergeFieldsPanel;
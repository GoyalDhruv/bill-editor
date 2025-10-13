import React, { useState } from 'react';
import { useTheme } from '../theme/useTheme';

const MergeFieldsPanel = ({ fields, onInsertField, isEditorReady }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [draggedField, setDraggedField] = useState(null);

    const { gradients } = useTheme();

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'customer', name: 'Customer' },
        { id: 'company', name: 'Company' },
        { id: 'financial', name: 'Financial' },
        { id: 'dates', name: 'Dates' }
    ];

    const getFieldCategory = (fieldId) => {
        if (fieldId.includes('customer') || fieldId.includes('name') || fieldId.includes('address') || fieldId.includes('email') || fieldId.includes('phone'))
            return 'customer';
        if (fieldId.includes('company')) return 'company';
        if (fieldId.includes('amount') || fieldId.includes('total') || fieldId.includes('subtotal') || fieldId.includes('tax') || fieldId.includes('balance'))
            return 'financial';
        if (fieldId.includes('date') || fieldId.includes('Date')) return 'dates';
        return 'other';
    };

    const filteredFields = fields.filter(field => {
        const matchesSearch = field.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            field.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || getFieldCategory(field.id) === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const fieldIcons = {
        customer: '👤',
        company: '🏢',
        financial: '💰',
        dates: '📅',
        other: '📋'
    };

    // Drag start handler
    const handleDragStart = (e, field) => {
        if (!isEditorReady) {
            e.preventDefault();
            return;
        }

        setDraggedField(field);
        e.dataTransfer.setData('text/plain', `${field.sample}`);
        e.dataTransfer.effectAllowed = 'copy';

        // Add visual feedback
        e.currentTarget.classList.add('opacity-50', 'bg-blue-100');
    };

    // Drag end handler
    const handleDragEnd = (e) => {
        e.currentTarget.classList.remove('opacity-50', 'bg-blue-100');
        setDraggedField(null);
    };

    // Click handler as fallback
    const handleClick = (fieldId) => {
        if (isEditorReady) {
            onInsertField(fieldId);
        }
    };

    return (
        <div className="h-full bg-white border-r border-gray-200 flex flex-col">
            {/* Header - Compact */}
            <div
                className="p-4 text-white border-b border-blue-600"
                style={{ background: gradients.dark }}
            >
                <h3 className="text-sm font-semibold mb-1">Merge Fields</h3>
                <p className="text-blue-100 text-xs opacity-90">
                    Drag & drop or click to insert fields
                </p>
            </div>

            {/* Search - Compact */}
            <div className="p-3 border-b border-gray-200">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search fields..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-400 pl-9"
                    />
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Categories - More Compact */}
            <div className="p-3 border-b border-gray-200 bg-gray-50">
                <div className="flex flex-wrap gap-1">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                                }`}
                            type="button"
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Fields List - Compact with Drag & Drop */}
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
                {filteredFields.length ? filteredFields.map(field => {
                    const category = getFieldCategory(field.id);
                    const isDisabled = !isEditorReady;

                    return (
                        <div
                            key={field.id}
                            draggable={!isDisabled}
                            onDragStart={(e) => handleDragStart(e, field)}
                            onDragEnd={handleDragEnd}
                            onClick={() => handleClick(field.id)}
                            className={`
                                w-full p-3 rounded-lg text-left transition-all duration-200 cursor-pointer
                                ${isDisabled
                                    ? 'bg-gray-100 cursor-not-allowed opacity-50'
                                    : 'bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 hover:shadow-sm draggable-field'
                                }
                                ${draggedField?.id === field.id ? 'bg-blue-100 border-blue-300' : ''}
                            `}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm flex-shrink-0">{fieldIcons[category]}</span>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-800 text-xs mb-1 truncate flex items-center gap-1">
                                        {field.label}
                                        {!isDisabled && (
                                            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                ↳
                                            </span>
                                        )}
                                    </div>
                                    <code className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-300 font-mono truncate block">
                                        {`${field.sample}`}
                                    </code>
                                </div>
                                {!isDisabled && (
                                    <div className="text-gray-400 opacity-60">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                }) : (
                    <div className="text-center py-6 text-gray-500">
                        <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <p className="text-sm">No fields found</p>
                        <p className="text-xs mt-1">Try a different search</p>
                    </div>
                )}
            </div>

            {/* Footer with helpful info */}
            <div className="p-2 border-t border-gray-200 bg-gray-50">
                <p className="text-xs text-gray-500 text-center">
                    {filteredFields.length} fields • Drag to editor
                </p>
            </div>
        </div>
    );
};

export default MergeFieldsPanel;
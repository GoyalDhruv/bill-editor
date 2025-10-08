import React, { useState } from 'react';
import { useTheme } from '../theme/useTheme';

const MergeFieldsPanel = ({ fields, onInsertField, isEditorReady }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const { gradients } = useTheme();

    const categories = [
        { id: 'all', name: 'All Fields' },
        { id: 'customer', name: 'Customer Info' },
        { id: 'company', name: 'Company Info' },
        { id: 'financial', name: 'Financial' },
        { id: 'dates', name: 'Dates' }
    ];

    const getFieldCategory = (fieldId) => {
        if (fieldId.includes('customer') || fieldId.includes('name') || fieldId.includes('address'))
            return 'customer';
        if (fieldId.includes('company')) return 'company';
        if (fieldId.includes('amount') || fieldId.includes('total') || fieldId.includes('subtotal') || fieldId.includes('tax'))
            return 'financial';
        if (fieldId.includes('date')) return 'dates';
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

    return (
        <div className="w-80 max-h-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
            {/* Header */}
            <div
                className="p-6 text-white"
                style={{ background: gradients.dark }}
            >
                <h3 className="text-lg font-bold mb-2">Merge Fields</h3>
                <p className="text-blue-100 text-sm opacity-90">
                    Click to insert field placeholders
                </p>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-200">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search fields..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-800 placeholder-gray-400 pl-10"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none select-none">
                        🔍
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="p-4 border-b border-gray-200">
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${selectedCategory === category.id
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            type="button"
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Fields List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" role="list">
                {filteredFields.length ? filteredFields.map(field => {
                    const category = getFieldCategory(field.id);
                    return (
                        <button
                            key={field.id}
                            onClick={() => onInsertField(field.id)}
                            disabled={!isEditorReady}
                            className={`
                w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105
                ${!isEditorReady
                                    ? 'bg-gray-100 cursor-not-allowed opacity-50'
                                    : 'bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                                }
              `}
                            type="button"
                            role="listitem"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-lg">{fieldIcons[category]}</span>
                                        <span className="font-semibold text-gray-800 text-sm">{field.label}</span>
                                    </div>
                                    <code className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded border border-red-200 font-mono select-text">
                                        {`{{${field.id}}}`}
                                    </code>
                                </div>
                                <div className={`text-lg transition-opacity duration-200 ${isEditorReady ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
                                    →
                                </div>
                            </div>
                        </button>
                    );
                }) : (
                    <div className="text-center py-8 text-gray-500 select-none">
                        <div className="text-4xl mb-2" aria-hidden="true">🔍</div>
                        <p>No fields found</p>
                        <p className="text-sm">Try changing your search or category</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MergeFieldsPanel;
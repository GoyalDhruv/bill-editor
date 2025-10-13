// Updated TemplateGallery with TemplatePreview component - Simplified version
import React from 'react';
import TemplatePreview from './TemplatePreview';

const TemplateGallery = ({ templates, onSelectTemplate, currentTemplate }) => {
    const getTypeColor = (type) => {
        const colors = {
            'Professional': 'from-blue-500 to-blue-600',
            'Minimal': 'from-green-500 to-green-600',
            'Creative': 'from-purple-500 to-purple-600',
            'Custom': 'from-orange-500 to-orange-600',
            'Business': 'from-indigo-500 to-indigo-600'
        };
        return colors[type] || 'from-gray-500 to-gray-600';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Invoice Templates
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose from professionally designed templates. Perfect for any business needs.
                    </p>
                </div>

                {/* Action Bar */}
                {/* <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Template Gallery</h2>
                        <p className="text-gray-600">Select a template to get started</p>
                    </div>
                </div> */}

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className={`bg-white rounded-2xl shadow-xl border-2 overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl ${currentTemplate?.id === template.id
                                ? 'border-blue-500 ring-4 ring-blue-500 scale-105'
                                : 'border-gray-100 hover:scale-105 hover:border-blue-300'
                                }`}
                            onClick={() => onSelectTemplate(template)}
                        >
                            {/* Template Preview - Increased Height */}
                            <div className="h-64 relative bg-gray-50 overflow-hidden">
                                <TemplatePreview template={template} />

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className={`bg-gradient-to-r ${getTypeColor(template.type)} text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                                        {template.type}
                                    </span>
                                </div>

                                {currentTemplate?.id === template.id && (
                                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                                        <span>✓</span>
                                        Selected
                                    </div>
                                )}
                            </div>

                            {/* Template Info */}
                            <div className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">{template.name}</h3>
                                        <p className="text-gray-600 text-sm">
                                            {template.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {templates.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📄</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Templates Available</h3>
                        <p className="text-gray-600">Please add some templates to get started</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateGallery;
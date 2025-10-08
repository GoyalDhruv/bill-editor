import React from 'react';

const TemplateGallery = ({ templates, onSelectTemplate, onSaveAsTemplate, currentTemplate }) => {
    const [showSaveModal, setShowSaveModal] = React.useState(false);
    const [newTemplateName, setNewTemplateName] = React.useState('');

    const handleSaveAsTemplate = () => {
        if (newTemplateName.trim()) {
            onSaveAsTemplate(newTemplateName.trim());
            setNewTemplateName('');
            setShowSaveModal(false);
        }
    };

    // Function to create a simple preview from template content
    const createPreview = (content) => {
        // Remove style tags and extract text for preview
        const textOnly = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        return textOnly.substring(0, 100) + '...';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Beautiful Invoice Templates
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose from professionally designed templates or create your own.
                        Perfect for any business needs.
                    </p>
                </div>

                {/* Action Bar */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Template Gallery</h2>
                        <p className="text-gray-600">Select a template to get started</p>
                    </div>
                    <button
                        onClick={() => setShowSaveModal(true)}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-0"
                    >
                        <span>💾</span>
                        Save Current as Template
                    </button>
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden cursor-pointer transform transition-all duration-500 hover:shadow-2xl ${currentTemplate?.id === template.id
                                    ? 'ring-4 ring-blue-500 scale-105'
                                    : 'hover:scale-105'
                                }`}
                            onClick={() => onSelectTemplate(template)}
                        >
                            {/* Template Preview */}
                            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center">
                                <div className="text-center p-4">
                                    <div className="text-3xl mb-2">📄</div>
                                    <h3 className="font-semibold text-gray-800">{template.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{template.type}</p>
                                </div>
                                {currentTemplate?.id === template.id && (
                                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                        ✓ Selected
                                    </div>
                                )}
                            </div>

                            {/* Template Info */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-gray-800">{template.name}</h3>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                        {template.type}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                                <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                                    {createPreview(template.content)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Save Template Modal */}
                {showSaveModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md w-full p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Save as New Template</h3>
                            <input
                                type="text"
                                placeholder="Enter template name..."
                                value={newTemplateName}
                                onChange={(e) => setNewTemplateName(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-800 placeholder-gray-400 mb-6"
                                autoFocus
                            />
                            <div className="flex gap-3 justify-end">
                                <button
                                    onClick={() => setShowSaveModal(false)}
                                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-0"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveAsTemplate}
                                    disabled={!newTemplateName.trim()}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Save Template
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateGallery;
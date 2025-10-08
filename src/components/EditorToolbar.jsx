import React from 'react';
import Button from './UI/Button';

const EditorToolbar = ({
    onExportPDF,
    onPrint,
    onShowTemplates,
    currentTemplate,
    isExporting
}) => {
    return (
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left Section */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white bg-opacity-20 p-2 rounded-xl">
                                <span className="text-2xl">📄</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Professional Invoice Editor</h1>
                                <p className="text-blue-100 text-sm opacity-90">
                                    {currentTemplate?.name || 'No template selected'}
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-xl">
                            <span className="text-sm text-blue-100">Template:</span>
                            <span className="font-semibold text-white">
                                {currentTemplate?.type || 'Custom'}
                            </span>
                        </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            onClick={onShowTemplates}
                            className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-0"
                        >
                            <span className="mr-2">🎨</span>
                            Templates
                        </Button>

                        <Button
                            variant="success"
                            onClick={onExportPDF}
                            className="shadow-lg"
                            loading={isExporting}
                            disabled={isExporting}
                        >
                            <span className="mr-2">📥</span>
                            {isExporting ? 'Exporting...' : 'Export PDF'}
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={onPrint}
                        >
                            <span className="mr-2">🖨️</span>
                            Print
                        </Button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center gap-6 mt-4 text-sm text-blue-100">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Professional Editor</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>🖼️</span>
                        <span>Drag to resize images & tables</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>💾</span>
                        <span>All changes saved automatically</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorToolbar;
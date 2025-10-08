import React from 'react';
import Button from './UI/Button';
import { useTheme } from '../theme/useTheme';

const EditorToolbar = ({
    onExportPDF,
    onPrint,
    onShowTemplates,
    currentTemplate,
    isExporting,
}) => {
    const { gradients } = useTheme();

    return (
        <div
            className="text-white shadow-2xl border-b border-white/10"
            style={{
                background: gradients.dark
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-2">
                {/* Main Header */}
                <div className="flex items-center justify-between">
                    {/* Left Section - Brand & Info */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3 rounded-2xl shadow-lg"
                                style={{
                                    background: gradients.primary
                                }}
                            >
                                <span className="text-2xl">✨</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-clip-text">
                                    InvoiceCraft Pro
                                </h1>
                                <p className="text-blue-200/80 text-sm font-medium">
                                    {currentTemplate?.name || 'Select a template to begin'}
                                </p>
                            </div>
                        </div>

                        {/* Template Info Badge */}
                        <div className="hidden lg:flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-white/90">Template:</span>
                            <span className="font-semibold text-white">
                                {currentTemplate?.type || 'Custom'}
                            </span>
                        </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex items-center gap-3">
                        {/* Quick Actions */}

                        <Button
                            variant="secondary"
                            onClick={onShowTemplates}
                            className="group"
                        >
                            <span className="mr-2 text-lg">🎨</span>
                            Templates
                            {/* <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                        </Button>

                        <Button
                            variant="success"
                            onClick={onExportPDF}
                            loading={isExporting}
                            disabled={isExporting}
                            className="group"
                        >
                            <span className="mr-2 text-lg">📥</span>
                            {isExporting ? 'Exporting...' : 'Export PDF'}
                            {/* <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↓</span> */}
                        </Button>

                        <Button
                            variant="primary"
                            onClick={onPrint}
                            className="group"
                        >
                            <span className="mr-2 text-lg">🖨️</span>
                            Print
                            {/* <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">⎙</span> */}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorToolbar;
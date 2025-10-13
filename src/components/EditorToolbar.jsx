import React from 'react';
import Button from './UI/Button';
import { useTheme } from '../theme/useTheme';

const EditorToolbar = ({
    onExportPDF,
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
            <div className="w-full mx-auto px-3 sm:px-4 lg:px-6 py-2">
                {/* Main Header */}
                <div className="flex items-center justify-between">
                    {/* Left Section - Brand & Info */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                            <div
                                className="p-2 sm:p-3 rounded-xl lg:rounded-2xl shadow-lg"
                                style={{
                                    background: gradients.primary
                                }}
                            >
                                <span className="text-xl sm:text-2xl">✨</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-clip-text">
                                    InvoiceCraft Pro
                                </h1>
                                <p className="text-blue-200/80 text-xs sm:text-sm font-medium">
                                    {currentTemplate?.name || 'Select a template to begin'}
                                </p>
                            </div>
                            <div className="sm:hidden">
                                <h1 className="text-base font-bold">InvoiceCraft</h1>
                            </div>
                        </div>

                        {/* Template Info Badge - Hidden on mobile */}
                        <div className="hidden lg:flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-white/90">Template:</span>
                            <span className="font-semibold text-white">
                                {currentTemplate?.type || 'Custom'}
                            </span>
                        </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Templates Button */}
                        <Button
                            variant="secondary"
                            onClick={onShowTemplates}
                            className="group px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2"
                            size="sm"
                        >
                            <span className="mr-1 sm:mr-2 text-base sm:text-lg">🎨</span>
                            <span className="hidden sm:inline">Templates</span>
                            <span className="sm:hidden">Temps</span>
                        </Button>

                        {/* Export PDF Button */}
                        <Button
                            variant="success"
                            onClick={onExportPDF}
                            loading={isExporting}
                            disabled={isExporting}
                            className="group px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2"
                            size="sm"
                        >
                            <span className="mr-1 sm:mr-2 text-base sm:text-lg">📥</span>
                            <span className="hidden sm:inline">
                                {isExporting ? 'Exporting...' : 'Export PDF'}
                            </span>
                            <span className="sm:hidden">
                                {isExporting ? '...' : 'PDF'}
                            </span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Template Info - Shows on mobile only */}
                <div className="lg:hidden flex items-center justify-center gap-2 mt-2 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-white/90">Template:</span>
                    <span className="text-xs font-semibold text-white">
                        {currentTemplate?.type || 'Custom'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EditorToolbar;
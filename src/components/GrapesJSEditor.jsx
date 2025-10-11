import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import newsletterPreset from 'grapesjs-preset-newsletter-v2';
import 'grapesjs/dist/css/grapes.min.css';

import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';

const injectTemplateCSS = (editor, template) => {
    if (!template || !template.style) return;
    const doc = editor.Canvas.getDocument();
    if (doc) {
        let prevTag = doc.getElementById('template-style-block');
        if (prevTag) prevTag.remove();

        const styleTag = doc.createElement('style');
        styleTag.id = 'template-style-block';
        styleTag.innerHTML = template.style;
        doc.head.appendChild(styleTag);
    }
};

const GrapesJSEditor = ({ content, onUpdate, onReady, currentTemplate }) => {
    const editorRef = useRef(null);
    const containerRef = useRef(null);

    // Handle drop from merge fields panel
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const fieldData = e.dataTransfer.getData('text/plain');
        if (fieldData && editorRef.current) {
            const editor = editorRef.current;
            const canvas = editor.Canvas;
            const frame = canvas.getFrameEl();
            const frameRect = frame.getBoundingClientRect();

            // Calculate position relative to the canvas
            const x = e.clientX - frameRect.left;
            const y = e.clientY - frameRect.top;

            // Add component at drop position
            const component = editor.Components.addComponent({
                type: 'text',
                content: fieldData,
                style: {
                    'position': 'absolute',
                    'left': `${x}px`,
                    'top': `${y}px`,
                    'padding': '4px 8px',
                    'background': '#f3f4f6',
                    'border': '1px dashed #d1d5db',
                    'border-radius': '4px',
                    'font-family': 'monospace',
                    'font-size': '14px',
                    'color': '#374151',
                    'z-index': 1000
                }
            });

            // Select the new component
            editor.select(component);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    };

    // INIT GrapesJS once
    useEffect(() => {
        let isMounted = true;
        let _editor = null;
        if (!editorRef.current && containerRef.current) {
            _editor = grapesjs.init({
                container: containerRef.current,
                fromElement: false,
                height: '100%',
                plugins: [newsletterPreset],
                pluginsOpts: { [newsletterPreset]: {} },
                components: content || '',
                storageManager: { autoload: false },
            });
            editorRef.current = _editor;

            _editor.on('update', () => {
                if (isMounted) onUpdate && onUpdate(_editor.getHtml());
            });

            _editor.on('load', () => {
                injectTemplateCSS(_editor, currentTemplate);

                // Add drop event listener to the canvas
                const canvas = _editor.Canvas;
                const frame = canvas.getFrameEl();
                if (frame) {
                    frame.addEventListener('drop', handleDrop);
                    frame.addEventListener('dragover', handleDragOver);
                }
            });

            onReady && onReady(_editor);
        }

        return () => {
            if (editorRef.current) {
                // Clean up event listeners
                const canvas = editorRef.current.Canvas;
                const frame = canvas?.getFrameEl();
                if (frame) {
                    frame.removeEventListener('drop', handleDrop);
                    frame.removeEventListener('dragover', handleDragOver);
                }

                try { editorRef.current.destroy(); } catch (e) { }
                editorRef.current = null;
            }
            isMounted = false;
        };
        // Only run once on mount/unmount!
        // eslint-disable-next-line
    }, []);

    // CSS Inject on template change
    useEffect(() => {
        if (editorRef.current && currentTemplate) {
            injectTemplateCSS(editorRef.current, currentTemplate);
        }
    }, [currentTemplate]);

    // Content update (for when content or template changes)
    useEffect(() => {
        if (editorRef.current && content) {
            const html = editorRef.current.getHtml();
            if (html !== content) {
                editorRef.current.setComponents(content);
                setTimeout(() => {
                    injectTemplateCSS(editorRef.current, currentTemplate);
                }, 100);
            }
        }
    }, [content, currentTemplate]);

    // Undo/Redo handlers
    const undo = () => editorRef.current && editorRef.current.runCommand('core:undo');
    const redo = () => editorRef.current && editorRef.current.runCommand('core:redo');

    // Keyboard shortcuts for undo/redo
    useEffect(() => {
        const handler = (e) => {
            const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
            const ctrlKey = isMac ? e.metaKey : e.ctrlKey;
            if (ctrlKey && e.key.toLowerCase() === 'z') {
                e.preventDefault();
                e.shiftKey ? redo() : undo();
            } else if (ctrlKey && e.key.toLowerCase() === 'y') {
                e.preventDefault();
                redo();
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <div className="w-full max-w-full overflow-hidden flex flex-col h-full">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-2 p-3 bg-white border-b border-gray-200">
                <button
                    onClick={undo}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                >
                    <ArrowUturnLeftIcon className="w-4 h-4" />
                    <span>Undo</span>
                </button>
                <button
                    onClick={redo}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                >
                    <ArrowUturnRightIcon className="w-4 h-4" />
                    <span>Redo</span>
                </button>
                <div className="ml-auto text-xs text-gray-500">
                    Drag merge fields from the left panel
                </div>
            </div>
            {/* Editor */}
            <div
                ref={containerRef}
                className="flex-1 w-full border border-gray-300 rounded-b-lg overflow-hidden bg-white"
            />
        </div>
    );
};

export default GrapesJSEditor;
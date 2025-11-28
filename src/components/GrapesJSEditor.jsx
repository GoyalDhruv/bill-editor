// import React, { useEffect, useRef } from 'react';
// import grapesjs from 'grapesjs';
// import newsletterPreset from 'grapesjs-preset-newsletter-v2';
// import 'grapesjs/dist/css/grapes.min.css';
// import pluginTable from 'grapesjs-table';
// import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';

// const injectTemplateCSS = (editor, template) => {
//     if (!template || !template.style) return;
//     const doc = editor.Canvas.getDocument();
//     if (doc) {
//         let prevTag = doc.getElementById('template-style-block');
//         if (prevTag) prevTag.remove();

//         const styleTag = doc.createElement('style');
//         styleTag.id = 'template-style-block';
//         styleTag.innerHTML = template.style;
//         doc.head.appendChild(styleTag);
//     }
// };

// const GrapesJSEditor = ({ content, onUpdate, onReady, currentTemplate }) => {
//     const editorRef = useRef(null);
//     const containerRef = useRef(null);

//     // Handle merge field drop
//     const handleDrop = (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         const fieldData = e.dataTransfer.getData('text/plain');
//         if (fieldData && editorRef.current) {
//             const editor = editorRef.current;
//             const canvas = editor.Canvas;
//             const frame = canvas.getFrameEl();
//             const frameRect = frame.getBoundingClientRect();

//             const x = e.clientX - frameRect.left;
//             const y = e.clientY - frameRect.top;

//             const component = editor.Components.addComponent({
//                 type: 'text',
//                 content: fieldData,
//                 style: {
//                     position: 'absolute',
//                     left: `${x}px`,
//                     top: `${y}px`,
//                     padding: '8px 12px',
//                     background: '#f0f4ff',
//                     border: '2px dashed #3b82f6',
//                     'border-radius': '6px',
//                     'font-family': 'monospace',
//                     'font-size': '13px',
//                     color: '#1e40af',
//                     'font-weight': '600',
//                     'z-index': 1000,
//                 },
//             });

//             editor.select(component);
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//         e.dataTransfer.dropEffect = 'copy';
//     };

//     // Initialize GrapesJS
//     useEffect(() => {
//         let isMounted = true;
//         let _editor = null;

//         if (!editorRef.current && containerRef.current) {
//             _editor = grapesjs.init({
//                 container: containerRef.current,
//                 height: '100%',
//                 plugins: [newsletterPreset, pluginTable],
//                 pluginsOpts: { [newsletterPreset]: {} },
//                 components: content || '',
//                 storageManager: { autoload: false },
//             });
//             editorRef.current = _editor;

//             // Custom table cell styling
//             _editor.DomComponents.addType('td', {
//                 isComponent: (el) => el.tagName === 'TD',
//                 model: {
//                     defaults: {
//                         resizable: {
//                             cr: 1,
//                             bc: 1,
//                         },
//                         stylable: true,
//                         style: {
//                             border: '1px solid #e5e7eb',
//                             padding: '12px',
//                             'min-width': '80px',
//                             'min-height': '40px',
//                         },
//                     },
//                 },
//             });

//             _editor.DomComponents.addType('th', {
//                 isComponent: (el) => el.tagName === 'TH',
//                 model: {
//                     defaults: {
//                         resizable: {
//                             cr: 1,
//                             bc: 1,
//                         },
//                         stylable: true,
//                         style: {
//                             border: '1px solid #e5e7eb',
//                             padding: '12px',
//                             'min-width': '80px',
//                             'min-height': '40px',
//                             'background-color': '#f9fafb',
//                             'font-weight': '600',
//                         },
//                     },
//                 },
//             });

//             _editor.on('update', () => {
//                 if (isMounted) onUpdate && onUpdate(_editor.getHtml());
//             });

//             _editor.on('load', () => {
//                 injectTemplateCSS(_editor, currentTemplate);
//                 const frame = _editor.Canvas.getFrameEl();
//                 if (frame) {
//                     frame.addEventListener('drop', handleDrop);
//                     frame.addEventListener('dragover', handleDragOver);
//                 }
//             });

//             onReady && onReady(_editor);
//         }

//         return () => {
//             if (editorRef.current) {
//                 const frame = editorRef.current.Canvas?.getFrameEl();
//                 if (frame) {
//                     frame.removeEventListener('drop', handleDrop);
//                     frame.removeEventListener('dragover', handleDragOver);
//                 }
//                 try {
//                     editorRef.current.destroy();
//                 } catch { }
//                 editorRef.current = null;
//             }
//             isMounted = false;
//         };
//     }, []);

//     // Inject CSS on template change
//     useEffect(() => {
//         if (editorRef.current && currentTemplate) {
//             injectTemplateCSS(editorRef.current, currentTemplate);
//         }
//     }, [currentTemplate]);

//     // Update content
//     useEffect(() => {
//         if (editorRef.current && content) {
//             const html = editorRef.current.getHtml();
//             if (html !== content) {
//                 editorRef.current.setComponents(content);
//                 setTimeout(() => injectTemplateCSS(editorRef.current, currentTemplate), 100);
//             }
//         }
//     }, [content, currentTemplate]);

//     const undo = () => editorRef.current?.runCommand('core:undo');
//     const redo = () => editorRef.current?.runCommand('core:redo');

//     // Keyboard shortcuts
//     useEffect(() => {
//         const handler = (e) => {
//             const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
//             const ctrlKey = isMac ? e.metaKey : e.ctrlKey;
//             if (ctrlKey && e.key.toLowerCase() === 'z') {
//                 e.preventDefault();
//                 e.shiftKey ? redo() : undo();
//             } else if (ctrlKey && e.key.toLowerCase() === 'y') {
//                 e.preventDefault();
//                 redo();
//             }
//         };
//         window.addEventListener('keydown', handler);
//         return () => window.removeEventListener('keydown', handler);
//     }, []);

//     return (
//         <div className="w-full max-w-full overflow-hidden flex flex-col h-full">
//             {/* Toolbar */}
//             <div className="flex flex-wrap items-center gap-3 p-4 bg-white border-b border-gray-200 shadow-sm">
//                 <button
//                     onClick={undo}
//                     className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
//                 >
//                     <ArrowUturnLeftIcon className="w-4 h-4" />
//                     <span>Undo</span>
//                 </button>

//                 <button
//                     onClick={redo}
//                     className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
//                 >
//                     <ArrowUturnRightIcon className="w-4 h-4" />
//                     <span>Redo</span>
//                 </button>

//                 <div className="flex-1 border-l border-gray-200 pl-3 ml-auto">
//                     <p className="text-xs text-gray-500 font-medium">
//                         💡 Drag merge fields from the left panel to insert dynamic data
//                     </p>
//                 </div>
//             </div>

//             {/* Editor Container */}
//             <div
//                 ref={containerRef}
//                 className="flex-1 w-full border border-gray-300 overflow-hidden bg-white"
//             />
//         </div>
//     );
// };

// export default GrapesJSEditor;


import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import newsletterPreset from 'grapesjs-preset-newsletter-v2';
import 'grapesjs/dist/css/grapes.min.css';
import pluginTable from 'grapesjs-table';
import {
    Box,
    Button,
    Typography,
    useTheme,
    alpha,
    Toolbar,
    AppBar,
} from '@mui/material';
import {
    Undo as UndoIcon,
    Redo as RedoIcon,
    TipsAndUpdates as TipsIcon,
} from '@mui/icons-material';

const injectTemplateCSS = (editor, template) => {
    if (!editor || !editor.Canvas) {
        console.warn('Editor or Canvas not available');
        return;
    }

    if (!template || !template.style) return;

    try {
        const doc = editor.Canvas.getDocument();
        if (doc && doc.head) {
            let prevTag = doc.getElementById('template-style-block');
            if (prevTag) prevTag.remove();

            const styleTag = doc.createElement('style');
            styleTag.id = 'template-style-block';
            styleTag.innerHTML = template.style;
            doc.head.appendChild(styleTag);
        }
    } catch (error) {
        console.warn('Error injecting template CSS:', error);
    }
};

const GrapesJSEditor = ({ content, onUpdate, onReady, currentTemplate }) => {
    const editorRef = useRef(null);
    const containerRef = useRef(null);
    const theme = useTheme();

    // Handle merge field drop
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const fieldData = e.dataTransfer.getData('text/plain');
        if (fieldData && editorRef.current) {
            const editor = editorRef.current;
            const canvas = editor.Canvas;
            const frame = canvas.getFrameEl();
            const frameRect = frame.getBoundingClientRect();

            const x = e.clientX - frameRect.left;
            const y = e.clientY - frameRect.top;

            const component = editor.Components.addComponent({
                type: 'text',
                content: fieldData,
                style: {
                    position: 'absolute',
                    left: `${x}px`,
                    top: `${y}px`,
                    padding: '8px 12px',
                    background: alpha(theme.palette.primary.main, 0.1),
                    border: `2px dashed ${theme.palette.primary.main}`,
                    'border-radius': '6px',
                    'font-family': 'monospace',
                    'font-size': '13px',
                    color: theme.palette.primary.dark,
                    'font-weight': '600',
                    'z-index': 1000,
                },
            });

            editor.select(component);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    };

    // Initialize GrapesJS
    useEffect(() => {
        let isMounted = true;
        let _editor = null;

        if (!editorRef.current && containerRef.current) {
            _editor = grapesjs.init({
                container: containerRef.current,
                height: '100%',
                plugins: [newsletterPreset, pluginTable],
                pluginsOpts: { [newsletterPreset]: {} },
                components: content || '',
                storageManager: { autoload: false },
                canvas: {
                    styles: [
                        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
                    ],
                },
            });
            editorRef.current = _editor;

            // Custom table cell styling
            _editor.DomComponents.addType('td', {
                isComponent: (el) => el.tagName === 'TD',
                model: {
                    defaults: {
                        resizable: {
                            cr: 1,
                            bc: 1,
                        },
                        stylable: true,
                        style: {
                            border: `1px solid ${theme.palette.divider}`,
                            padding: '12px',
                            'min-width': '80px',
                            'min-height': '40px',
                            'font-family': 'Inter, sans-serif',
                        },
                    },
                },
            });

            _editor.DomComponents.addType('th', {
                isComponent: (el) => el.tagName === 'TH',
                model: {
                    defaults: {
                        resizable: {
                            cr: 1,
                            bc: 1,
                        },
                        stylable: true,
                        style: {
                            border: `1px solid ${theme.palette.divider}`,
                            padding: '12px',
                            'min-width': '80px',
                            'min-height': '40px',
                            'background-color': theme.palette.grey[50],
                            'font-weight': '600',
                            'font-family': 'Inter, sans-serif',
                        },
                    },
                },
            });

            _editor.on('update', () => {
                if (isMounted) onUpdate && onUpdate(_editor.getHtml());
            });

            _editor.on('load', () => {
                injectTemplateCSS(_editor, currentTemplate);
                const frame = _editor.Canvas.getFrameEl();
                if (frame) {
                    frame.addEventListener('drop', handleDrop);
                    frame.addEventListener('dragover', handleDragOver);
                }
            });

            onReady && onReady(_editor);
        }

        return () => {
            if (editorRef.current) {
                const frame = editorRef.current.Canvas?.getFrameEl();
                if (frame) {
                    frame.removeEventListener('drop', handleDrop);
                    frame.removeEventListener('dragover', handleDragOver);
                }
                try {
                    editorRef.current.destroy();
                } catch (error) {
                    console.warn('Error destroying editor:', error);
                }
                editorRef.current = null;
            }
            isMounted = false;
        };
    }, []);

    // Inject CSS on template change
    useEffect(() => {
        if (editorRef.current && currentTemplate) {
            injectTemplateCSS(editorRef.current, currentTemplate);
        }
    }, [currentTemplate]);

    // Update content
    useEffect(() => {
        if (editorRef.current && content) {
            const html = editorRef.current.getHtml();
            if (html !== content) {
                editorRef.current.setComponents(content);
                setTimeout(() => {
                    if (editorRef.current && currentTemplate) {
                        injectTemplateCSS(editorRef.current, currentTemplate);
                    }
                }, 100);
            }
        }
    }, [content, currentTemplate]);

    const undo = () => editorRef.current?.runCommand('core:undo');
    const redo = () => editorRef.current?.runCommand('core:redo');

    // Keyboard shortcuts
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
        <Box sx={{
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: 'background.default',
        }}>
            {/* Toolbar */}
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: 'background.paper',
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    color: 'text.primary',
                }}
            >
                <Toolbar sx={{
                    gap: 2,
                    py: 1,
                    minHeight: '64px !important',
                }}>
                    <Button
                        onClick={undo}
                        startIcon={<UndoIcon />}
                        variant="outlined"
                        size="small"
                        sx={{
                            fontWeight: 600,
                            borderRadius: 2,
                            px: 2,
                            py: 1,
                            borderColor: theme.palette.grey[300],
                            color: 'text.primary',
                            backgroundColor: 'background.paper',
                            '&:hover': {
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[400],
                                transform: 'translateY(-1px)',
                            },
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        Undo
                    </Button>

                    <Button
                        onClick={redo}
                        startIcon={<RedoIcon />}
                        variant="outlined"
                        size="small"
                        sx={{
                            fontWeight: 600,
                            borderRadius: 2,
                            px: 2,
                            py: 1,
                            borderColor: theme.palette.grey[300],
                            color: 'text.primary',
                            backgroundColor: 'background.paper',
                            '&:hover': {
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[400],
                                transform: 'translateY(-1px)',
                            },
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        Redo
                    </Button>

                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <Typography
                            variant="body2"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                color: 'text.secondary',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                            }}
                        >
                            <TipsIcon
                                fontSize="small"
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontSize: '1rem',
                                }}
                            />
                            Drag merge fields from the left panel to insert dynamic data
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Editor Container */}
            <Box
                ref={containerRef}
                sx={{
                    flex: 1,
                    width: '100%',
                    border: `1px solid ${theme.palette.divider}`,
                    borderTop: 'none',
                    overflow: 'hidden',
                    backgroundColor: 'background.paper',
                    '& .gjs-editor': {
                        fontFamily: '"Inter", sans-serif !important',
                    },
                    '& .gjs-cv-canvas': {
                        backgroundColor: theme.palette.background.default,
                    },
                    '& .gjs-block': {
                        fontFamily: '"Inter", sans-serif !important',
                    },
                    '& .gjs-one-bg': {
                        backgroundColor: theme.palette.background.default,
                    },
                    '& .gjs-two-color': {
                        color: theme.palette.text.primary,
                    },
                    '& .gjs-three-bg': {
                        backgroundColor: theme.palette.primary.main,
                    },
                    '& .gjs-four-color': {
                        color: theme.palette.primary.contrastText,
                    },
                }}
            />
        </Box>
    );
};

export default GrapesJSEditor;
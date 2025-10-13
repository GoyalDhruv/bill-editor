// components/TemplatePreview.jsx
import React, { useEffect, useRef, useState } from 'react';

const TemplatePreview = ({ template }) => {
    const previewRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (previewRef.current && template) {
            const previewDiv = previewRef.current;
            
            // Clear previous content
            previewDiv.innerHTML = '';

            // Create the preview structure with better scaling for increased height
            const previewHTML = `
                <div style="
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background: white;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="
                        transform: scale(0.5);
                        transform-origin: center center;
                        width: 200%;
                        height: 200%;
                        background: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">
                        <style>${template.style || ''}</style>
                        <div style="width: 800px; height: 600px; background: white; transform: scale(0.8);">
                            ${template.content}
                        </div>
                    </div>
                </div>
            `;

            previewDiv.innerHTML = previewHTML;
            
            // Simulate loading for better UX
            const timer = setTimeout(() => {
                setIsLoaded(true);
            }, 300);

            return () => clearTimeout(timer);
        }

        return () => {
            setIsLoaded(false);
        };
    }, [template]);

    return (
        <div className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden border border-gray-300">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-2 text-gray-600 text-sm">Loading preview...</span>
                </div>
            )}
            <div
                ref={previewRef}
                className={`w-full h-full ${isLoaded ? 'block' : 'hidden'}`}
            />
            {/* Overlay for better visual appearance */}
            <div className="absolute inset-0 border-2 border-white rounded-lg pointer-events-none" />
        </div>
    );
};

export default TemplatePreview;
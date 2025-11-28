import React, { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';

const TemplatePreview = ({ template }) => {
  const previewRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (previewRef.current && template) {
      const previewDiv = previewRef.current;
      previewDiv.innerHTML = '';

      const previewHTML = `
        <div style="
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #ffffff;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
        ">
          <div style="
            transform: scale(0.5);
            transform-origin: center center;
            width: 200%;
            height: 200%;
          ">
            <style>${template.style || ''}</style>
            <div style="
              width: 800px;
              height: 600px;
              background: #ffffff;
              margin: 0;
              padding: 0;
              box-shadow: ${theme.shadows[4]};
              border-radius: 8px;
              border: 1px solid ${theme.palette.divider};
            ">
              ${template.content}
            </div>
          </div>
        </div>
      `;

      previewDiv.innerHTML = previewHTML;

      const timer = setTimeout(() => setIsLoaded(true), 300);
      return () => clearTimeout(timer);
    }

    return () => setIsLoaded(false);
  }, [template, theme]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 256,
        borderRadius: 2,
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.action.hover} 100%)`,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[1],
      }}
    >
      {!isLoaded && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 10,
            borderRadius: 2,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress
              size={24}
              sx={{
                color: theme.palette.primary.main,
                mb: 1,
              }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              Loading preview...
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        ref={previewRef}
        sx={{
          width: '100%',
          height: '100%',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          borderRadius: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          border: `1px solid ${theme.palette.common.white}`,
          borderRadius: 2,
          opacity: 0.6,
        }}
      />
    </Box>
  );
};

export default TemplatePreview;
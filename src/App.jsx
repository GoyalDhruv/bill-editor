import { useState, useEffect, useRef } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  CircularProgress,
  Typography,
  Backdrop,
  Button,
} from '@mui/material';
import { orange } from '@mui/material/colors';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import PaletteIcon from '@mui/icons-material/Palette';

// Components
import Navbar from './components/layout/Navbar';
import TemplateGallery from './components/TemplateGallery';
import MergeFieldsPanel from './components/MergeFieldsPanel';
import GrapesJSEditor from './components/GrapesJSEditor';

// Data and Utils
import { PREMIUM_TEMPLATES } from './templates/templateComponents';
import { DUMMY_MERGE_FIELDS } from './templates/templateData';
import { replacePlaceholders } from './utils/replacePlaceholders';
import useThemeColor from './hooks/useThemeColor';

// Create theme with dynamic color
const createAppTheme = (mainColor) => {
  return createTheme({
    palette: {
      primary: {
        main: mainColor,
        light: orange[100],
        dark: orange[900],
      },
      secondary: {
        main: '#64748b',
      },
      background: {
        default: '#f8fafc',
        paper: '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
      borderRadius: 8,
    },
  });
};

const App = () => {
  // State Management
  const [appState, setAppState] = useState('gallery');
  const [editorContent, setEditorContent] = useState('');
  const [mergeData, setMergeData] = useState({});
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const editorRef = useRef(null);
  const { themeColor, mainColor } = useThemeColor();
  const theme = createAppTheme(mainColor);

  // Initialize data (your existing initialization code)
  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));

      const initialMergeData = {
        // Customer Info
        customerName: 'Global Enterprises LLC',
        customerEmail: 'billing@globalent.com',
        customerPhone: '+1 (555) 123-4567',
        customerAddress: '456 Corporate Blvd, New York, NY 10001',
        customerCity: 'New York',
        customerState: 'NY',
        customerZip: '10001',
        customerCountry: 'USA',
        customerWebsite: 'www.globalent.com',
        customerTaxId: '98-7654321',

        // Company Info
        companyName: 'TechCorp Solutions Inc.',
        companyEmail: 'invoicing@techcorp.com',
        companyPhone: '+1 (555) 987-6543',
        companyAddress: '123 Business Ave, Suite 100, San Francisco, CA 94102',
        companyCity: 'San Francisco',
        companyState: 'CA',
        companyZip: '94102',
        companyCountry: 'USA',
        companyWebsite: 'www.techcorp.com',
        companyTaxId: '12-3456789',
        companyBankName: 'Bank of America',
        companyAccountNumber: '****1234',
        companyRoutingNumber: '021000322',

        // Invoice Details
        billNumber: 'INV-2025-0001',
        billDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        paymentTerms: 'Net 30',
        poNumber: 'PO-2025-001',
        projectName: 'Website Redesign Project',

        // Financial
        subtotal: '$6,600.00',
        taxAmount: '$561.00',
        taxRate: '8.5%',
        discountAmount: '$0.00',
        discountRate: '0%',
        shippingAmount: '$0.00',
        totalAmount: '$7,161.00',
        amountPaid: '$0.00',
        balanceDue: '$7,161.00',
        currency: 'USD',

        // Items
        invoiceItems: `
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 16px;">
                  <div style="font-weight: 500; color: #111827;">Website Development</div>
                  <div style="color: #6b7280; font-size: 14px;">Corporate website redesign and development</div>
                </td>
                <td style="padding: 16px; text-align: center; color: #6b7280;">1</td>
                <td style="padding: 16px; text-align: right; color: #111827;">$4,500.00</td>
                <td style="padding: 16px; text-align: right; font-weight: 600; color: #111827;">$4,500.00</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 16px;">
                  <div style="font-weight: 500; color: #111827;">SEO Optimization</div>
                  <div style="color: #6b7280; font-size: 14px;">Search engine optimization services</div>
                </td>
                <td style="padding: 16px; text-align: center; color: '#6b7280';">1</td>
                <td style="padding: 16px; text-align: right; color: #111827;">$1,200.00</td>
                <td style="padding: 16px; text-align: right; font-weight: 600; color: #111827;">$1,200.00</td>
              </tr>
            `,
        notes: 'Thank you for your business! We appreciate your timely payment.',
        terms: 'Payment due within 30 days of invoice date. Late payments subject to 1.5% monthly interest.',
        signature: '[Digital Signature]',
        preparedBy: 'John Smith',
        authorizedBy: 'Jane Doe'
      };

      setMergeData(initialMergeData);
      setIsLoading(false);
    };

    initializeData();
  }, []);

  // Template selection handler
  const handleSelectTemplate = (template) => {
    setCurrentTemplate(template);
    const substitutedContent = replacePlaceholders(template.content, mergeData);
    setEditorContent(substitutedContent);
    setAppState('editor');
  };

  const handleEditorReady = (editor) => {
    editorRef.current = editor;
    setIsEditorReady(true);
  };

  const handleEditorUpdate = (newContent) => {
    setEditorContent(newContent);
  };

  const insertMergeField = (fieldId) => {
    if (!editorRef.current) return;
    const editor = editorRef.current;
    editor.Components.addComponent({
      type: 'text',
      content: `{{${fieldId}}}`,
    });
  };

  const exportToPDF = async () => {
    if (!editorRef.current || !currentTemplate) return;
    setIsExporting(true);
    try {
      const content = editorRef.current.getHtml();

      const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                ${currentTemplate.style}
                body { 
                  margin: 0; 
                  padding: 20mm; 
                  background: white;
                  font-family: 'Inter', Arial, sans-serif;
                  font-size: 12px;
                  line-height: 1.4;
                  width: 210mm;
                  min-height: 297mm;
                  box-sizing: border-box;
                }
                * { 
                  box-sizing: border-box;
                }
              </style>
            </head>
            <body>
              ${content}
            </body>
          </html>
        `;

      const iframe = document.createElement('iframe');
      iframe.style.cssText = `
          position: fixed;
          top: -10000px;
          left: -10000px;
          width: 210mm;
          height: 297mm;
          border: none;
          visibility: hidden;
        `;

      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();

      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(iframeDoc.body, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fff',
        logging: false,
        allowTaint: true,
        foreignObjectRendering: true,
        width: 210 * 3.78,
        height: 297 * 3.78,
        windowWidth: 210 * 3.78,
        windowHeight: 297 * 3.78
      });

      document.body.removeChild(iframe);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice-${currentTemplate.name.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } catch (err) {
      console.error('Error exporting PDF:', err);
      alert('Error exporting PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleBackToGallery = () => {
    setAppState('gallery');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Loading state
  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Backdrop open={isLoading} sx={{ color: '#fff', zIndex: 9999 }}>
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress color="primary" size={60} />
            <Typography variant="h6" sx={{ mt: 2, color: 'primary.main' }}>
              Loading Invoice Editor
            </Typography>
          </Box>
        </Backdrop>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Combined Navbar with all functionality */}
        <Navbar
          appState={appState}
          onBackToGallery={handleBackToGallery}
          currentTemplate={currentTemplate}
          onExportPDF={exportToPDF}
          isExporting={isExporting}
        />

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {appState === 'gallery' ? (
            <TemplateGallery
              templates={PREMIUM_TEMPLATES}
              onSelectTemplate={handleSelectTemplate}
              currentTemplate={currentTemplate}
            />
          ) : (
            <Box sx={{ display: 'flex', flexGrow: 1, height: 'calc(100vh - 144px)' }}>
              {/* Merge Fields Sidebar */}
              <Box sx={{ display: { xs: 'none', lg: 'block' }, width: 320, flexShrink: 0 }}>
                <MergeFieldsPanel
                  fields={DUMMY_MERGE_FIELDS}
                  onInsertField={insertMergeField}
                  isEditorReady={isEditorReady}
                />
              </Box>

              {/* Editor Main Area */}
              <Box sx={{ flexGrow: 1, minWidth: 0, position: 'relative' }}>
                <GrapesJSEditor
                  content={editorContent}
                  onUpdate={handleEditorUpdate}
                  onReady={handleEditorReady}
                  currentTemplate={currentTemplate}
                />

                {/* Mobile Sidebar Toggle */}
                <Box sx={{ display: { xs: 'block', lg: 'none' }, position: 'fixed', top: 80, left: 16, zIndex: 1300 }}>
                  <Button
                    variant="contained"
                    onClick={toggleSidebar}
                    size="small"
                    startIcon={<PaletteIcon />}
                  >
                    Fields
                  </Button>
                </Box>

                {/* Mobile Sidebar Drawer */}
                {isSidebarOpen && (
                  <>
                    <Box
                      sx={{
                        display: { xs: 'block', lg: 'none' },
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(0,0,0,0.5)',
                        zIndex: 1299,
                      }}
                      onClick={toggleSidebar}
                    />
                    <Box
                      sx={{
                        display: { xs: 'block', lg: 'none' },
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: 320,
                        height: '100%',
                        bgcolor: 'background.paper',
                        borderRight: 1,
                        borderColor: 'divider',
                        zIndex: 1300,
                        overflow: 'auto',
                      }}
                    >
                      <MergeFieldsPanel
                        fields={DUMMY_MERGE_FIELDS}
                        onInsertField={insertMergeField}
                        isEditorReady={isEditorReady}
                      />
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import EditorToolbar from './components/EditorToolbar';
import TemplateGallery from './components/TemplateGallery';
import MergeFieldsPanel from './components/MergeFieldsPanel';
import { PREMIUM_TEMPLATES } from './templates/templateComponents';
import GrapesJSEditor from './components/GrapesJSEditor';
import { DUMMY_MERGE_FIELDS } from './templates/templateData';
import { replacePlaceholders } from './utils/replacePlaceholders';

const App = () => {
  const [editorContent, setEditorContent] = useState('');
  const [mergeData, setMergeData] = useState({});
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [showTemplateGallery, setShowTemplateGallery] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const editorRef = useRef(null);

  // Initialize data
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

        // Additional
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
      setCurrentTemplate(PREMIUM_TEMPLATES[0]);

      const initialContent = replacePlaceholders(PREMIUM_TEMPLATES[0].content, initialMergeData);
      setEditorContent(initialContent);
      setIsLoading(false);
    };

    initializeData();
  }, []);

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

  const handleSelectTemplate = (template) => {
    setCurrentTemplate(template);
    setShowTemplateGallery(false);

    const newContent = replacePlaceholders(template.content, mergeData);
    setEditorContent(newContent);

    if (editorRef.current) {
      editorRef.current.setContent(newContent);
    }
  };

  const handleSaveAsTemplate = (templateName) => {
    const newTemplate = {
      id: `user-${Date.now()}`,
      name: templateName,
      type: 'Custom',
      category: 'User',
      description: 'User created template',
      content: editorContent,
    };
    setCurrentTemplate(newTemplate);
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

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Loading component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading Invoice Editor</h2>
          <p className="text-gray-500">Preparing your templates and data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <EditorToolbar
        onExportPDF={exportToPDF}
        onShowTemplates={() => setShowTemplateGallery(true)}
        currentTemplate={currentTemplate}
        isExporting={isExporting}
      />

      {showTemplateGallery ? (
        <TemplateGallery
          templates={PREMIUM_TEMPLATES}
          onSelectTemplate={handleSelectTemplate}
          onSaveAsTemplate={handleSaveAsTemplate}
          currentTemplate={currentTemplate}
        />
      ) : (
        <div className="flex h-[calc(100vh-80px)]">
          {/* Merge Fields Sidebar - Hidden on small screens */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <MergeFieldsPanel
              fields={DUMMY_MERGE_FIELDS}
              onInsertField={insertMergeField}
              isEditorReady={isEditorReady}
            />
          </div>

          {/* Editor Main Area */}
          <div className="flex-1 min-w-0 w-full">
            <GrapesJSEditor
              content={editorContent}
              onUpdate={handleEditorUpdate}
              onReady={handleEditorReady}
              currentTemplate={currentTemplate}
            />

            {/* Mobile Toggle Button - Only show on small screens */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden fixed top-20 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
              <>
                <div 
                  className="lg:hidden fixed inset-0 z-40"
                  onClick={toggleSidebar}
                />
                <div className="lg:hidden fixed inset-y-0 left-0 w-80 z-50 bg-white border-r border-gray-200 overflow-hidden">
                  <MergeFieldsPanel
                    fields={DUMMY_MERGE_FIELDS}
                    onInsertField={insertMergeField}
                    isEditorReady={isEditorReady}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
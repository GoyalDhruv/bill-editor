import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import EditorToolbar from './components/EditorToolbar';
import TemplateGallery from './components/TemplateGallery';
import TinyMCEEditor from './components/TinyMCEEditor';
import MergeFieldsPanel from './components/MergeFieldsPanel';
import { PREMIUM_TEMPLATES, DUMMY_MERGE_FIELDS } from './data/templates';

// Replace placeholders with actual merge data values
function replacePlaceholders(templateHtml, mergeData) {
  return templateHtml.replace(/{{\s*([\w]+)\s*}}/g, (match, p1) => {
    return mergeData[p1] !== undefined ? mergeData[p1] : match;
  });
}

const App = () => {
  const [editorContent, setEditorContent] = useState('');
  const [mergeData, setMergeData] = useState({});
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [showTemplateGallery, setShowTemplateGallery] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const editorRef = useRef(null);

  // Initialize data with loading state
  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);

      // Simulate loading delay for better UX
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
            <td style="padding: 16px; text-align: center; color: #6b7280;">1</td>
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

      // Set initial content with placeholders replaced with actual values
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
    // Simply update the editor content - no complex reverting logic
    setEditorContent(newContent);
  };

  const insertMergeField = (fieldId) => {
    if (!editorRef.current) return;

    // Insert the merge field placeholder directly
    editorRef.current.execCommand('mceInsertContent', false, `{{${fieldId}}}`);

    // Update state to reflect the change
    const currentContent = editorRef.current.getContent();
    setEditorContent(currentContent);
  };

  const handleSelectTemplate = (template) => {
    setCurrentTemplate(template);
    setShowTemplateGallery(false);

    // Replace placeholders with actual values when switching templates
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
      content: editorContent, // Save the current content as-is
    };
    setCurrentTemplate(newTemplate);
  };

  const exportToPDF = async () => {
    if (!editorRef.current) return;
    setIsExporting(true);
    try {
      // Use the current editor content directly (it already has the values)
      const content = editorRef.current.getContent();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      tempDiv.style.cssText = `
        width: 210mm; min-height: 297mm; padding: 20mm;
        margin: 0 auto; background: white;
        font-family: 'Inter', sans-serif; font-size: 12px; line-height: 1.4;
      `;
      document.body.appendChild(tempDiv);
      const canvas = await html2canvas(tempDiv, { scale: 2, useCORS: true, backgroundColor: '#fff' });
      document.body.removeChild(tempDiv);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice-${currentTemplate.name.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } catch (err) {
      console.error(err);
      alert('Error exporting PDF');
    } finally {
      setIsExporting(false);
    }
  };

  // const handlePrint = () => {
  //   if (!editorRef.current) return;
  //   const content = editorRef.current.getContent();
  //   const printWindow = window.open('', '_blank');
  //   printWindow.document.write(`
  //     <!DOCTYPE html>
  //     <html>
  //       <head>
  //         <title>${currentTemplate.name} - Invoice</title>
  //         <style>
  //           body { font-family: 'Inter', sans-serif; margin: 0; padding: 20px; color: #374151; line-height: 1.6;}
  //           table { width: 100%; border-collapse: collapse; margin: 1em 0;}
  //           table, th, td { border: 1px solid #e5e7eb; }
  //           th, td { padding: 12px; text-align: left; }
  //           th { background: #f9fafb; }
  //           img { max-width: 100%; height: auto; }
  //         </style>
  //       </head>
  //       <body>${content}</body>
  //     </html>
  //   `);
  //   printWindow.document.close();
  //   printWindow.focus();
  //   printWindow.print();
  // };

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
        // onPrint={handlePrint}
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
        <div className="flex gap-6 p-6 max-w-7xl mx-auto">
          <div className="flex-1">
            <TinyMCEEditor
              content={editorContent}
              onUpdate={handleEditorUpdate}
              onReady={handleEditorReady}
            />
          </div>
          <MergeFieldsPanel
            fields={DUMMY_MERGE_FIELDS}
            onInsertField={insertMergeField}
            isEditorReady={isEditorReady}
          />
        </div>
      )}
    </div>
  );
};

export default App;
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jsPDF';

import { PREMIUM_TEMPLATES } from './data/templates';
import TemplateGallery from './components/TemplateGallery';
import MergeFieldsPanel from './components/MergeFieldsPanel';
import EditorToolbar from './components/EditorToolbar';
import TinyMCEEditor from './components/TinyMCEEditor';

import './index.css';

// Enhanced Merge Fields with categories
const MERGE_FIELDS = [
  // Customer Info
  { id: 'customerName', label: 'Customer Name' },
  { id: 'customerEmail', label: 'Customer Email' },
  { id: 'customerPhone', label: 'Customer Phone' },
  { id: 'customerAddress', label: 'Customer Address' },
  { id: 'customerCity', label: 'Customer City' },
  { id: 'customerZip', label: 'Customer ZIP Code' },

  // Company Info
  { id: 'companyName', label: 'Company Name' },
  { id: 'companyEmail', label: 'Company Email' },
  { id: 'companyPhone', label: 'Company Phone' },
  { id: 'companyAddress', label: 'Company Address' },
  { id: 'companyWebsite', label: 'Company Website' },
  { id: 'companyTaxId', label: 'Tax ID' },

  // Invoice Details
  { id: 'billNumber', label: 'Invoice Number' },
  { id: 'billDate', label: 'Invoice Date' },
  { id: 'dueDate', label: 'Due Date' },
  { id: 'paymentTerms', label: 'Payment Terms' },

  // Financial
  { id: 'subtotal', label: 'Subtotal Amount' },
  { id: 'taxAmount', label: 'Tax Amount' },
  { id: 'taxRate', label: 'Tax Rate' },
  { id: 'discountAmount', label: 'Discount Amount' },
  { id: 'shippingAmount', label: 'Shipping Amount' },
  { id: 'totalAmount', label: 'Total Amount' },
  { id: 'amountPaid', label: 'Amount Paid' },
  { id: 'balanceDue', label: 'Balance Due' },

  // Additional
  { id: 'invoiceItems', label: 'Invoice Items Table' },
  { id: 'notes', label: 'Notes' },
  { id: 'terms', label: 'Terms & Conditions' }
];

function App() {
  const [editorData, setEditorData] = useState(PREMIUM_TEMPLATES[0].content);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [showTemplateGallery, setShowTemplateGallery] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(PREMIUM_TEMPLATES[0]);
  const [userTemplates, setUserTemplates] = useState([]);
  const [isExporting, setIsExporting] = useState(false);

  const editorRef = useRef(null);
  const editorContainerRef = useRef(null);

  const allTemplates = [...PREMIUM_TEMPLATES, ...userTemplates];

  const handleEditorReady = (editor) => {
    editorRef.current = editor;
    setIsEditorReady(true);
  };

  const handleEditorUpdate = (content) => {
    setEditorData(content);
  };

  const insertMergeField = (fieldId) => {
    if (!editorRef.current) return;

    const editor = editorRef.current;
    editor.execCommand('mceInsertContent', false, ` {{${fieldId}}} `);
  };

  const handleSelectTemplate = (template) => {
    setEditorData(template.content);
    setCurrentTemplate(template);
    setShowTemplateGallery(false);

    // Update editor content when template changes
    if (editorRef.current) {
      editorRef.current.setContent(template.content);
    }
  };

  const handleSaveAsTemplate = (templateName) => {
    const newTemplate = {
      id: `user-${Date.now()}`,
      name: templateName,
      type: 'Custom',
      category: 'User',
      description: 'Custom template created by user',
      content: editorData
    };

    setUserTemplates(prev => [...prev, newTemplate]);
    setCurrentTemplate(newTemplate);
  };

  const exportToPDF = async () => {
    if (!editorRef.current) return;

    try {
      setIsExporting(true);

      // Get the editor content
      const content = editorRef.current.getContent();

      // Create a temporary div to render the content for PDF
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      tempDiv.style.cssText = `
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: 0 auto;
        background: white;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        line-height: 1.4;
      `;

      document.body.appendChild(tempDiv);

      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      document.body.removeChild(tempDiv);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice-${currentTemplate.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const content = editorRef.current ? editorRef.current.getContent() : editorData;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${currentTemplate.name} - Invoice</title>
          <style>
            body { 
              font-family: 'Inter', sans-serif; 
              margin: 0; 
              padding: 20px; 
              color: #374151;
              line-height: 1.6;
            }
            @media print {
              body { padding: 0; }
              @page { margin: 0; }
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 1em 0;
            }
            table, th, td {
              border: 1px solid #e5e7eb;
            }
            th, td {
              padding: 12px;
              text-align: left;
            }
            th {
              background: #f9fafb;
            }
            img {
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <EditorToolbar
        onExportPDF={exportToPDF}
        onPrint={handlePrint}
        onShowTemplates={() => setShowTemplateGallery(true)}
        currentTemplate={currentTemplate}
        isExporting={isExporting}
      />

      {showTemplateGallery ? (
        <TemplateGallery
          templates={allTemplates}
          onSelectTemplate={handleSelectTemplate}
          onSaveAsTemplate={handleSaveAsTemplate}
          currentTemplate={currentTemplate}
        />
      ) : (
        <div className="flex gap-6 p-6 max-w-7xl mx-auto">
          {/* Editor Container */}
          <div ref={editorContainerRef} className="flex-1">
            <TinyMCEEditor
              content={editorData}
              onUpdate={handleEditorUpdate}
              onReady={handleEditorReady}
            />
          </div>

          {/* Merge Fields Panel */}
          <MergeFieldsPanel
            fields={MERGE_FIELDS}
            onInsertField={insertMergeField}
            isEditorReady={isEditorReady}
          />
        </div>
      )}
    </div>
  );
}

export default App;
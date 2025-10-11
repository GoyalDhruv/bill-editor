export const DUMMY_MERGE_FIELDS = [
    // Customer Info
    { id: 'customerName', label: 'Customer Name', sample: 'Global Enterprises LLC', category: 'customer' },
    { id: 'customerEmail', label: 'Customer Email', sample: 'billing@globalent.com', category: 'customer' },
    { id: 'customerPhone', label: 'Customer Phone', sample: '+1 (555) 123-4567', category: 'customer' },
    { id: 'customerAddress', label: 'Customer Address', sample: '456 Corporate Blvd, New York, NY 10001', category: 'customer' },
    { id: 'customerCity', label: 'Customer City', sample: 'New York', category: 'customer' },
    { id: 'customerState', label: 'Customer State', sample: 'NY', category: 'customer' },
    { id: 'customerZip', label: 'Customer ZIP Code', sample: '10001', category: 'customer' },
    { id: 'customerCountry', label: 'Customer Country', sample: 'USA', category: 'customer' },
    { id: 'customerWebsite', label: 'Customer Website', sample: 'www.globalent.com', category: 'customer' },
    { id: 'customerTaxId', label: 'Customer Tax ID', sample: '98-7654321', category: 'customer' },

    // Company Info
    { id: 'companyName', label: 'Company Name', sample: 'TechCorp Solutions Inc.', category: 'company' },
    { id: 'companyEmail', label: 'Company Email', sample: 'invoicing@techcorp.com', category: 'company' },
    { id: 'companyPhone', label: 'Company Phone', sample: '+1 (555) 987-6543', category: 'company' },
    { id: 'companyAddress', label: 'Company Address', sample: '123 Business Ave, Suite 100, San Francisco, CA 94102', category: 'company' },
    { id: 'companyCity', label: 'Company City', sample: 'San Francisco', category: 'company' },
    { id: 'companyState', label: 'Company State', sample: 'CA', category: 'company' },
    { id: 'companyZip', label: 'Company ZIP Code', sample: '94102', category: 'company' },
    { id: 'companyCountry', label: 'Company Country', sample: 'USA', category: 'company' },
    { id: 'companyWebsite', label: 'Company Website', sample: 'www.techcorp.com', category: 'company' },
    { id: 'companyTaxId', label: 'Tax ID', sample: '12-3456789', category: 'company' },
    { id: 'companyLogo', label: 'Company Logo', sample: '[Logo Image]', category: 'company' },
    { id: 'companyBankName', label: 'Bank Name', sample: 'Bank of America', category: 'company' },
    { id: 'companyAccountNumber', label: 'Account Number', sample: '****1234', category: 'company' },
    { id: 'companyRoutingNumber', label: 'Routing Number', sample: '021000322', category: 'company' },

    // Invoice Details
    { id: 'billNumber', label: 'Invoice Number', sample: 'INV-2024-001', category: 'dates' },
    { id: 'billDate', label: 'Invoice Date', sample: 'January 15, 2024', category: 'dates' },
    { id: 'dueDate', label: 'Due Date', sample: 'February 14, 2024', category: 'dates' },
    { id: 'paymentTerms', label: 'Payment Terms', sample: 'Net 30', category: 'dates' },
    { id: 'poNumber', label: 'PO Number', sample: 'PO-2024-001', category: 'dates' },
    { id: 'projectName', label: 'Project Name', sample: 'Website Redesign', category: 'dates' },

    // Financial
    { id: 'subtotal', label: 'Subtotal Amount', sample: '$6,600.00', category: 'financial' },
    { id: 'taxAmount', label: 'Tax Amount', sample: '$561.00', category: 'financial' },
    { id: 'taxRate', label: 'Tax Rate', sample: '8.5%', category: 'financial' },
    { id: 'discountAmount', label: 'Discount Amount', sample: '$0.00', category: 'financial' },
    { id: 'discountRate', label: 'Discount Rate', sample: '0%', category: 'financial' },
    { id: 'shippingAmount', label: 'Shipping Amount', sample: '$0.00', category: 'financial' },
    { id: 'totalAmount', label: 'Total Amount', sample: '$7,161.00', category: 'financial' },
    { id: 'amountPaid', label: 'Amount Paid', sample: '$0.00', category: 'financial' },
    { id: 'balanceDue', label: 'Balance Due', sample: '$7,161.00', category: 'financial' },
    { id: 'currency', label: 'Currency', sample: 'USD', category: 'financial' },

    // Additional
    { id: 'invoiceItems', label: 'Invoice Items Table', sample: 'Itemized services and products', category: 'other' },
    { id: 'notes', label: 'Notes', sample: 'Thank you for your business!', category: 'other' },
    { id: 'terms', label: 'Terms & Conditions', sample: 'Payment due within 30 days', category: 'other' },
    { id: 'signature', label: 'Signature', sample: '[Digital Signature]', category: 'other' },
    { id: 'preparedBy', label: 'Prepared By', sample: 'John Smith', category: 'other' },
    { id: 'authorizedBy', label: 'Authorized By', sample: 'Jane Doe', category: 'other' }
];

export const DUMMY_COMPANY_INFO = {
    name: 'Your Company Name',
    email: 'billing@yourcompany.com',
    phone: '+1 (555) 000-0000',
    address: '123 Your Street, Your City, ST 12345',
    website: 'www.yourcompany.com',
    taxId: '00-0000000'
};

export const DUMMY_CUSTOMER_INFO = {
    name: 'Sample Customer Inc.',
    email: 'accounts@samplecustomer.com',
    phone: '+1 (555) 111-2222',
    address: '456 Customer Ave, Their City, ST 67890'
};

export const SAMPLE_INVOICE_DATA = {
    billNumber: 'INV-2024-001',
    billDate: new Date().toLocaleDateString(),
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    paymentTerms: 'Net 30',
    subtotal: '0.00',
    taxAmount: '0.00',
    taxRate: '0.0%',
    totalAmount: '0.00'
};
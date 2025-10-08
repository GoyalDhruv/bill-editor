
export const PREMIUM_TEMPLATES = [
  {
    id: 'corporate-pro',
    name: 'Corporate Pro',
    type: 'Professional',
    category: 'Business',
    description: 'Elegant corporate design with modern layout',
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; background: #f8fafc; padding: 40px 20px;">
        <div style="background: white; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <h1 style="font-size: 36px; font-weight: bold; margin: 0 0 10px 0;">INVOICE</h1>
                <p style="margin: 0; opacity: 0.9;">Professional Services Invoice</p>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 24px; font-weight: bold;">{{companyName}}</div>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">{{companyAddress}}</p>
              </div>
            </div>
          </div>

          <!-- Client & Details -->
          <div style="padding: 40px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px;">
              <div>
                <h3 style="font-size: 18px; font-weight: 600; color: #374151; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin: 0 0 20px 0;">BILL TO</h3>
                <div style="background: #f9fafb; padding: 20px; border-radius: 12px;">
                  <p style="font-weight: 600; color: #111827; font-size: 18px; margin: 0 0 5px 0;">{{customerName}}</p>
                  <p style="color: #6b7280; margin: 5px 0;">{{customerAddress}}</p>
                  <p style="color: #6b7280; margin: 5px 0;">{{customerEmail}}</p>
                </div>
              </div>
              
              <div>
                <h3 style="font-size: 18px; font-weight: 600; color: #374151; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px; margin: 0 0 20px 0;">INVOICE DETAILS</h3>
                <div style="background: #f9fafb; padding: 20px; border-radius: 12px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="color: #6b7280;">Invoice Number:</span>
                    <span style="font-weight: 600; color: #111827;">{{billNumber}}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="color: #6b7280;">Issue Date:</span>
                    <span style="font-weight: 600; color: #111827;">{{billDate}}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="color: #6b7280;">Due Date:</span>
                    <span style="font-weight: 600; color: #dc2626;">{{dueDate}}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">Payment Terms:</span>
                    <span style="font-weight: 600; color: #111827;">{{paymentTerms}}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Services Table -->
            <div style="margin-bottom: 40px;">
              <div style="overflow: hidden; border-radius: 12px; border: 1px solid #e5e7eb;">
                <table style="width: 100%; border-collapse: collapse;">
                  <thead style="background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);">
                    <tr>
                      <th style="padding: 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Description</th>
                      <th style="padding: 16px; text-align: center; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Qty</th>
                      <th style="padding: 16px; text-align: right; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Price</th>
                      <th style="padding: 16px; text-align: right; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {{invoiceItems}}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Totals -->
            <div style="display: flex; justify-content: flex-end;">
              <div style="width: 300px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; color: #6b7280;">
                  <span>Subtotal</span>
                  <span>{{subtotal}}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; color: #6b7280;">
                  <span>Tax ({{taxRate}})</span>
                  <span>{{taxAmount}}</span>
                </div>
                <div style="border-top: 2px solid #e5e7eb; padding-top: 15px; margin-top: 15px;">
                  <div style="display: flex; justify-content: space-between; font-size: 20px; font-weight: bold; color: #111827;">
                    <span>Total Due</span>
                    <span style="color: #3b82f6;">{{totalAmount}}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="margin-top: 60px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                <div>
                  <h4 style="font-size: 14px; font-weight: 600; color: #374151; margin: 0 0 10px 0;">Payment Instructions</h4>
                  <p style="color: #6b7280; margin: 0; font-size: 14px;">{{terms}}</p>
                </div>
                <div style="text-align: right;">
                  <h4 style="font-size: 14px; font-weight: 600; color: #374151; margin: 0 0 10px 0;">Thank You</h4>
                  <p style="color: #6b7280; margin: 0; font-size: 14px;">{{notes}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    type: 'Minimal',
    category: 'Design',
    description: 'Clean, modern design with focus on typography',
    content: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 40px 20px; background: white;">
        <!-- Minimal Header -->
        <div style="text-align: center; margin-bottom: 60px;">
          <div style="width: 60px; height: 3px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); margin: 0 auto 20px auto;"></div>
          <h1 style="font-size: 48px; font-weight: 300; color: #111827; margin: 0 0 10px 0; letter-spacing: 2px;">INVOICE</h1>
          <p style="color: #6b7280; text-transform: uppercase; letter-spacing: 3px; font-size: 12px; margin: 0;">{{companyName}}</p>
        </div>

        <!-- Details -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 30px; margin-bottom: 60px;">
          <div style="text-align: center;">
            <h3 style="font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 15px 0;">From</h3>
            <p style="font-weight: 500; color: #111827; margin: 5px 0;">{{companyName}}</p>
            <p style="color: #6b7280; font-size: 13px; margin: 2px 0;">{{companyAddress}}</p>
            <p style="color: #6b7280; font-size: 13px; margin: 2px 0;">{{companyEmail}}</p>
          </div>
          <div style="text-align: center;">
            <h3 style="font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 15px 0;">Bill To</h3>
            <p style="font-weight: 500; color: #111827; margin: 5px 0;">{{customerName}}</p>
            <p style="color: #6b7280; font-size: 13px; margin: 2px 0;">{{customerAddress}}</p>
            <p style="color: #6b7280; font-size: 13px; margin: 2px 0;">{{customerEmail}}</p>
          </div>
          <div style="text-align: center;">
            <h3 style="font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 15px 0;">Details</h3>
            <p style="color: #6b7280; font-size: 13px; margin: 5px 0;"><span style="font-weight: 500;">{{billNumber}}</span></p>
            <p style="color: #6b7280; font-size: 13px; margin: 5px 0;">{{billDate}}</p>
            <p style="color: #dc2626; font-size: 13px; font-weight: 500; margin: 5px 0;">Due {{dueDate}}</p>
          </div>
        </div>

        <!-- Services -->
        <div style="margin-bottom: 60px;">
          <table style="width: 100%;">
            <thead>
              <tr style="border-bottom: 2px solid #111827;">
                <th style="padding-bottom: 15px; text-align: left; font-weight: 600; color: #111827; text-transform: uppercase; letter-spacing: 1px; font-size: 11px;">Service</th>
                <th style="padding-bottom: 15px; text-align: right; font-weight: 600; color: #111827; text-transform: uppercase; letter-spacing: 1px; font-size: 11px;">Amount</th>
              </tr>
            </thead>
            <tbody>
              {{invoiceItems}}
            </tbody>
          </table>
        </div>

        <!-- Totals -->
        <div style="display: flex; justify-content: flex-end; margin-bottom: 60px;">
          <div style="width: 250px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #6b7280;">
              <span>Subtotal</span>
              <span>{{subtotal}}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #6b7280;">
              <span>Tax</span>
              <span>{{taxAmount}}</span>
            </div>
            <div style="border-top: 1px solid #e5e7eb; padding-top: 12px; margin-top: 12px;">
              <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 600; color: #111827;">
                <span>Total</span>
                <span>{{totalAmount}}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; color: #6b7280; font-size: 13px;">
          <p>Payment terms: {{paymentTerms}}</p>
          <p style="margin-top: 8px;">{{notes}}</p>
        </div>
      </div>
    `
  },
  {
    id: 'creative-bold',
    name: 'Creative Bold',
    type: 'Creative',
    category: 'Agency',
    description: 'Bold, colorful design for creative professionals',
    content: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 800px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
        <div style="background: white; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 50px 40px; text-align: center;">
            <h1 style="font-size: 48px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: 1px;">INVOICE</h1>
            <p style="font-size: 18px; margin: 0; opacity: 0.9;">Digital Agency Services</p>
          </div>

          <div style="padding: 50px 40px;">
            <!-- Client & Company -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 50px;">
              <div>
                <div style="background: linear-gradient(135deg, #ffeaa7, #fab1a0); padding: 30px; border-radius: 16px;">
                  <h3 style="font-size: 20px; font-weight: 700; color: #2d3436; margin: 0 0 15px 0;">FROM</h3>
                  <p style="font-weight: 600; color: #2d3436; margin: 5px 0;">{{companyName}}</p>
                  <p style="color: #636e72; margin: 3px 0;">{{companyAddress}}</p>
                  <p style="color: #636e72; margin: 3px 0;">{{companyEmail}}</p>
                </div>
              </div>
              <div>
                <div style="background: linear-gradient(135deg, #74b9ff, #0984e3); padding: 30px; border-radius: 16px; color: white;">
                  <h3 style="font-size: 20px; font-weight: 700; margin: 0 0 15px 0;">BILL TO</h3>
                  <p style="font-weight: 600; margin: 5px 0;">{{customerName}}</p>
                  <p style="opacity: 0.9; margin: 3px 0;">{{customerAddress}}</p>
                  <p style="opacity: 0.9; margin: 3px 0;">{{customerEmail}}</p>
                </div>
              </div>
            </div>

            <!-- Invoice Meta -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 50px;">
              <div style="background: linear-gradient(135deg, #00b894, #00a085); color: white; padding: 25px; border-radius: 12px; text-align: center;">
                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">INVOICE #</div>
                <div style="font-size: 24px; font-weight: 700;">{{billNumber}}</div>
              </div>
              <div style="background: linear-gradient(135deg, #fd79a8, #e84393); color: white; padding: 25px; border-radius: 12px; text-align: center;">
                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">DATE</div>
                <div style="font-size: 24px; font-weight: 700;">{{billDate}}</div>
              </div>
              <div style="background: linear-gradient(135deg, #fdcb6e, #f39c12); color: white; padding: 25px; border-radius: 12px; text-align: center;">
                <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">DUE DATE</div>
                <div style="font-size: 24px; font-weight: 700;">{{dueDate}}</div>
              </div>
            </div>

            <!-- Services Table -->
            <div style="margin-bottom: 50px;">
              <div style="background: #f8f9fa; padding: 40px; border-radius: 16px;">
                <table style="width: 100%;">
                  <thead>
                    <tr style="border-bottom: 3px solid #e9ecef;">
                      <th style="padding-bottom: 20px; text-align: left; font-weight: 700; color: #2d3436; font-size: 16px;">DESCRIPTION</th>
                      <th style="padding-bottom: 20px; text-align: center; font-weight: 700; color: #2d3436; font-size: 16px;">HOURS</th>
                      <th style="padding-bottom: 20px; text-align: right; font-weight: 700; color: #2d3436; font-size: 16px;">RATE</th>
                      <th style="padding-bottom: 20px; text-align: right; font-weight: 700; color: #2d3436; font-size: 16px;">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {{invoiceItems}}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Total Section -->
            <div style="background: linear-gradient(135deg, #2d3436, #1a1a1a); color: white; padding: 40px; border-radius: 16px;">
              <div style="max-width: 400px; margin-left: auto;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 16px;">
                  <span style="opacity: 0.8;">Subtotal</span>
                  <span>{{subtotal}}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 16px;">
                  <span style="opacity: 0.8;">Tax ({{taxRate}})</span>
                  <span>{{taxAmount}}</span>
                </div>
                <div style="border-top: 2px solid rgba(255,255,255,0.3); padding-top: 20px; margin-top: 20px;">
                  <div style="display: flex; justify-content: space-between; font-size: 28px; font-weight: 700;">
                    <span>TOTAL DUE</span>
                    <span style="color: #ffeaa7;">{{totalAmount}}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Notes -->
            <div style="margin-top: 40px; text-align: center; color: #636e72;">
              <p style="font-weight: 600; margin-bottom: 10px;">Payment Terms: {{paymentTerms}}</p>
              <p>{{notes}}</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];

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
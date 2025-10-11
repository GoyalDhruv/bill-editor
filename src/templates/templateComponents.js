import { templateStyles } from './templateStyles';

export const PREMIUM_TEMPLATES = [
  {
    id: 'corporate-pro',
    name: 'Corporate Pro',
    type: 'Professional',
    category: 'Business',
    description: 'Elegant corporate design with modern layout',
    style: templateStyles.corporatePro,
    content: `
      <div class="corporate-pro-container">
        <div class="corporate-pro-card">
          <div class="corporate-pro-header">
            <div class="corporate-pro-header-content">
              <div>
                <h1 class="corporate-pro-title">INVOICE</h1>
                <p class="corporate-pro-subtitle">Professional Services Invoice</p>
              </div>
              <div class="corporate-pro-company">
                <div class="corporate-pro-company-name">{{companyName}}</div>
                <p class="corporate-pro-company-address">{{companyAddress}}</p>
              </div>
            </div>
          </div>

          <div class="corporate-pro-content">
            <div class="corporate-pro-grid">
              <div>
                <h3 class="corporate-pro-section-title corporate-pro-bill-to">BILL TO</h3>
                <div class="corporate-pro-info-card">
                  <p class="corporate-pro-client-name">{{customerName}}</p>
                  <p class="corporate-pro-client-detail">{{customerAddress}}</p>
                  <p class="corporate-pro-client-detail">{{customerEmail}}</p>
                  <p class="corporate-pro-client-detail">{{customerPhone}}</p>
                </div>
              </div>
              
              <div>
                <h3 class="corporate-pro-section-title corporate-pro-details">INVOICE DETAILS</h3>
                <div class="corporate-pro-info-card">
                  <div class="corporate-pro-detail-row">
                    <span class="corporate-pro-detail-label">Invoice Number:</span>
                    <span class="corporate-pro-detail-value">{{billNumber}}</span>
                  </div>
                  <div class="corporate-pro-detail-row">
                    <span class="corporate-pro-detail-label">Issue Date:</span>
                    <span class="corporate-pro-detail-value">{{billDate}}</span>
                  </div>
                  <div class="corporate-pro-detail-row">
                    <span class="corporate-pro-detail-label">Due Date:</span>
                    <span class="corporate-pro-detail-value corporate-pro-due-date">{{dueDate}}</span>
                  </div>
                  <div class="corporate-pro-detail-row">
                    <span class="corporate-pro-detail-label">Payment Terms:</span>
                    <span class="corporate-pro-detail-value">{{paymentTerms}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 40px;">
              <div class="corporate-pro-table-container">
                <table class="corporate-pro-table">
                  <thead class="corporate-pro-table-header">
                    <tr>
                      <th>Description</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {{invoiceItems}}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="corporate-pro-totals">
              <div class="corporate-pro-totals-container">
                <div class="corporate-pro-total-row">
                  <span>Subtotal</span>
                  <span>{{subtotal}}</span>
                </div>
                <div class="corporate-pro-total-row">
                  <span>Tax ({{taxRate}})</span>
                  <span>{{taxAmount}}</span>
                </div>
                <div class="corporate-pro-total-divider">
                  <div class="corporate-pro-grand-total">
                    <span>Total Due</span>
                    <span class="corporate-pro-total-amount">{{totalAmount}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="corporate-pro-footer">
              <div class="corporate-pro-footer-grid">
                <div>
                  <h4 class="corporate-pro-footer-title">Payment Instructions</h4>
                  <p class="corporate-pro-footer-text">{{terms}}</p>
                </div>
                <div style="text-align: right;">
                  <h4 class="corporate-pro-footer-title">Thank You</h4>
                  <p class="corporate-pro-footer-text">{{notes}}</p>
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
    style: templateStyles.modernMinimal,
    content: `
      <div class="modern-minimal-container">
        <div class="modern-minimal-header">
          <div class="modern-minimal-divider"></div>
          <h1 class="modern-minimal-title">INVOICE</h1>
          <p class="modern-minimal-subtitle">{{companyName}}</p>
        </div>

        <div class="modern-minimal-details">
          <div class="modern-minimal-detail-section">
            <h3 class="modern-minimal-detail-title">From</h3>
            <p class="modern-minimal-detail-name">{{companyName}}</p>
            <p class="modern-minimal-detail-text">{{companyAddress}}</p>
            <p class="modern-minimal-detail-text">{{companyEmail}}</p>
          </div>
          <div class="modern-minimal-detail-section">
            <h3 class="modern-minimal-detail-title">Bill To</h3>
            <p class="modern-minimal-detail-name">{{customerName}}</p>
            <p class="modern-minimal-detail-text">{{customerAddress}}</p>
            <p class="modern-minimal-detail-text">{{customerEmail}}</p>
          </div>
          <div class="modern-minimal-detail-section">
            <h3 class="modern-minimal-detail-title">Details</h3>
            <p class="modern-minimal-detail-text"><span style="font-weight: 500;">{{billNumber}}</span></p>
            <p class="modern-minimal-detail-text">{{billDate}}</p>
            <p style="color: #dc2626; font-size: 13px; font-weight: 500; margin: 5px 0;">Due {{dueDate}}</p>
          </div>
        </div>

        <div style="margin-bottom: 60px;">
          <table class="modern-minimal-table">
            <thead class="modern-minimal-table-header">
              <tr>
                <th>Service</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {{invoiceItems}}
            </tbody>
          </table>
        </div>

        <div class="modern-minimal-totals">
          <div class="modern-minimal-totals-container">
            <div class="modern-minimal-total-row">
              <span>Subtotal</span>
              <span>{{subtotal}}</span>
            </div>
            <div class="modern-minimal-total-row">
              <span>Tax</span>
              <span>{{taxAmount}}</span>
            </div>
            <div class="modern-minimal-total-divider">
              <div class="modern-minimal-grand-total">
                <span>Total</span>
                <span>{{totalAmount}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modern-minimal-footer">
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
    style: templateStyles.creativeBold,
    content: `
      <div class="creative-bold-container">
        <div class="creative-bold-card">
          <div class="creative-bold-header">
            <h1 class="creative-bold-title">INVOICE</h1>
            <p class="creative-bold-subtitle">Digital Agency Services</p>
          </div>

          <div class="creative-bold-content">
            <div class="creative-bold-grid">
              <div>
                <div class="creative-bold-from-card">
                  <h3 class="creative-bold-section-title creative-bold-from-title">FROM</h3>
                  <p class="creative-bold-name creative-bold-from-name">{{companyName}}</p>
                  <p class="creative-bold-detail creative-bold-from-detail">{{companyAddress}}</p>
                  <p class="creative-bold-detail creative-bold-from-detail">{{companyEmail}}</p>
                  <p class="creative-bold-detail creative-bold-from-detail">{{companyPhone}}</p>
                </div>
              </div>
              <div>
                <div class="creative-bold-bill-to-card">
                  <h3 class="creative-bold-section-title creative-bold-bill-to-title">BILL TO</h3>
                  <p class="creative-bold-name creative-bold-bill-to-name">{{customerName}}</p>
                  <p class="creative-bold-detail creative-bold-bill-to-detail">{{customerAddress}}</p>
                  <p class="creative-bold-detail creative-bold-bill-to-detail">{{customerEmail}}</p>
                  <p class="creative-bold-detail creative-bold-bill-to-detail">{{customerPhone}}</p>
                </div>
              </div>
            </div>

            <div class="creative-bold-meta-grid">
              <div class="creative-bold-meta-card creative-bold-invoice-number">
                <div class="creative-bold-meta-label">INVOICE #</div>
                <div class="creative-bold-meta-value">{{billNumber}}</div>
              </div>
              <div class="creative-bold-meta-card creative-bold-date">
                <div class="creative-bold-meta-label">DATE</div>
                <div class="creative-bold-meta-value">{{billDate}}</div>
              </div>
              <div class="creative-bold-meta-card creative-bold-due-date">
                <div class="creative-bold-meta-label">DUE DATE</div>
                <div class="creative-bold-meta-value">{{dueDate}}</div>
              </div>
            </div>

            <div class="creative-bold-table-container">
              <table class="creative-bold-table">
                <thead class="creative-bold-table-header">
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>HOURS</th>
                    <th>RATE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {{invoiceItems}}
                </tbody>
              </table>
            </div>

            <div class="creative-bold-total-section">
              <div class="creative-bold-totals-container">
                <div class="creative-bold-total-row">
                  <span class="creative-bold-total-label">Subtotal</span>
                  <span>{{subtotal}}</span>
                </div>
                <div class="creative-bold-total-row">
                  <span class="creative-bold-total-label">Tax ({{taxRate}})</span>
                  <span>{{taxAmount}}</span>
                </div>
                <div class="creative-bold-total-divider">
                  <div class="creative-bold-grand-total">
                    <span>TOTAL DUE</span>
                    <span class="creative-bold-total-amount">{{totalAmount}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="creative-bold-notes">
              <p style="font-weight: 600; margin-bottom: 10px;">Payment Terms: {{paymentTerms}}</p>
              <p>{{notes}}</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];
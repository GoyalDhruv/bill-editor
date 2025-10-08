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
                  <p style="color: #6b7280; margin: 5px 0;">{{customerPhone}}</p>
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
                    <tr style="border-bottom: 1px solid #f3f4f6;">
                      <td style="padding: 16px;">
                        <div style="font-weight: 500; color: #111827;">Professional Services</div>
                        <div style="color: #6b7280; font-size: 14px;">Consulting and development</div>
                      </td>
                      <td style="padding: 16px; text-align: center; color: #6b7280;">1</td>
                      <td style="padding: 16px; text-align: right; color: #111827;">{{subtotal}}</td>
                      <td style="padding: 16px; text-align: right; font-weight: 600; color: #111827;">{{subtotal}}</td>
                    </tr>
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
                  <p style="color: #6b7280; margin: 0; font-size: 14px;">Please make payment within {{paymentTerms}} of receiving this invoice.</p>
                </div>
                <div style="text-align: right;">
                  <h4 style="font-size: 14px; font-weight: 600; color: #374151; margin: 0 0 10px 0;">Thank You</h4>
                  <p style="color: #6b7280; margin: 0; font-size: 14px;">We appreciate your business.</p>
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
            <p style="color: #6b7280; font-size: 13px; margin: 5px 0;"><span style="font-weight: 500;">#{{billNumber}}</span></p>
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
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 20px 0;">
                  <div style="font-weight: 500; color: #111827;">Professional Services</div>
                  <div style="color: #6b7280; font-size: 13px; margin-top: 4px;">Comprehensive service package</div>
                </td>
                <td style="padding: 20px 0; text-align: right; font-weight: 500; color: #111827;">{{subtotal}}</td>
              </tr>
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
          <p style="margin-top: 8px;">Thank you for your business</p>
        </div>
      </div>
    `
    }
];
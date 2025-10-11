export const templateStyles = {
    // Corporate Pro Template Styles
    corporatePro: `
    .corporate-pro-container {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      background: #f8fafc;
      padding: 40px 20px;
    }
    .corporate-pro-card {
      background: white;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .corporate-pro-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
    }
    .corporate-pro-header-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .corporate-pro-title {
      font-size: 36px;
      font-weight: bold;
      margin: 0 0 10px 0;
    }
    .corporate-pro-subtitle {
      margin: 0;
      opacity: 0.9;
    }
    .corporate-pro-company {
      text-align: right;
    }
    .corporate-pro-company-name {
      font-size: 24px;
      font-weight: bold;
    }
    .corporate-pro-company-address {
      margin: 5px 0 0 0;
      opacity: 0.9;
    }
    .corporate-pro-content {
      padding: 40px;
    }
    .corporate-pro-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }
    .corporate-pro-section-title {
      font-size: 18px;
      font-weight: 600;
      color: #374151;
      border-bottom: 2px solid #3b82f6;
      padding-bottom: 10px;
      margin: 0 0 20px 0;
    }
    .corporate-pro-bill-to {
      border-bottom-color: #3b82f6;
    }
    .corporate-pro-details {
      border-bottom-color: #8b5cf6;
    }
    .corporate-pro-info-card {
      background: #f9fafb;
      padding: 20px;
      border-radius: 12px;
    }
    .corporate-pro-client-name {
      font-weight: 600;
      color: #111827;
      font-size: 18px;
      margin: 0 0 5px 0;
    }
    .corporate-pro-client-detail {
      color: #6b7280;
      margin: 5px 0;
    }
    .corporate-pro-detail-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .corporate-pro-detail-label {
      color: #6b7280;
    }
    .corporate-pro-detail-value {
      font-weight: 600;
      color: #111827;
    }
    .corporate-pro-due-date {
      color: #dc2626 !important;
    }
    .corporate-pro-table-container {
      overflow: hidden;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
    }
    .corporate-pro-table {
      width: 100%;
      border-collapse: collapse;
    }
    .corporate-pro-table-header {
      background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    }
    .corporate-pro-table th {
      padding: 16px;
      text-align: left;
      font-weight: 600;
      color: #374151;
      border-bottom: 1px solid #e5e7eb;
    }
    .corporate-pro-table th:nth-child(2) {
      text-align: center;
    }
    .corporate-pro-table th:nth-child(3),
    .corporate-pro-table th:nth-child(4) {
      text-align: right;
    }
    .corporate-pro-totals {
      display: flex;
      justify-content: flex-end;
    }
    .corporate-pro-totals-container {
      width: 300px;
    }
    .corporate-pro-total-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      color: #6b7280;
    }
    .corporate-pro-total-divider {
      border-top: 2px solid #e5e7eb;
      padding-top: 15px;
      margin-top: 15px;
    }
    .corporate-pro-grand-total {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      font-weight: bold;
      color: #111827;
    }
    .corporate-pro-total-amount {
      color: #3b82f6;
    }
    .corporate-pro-footer {
      margin-top: 60px;
      padding-top: 30px;
      border-top: 1px solid #e5e7eb;
    }
    .corporate-pro-footer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    .corporate-pro-footer-title {
      font-size: 14px;
      font-weight: 600;
      color: #374151;
      margin: 0 0 10px 0;
    }
    .corporate-pro-footer-text {
      color: #6b7280;
      margin: 0;
      font-size: 14px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .corporate-pro-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .corporate-pro-header-content {
        flex-direction: column;
        text-align: center;
      }
      .corporate-pro-company {
        text-align: center;
        margin-top: 20px;
      }
      .corporate-pro-footer-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
  `,

    // Modern Minimal Template Styles
    modernMinimal: `
    .modern-minimal-container {
      font-family: 'Inter', Arial, sans-serif;
      max-width: 700px;
      margin: 0 auto;
      padding: 40px 20px;
      background: white;
    }
    .modern-minimal-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .modern-minimal-divider {
      width: 60px;
      height: 3px;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      margin: 0 auto 20px auto;
    }
    .modern-minimal-title {
      font-size: 48px;
      font-weight: 300;
      color: #111827;
      margin: 0 0 10px 0;
      letter-spacing: 2px;
    }
    .modern-minimal-subtitle {
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 12px;
      margin: 0;
    }
    .modern-minimal-details {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
      margin-bottom: 60px;
    }
    .modern-minimal-detail-section {
      text-align: center;
    }
    .modern-minimal-detail-title {
      font-size: 11px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 15px 0;
    }
    .modern-minimal-detail-name {
      font-weight: 500;
      color: #111827;
      margin: 5px 0;
    }
    .modern-minimal-detail-text {
      color: #6b7280;
      font-size: 13px;
      margin: 2px 0;
    }
    .modern-minimal-table {
      width: 100%;
      margin-bottom: 60px;
    }
    .modern-minimal-table-header {
      border-bottom: 2px solid #111827;
    }
    .modern-minimal-table th {
      padding-bottom: 15px;
      font-weight: 600;
      color: #111827;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 11px;
    }
    .modern-minimal-table th:first-child {
      text-align: left;
    }
    .modern-minimal-table th:last-child {
      text-align: right;
    }
    .modern-minimal-totals {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 60px;
    }
    .modern-minimal-totals-container {
      width: 250px;
    }
    .modern-minimal-total-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      color: #6b7280;
    }
    .modern-minimal-total-divider {
      border-top: 1px solid #e5e7eb;
      padding-top: 12px;
      margin-top: 12px;
    }
    .modern-minimal-grand-total {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 600;
      color: #111827;
    }
    .modern-minimal-footer {
      text-align: center;
      color: #6b7280;
      font-size: 13px;
    }

    @media (max-width: 768px) {
      .modern-minimal-details {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .modern-minimal-title {
        font-size: 36px;
      }
    }
  `,

    // Creative Bold Template Styles
    creativeBold: `
    .creative-bold-container {
      font-family: 'Inter', Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
    }
    .creative-bold-card {
      background: white;
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
      overflow: hidden;
    }
    .creative-bold-header {
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
      color: white;
      padding: 50px 40px;
      text-align: center;
    }
    .creative-bold-title {
      font-size: 48px;
      font-weight: 800;
      margin: 0 0 10px 0;
      letter-spacing: 1px;
    }
    .creative-bold-subtitle {
      font-size: 18px;
      margin: 0;
      opacity: 0.9;
    }
    .creative-bold-content {
      padding: 50px 40px;
    }
    .creative-bold-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 50px;
    }
    .creative-bold-from-card {
      background: linear-gradient(135deg, #ffeaa7, #fab1a0);
      padding: 30px;
      border-radius: 16px;
    }
    .creative-bold-bill-to-card {
      background: linear-gradient(135deg, #74b9ff, #0984e3);
      padding: 30px;
      border-radius: 16px;
      color: white;
    }
    .creative-bold-section-title {
      font-size: 20px;
      font-weight: 700;
      margin: 0 0 15px 0;
    }
    .creative-bold-from-title {
      color: #2d3436;
    }
    .creative-bold-bill-to-title {
      color: white;
    }
    .creative-bold-name {
      font-weight: 600;
      margin: 5px 0;
    }
    .creative-bold-from-name {
      color: #2d3436;
    }
    .creative-bold-bill-to-name {
      color: white;
    }
    .creative-bold-detail {
      margin: 3px 0;
    }
    .creative-bold-from-detail {
      color: #636e72;
    }
    .creative-bold-bill-to-detail {
      opacity: 0.9;
    }
    .creative-bold-meta-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 50px;
    }
    .creative-bold-meta-card {
      color: white;
      padding: 25px;
      border-radius: 12px;
      text-align: center;
    }
    .creative-bold-invoice-number {
      background: linear-gradient(135deg, #00b894, #00a085);
    }
    .creative-bold-date {
      background: linear-gradient(135deg, #fd79a8, #e84393);
    }
    .creative-bold-due-date {
      background: linear-gradient(135deg, #fdcb6e, #f39c12);
    }
    .creative-bold-meta-label {
      font-size: 14px;
      opacity: 0.9;
      margin-bottom: 8px;
    }
    .creative-bold-meta-value {
      font-size: 24px;
      font-weight: 700;
    }
    .creative-bold-table-container {
      background: #f8f9fa;
      padding: 40px;
      border-radius: 16px;
      margin-bottom: 50px;
    }
    .creative-bold-table {
      width: 100%;
    }
    .creative-bold-table-header {
      border-bottom: 3px solid #e9ecef;
    }
    .creative-bold-table th {
      padding-bottom: 20px;
      font-weight: 700;
      color: #2d3436;
      font-size: 16px;
    }
    .creative-bold-table th:first-child {
      text-align: left;
    }
    .creative-bold-table th:nth-child(2) {
      text-align: center;
    }
    .creative-bold-table th:nth-child(3),
    .creative-bold-table th:nth-child(4) {
      text-align: right;
    }
    .creative-bold-total-section {
      background: linear-gradient(135deg, #2d3436, #1a1a1a);
      color: white;
      padding: 40px;
      border-radius: 16px;
    }
    .creative-bold-totals-container {
      max-width: 400px;
      margin-left: auto;
    }
    .creative-bold-total-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      font-size: 16px;
    }
    .creative-bold-total-label {
      opacity: 0.8;
    }
    .creative-bold-total-divider {
      border-top: 2px solid rgba(255,255,255,0.3);
      padding-top: 20px;
      margin-top: 20px;
    }
    .creative-bold-grand-total {
      display: flex;
      justify-content: space-between;
      font-size: 28px;
      font-weight: 700;
    }
    .creative-bold-total-amount {
      color: #ffeaa7;
    }
    .creative-bold-notes {
      margin-top: 40px;
      text-align: center;
      color: #636e72;
    }

    @media (max-width: 768px) {
      .creative-bold-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .creative-bold-meta-grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }
      .creative-bold-title {
        font-size: 36px;
      }
    }
  `
};
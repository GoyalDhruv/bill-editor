// export const templateStyles = {
//     // Corporate Pro Template Styles
//     corporatePro: `
//     .corporate-pro-container {
//       font-family: Arial, sans-serif;
//       max-width: 800px;
//       margin: 0 auto;
//       background: #f8fafc;
//       padding: 40px 20px;
//     }
//     .corporate-pro-card {
//       background: white;
//       border-radius: 20px;
//       box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//       overflow: hidden;
//     }
//     .corporate-pro-header {
//       background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//       color: white;
//       padding: 40px;
//     }
//     .corporate-pro-header-content {
//       display: flex;
//       justify-content: space-between;
//       align-items: flex-start;
//     }
//     .corporate-pro-title {
//       font-size: 36px;
//       font-weight: bold;
//       margin: 0 0 10px 0;
//     }
//     .corporate-pro-subtitle {
//       margin: 0;
//       opacity: 0.9;
//     }
//     .corporate-pro-company {
//       text-align: right;
//     }
//     .corporate-pro-company-name {
//       font-size: 24px;
//       font-weight: bold;
//     }
//     .corporate-pro-company-address {
//       margin: 5px 0 0 0;
//       opacity: 0.9;
//     }
//     .corporate-pro-content {
//       padding: 40px;
//     }
//     .corporate-pro-grid {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 40px;
//       margin-bottom: 40px;
//     }
//     .corporate-pro-section-title {
//       font-size: 18px;
//       font-weight: 600;
//       color: #374151;
//       border-bottom: 2px solid #3b82f6;
//       padding-bottom: 10px;
//       margin: 0 0 20px 0;
//     }
//     .corporate-pro-bill-to {
//       border-bottom-color: #3b82f6;
//     }
//     .corporate-pro-details {
//       border-bottom-color: #8b5cf6;
//     }
//     .corporate-pro-info-card {
//       background: #f9fafb;
//       padding: 20px;
//       border-radius: 12px;
//     }
//     .corporate-pro-client-name {
//       font-weight: 600;
//       color: #111827;
//       font-size: 18px;
//       margin: 0 0 5px 0;
//     }
//     .corporate-pro-client-detail {
//       color: #6b7280;
//       margin: 5px 0;
//     }
//     .corporate-pro-detail-row {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 10px;
//     }
//     .corporate-pro-detail-label {
//       color: #6b7280;
//     }
//     .corporate-pro-detail-value {
//       font-weight: 600;
//       color: #111827;
//     }
//     .corporate-pro-due-date {
//       color: #dc2626 !important;
//     }
//     .corporate-pro-table-container {
//       overflow: hidden;
//       border-radius: 12px;
//       border: 1px solid #e5e7eb;
//     }
//     .corporate-pro-table {
//       width: 100%;
//       border-collapse: collapse;
//     }
//     .corporate-pro-table-header {
//       background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
//     }
//     .corporate-pro-table th {
//       padding: 16px;
//       text-align: left;
//       font-weight: 600;
//       color: #374151;
//       border-bottom: 1px solid #e5e7eb;
//     }
//     .corporate-pro-table th:nth-child(2) {
//       text-align: center;
//     }
//     .corporate-pro-table th:nth-child(3),
//     .corporate-pro-table th:nth-child(4) {
//       text-align: right;
//     }
//     .corporate-pro-totals {
//       display: flex;
//       justify-content: flex-end;
//     }
//     .corporate-pro-totals-container {
//       width: 300px;
//     }
//     .corporate-pro-total-row {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 10px;
//       color: #6b7280;
//     }
//     .corporate-pro-total-divider {
//       border-top: 2px solid #e5e7eb;
//       padding-top: 15px;
//       margin-top: 15px;
//     }
//     .corporate-pro-grand-total {
//       display: flex;
//       justify-content: space-between;
//       font-size: 20px;
//       font-weight: bold;
//       color: #111827;
//     }
//     .corporate-pro-total-amount {
//       color: #3b82f6;
//     }
//     .corporate-pro-footer {
//       margin-top: 60px;
//       padding-top: 30px;
//       border-top: 1px solid #e5e7eb;
//     }
//     .corporate-pro-footer-grid {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 40px;
//     }
//     .corporate-pro-footer-title {
//       font-size: 14px;
//       font-weight: 600;
//       color: #374151;
//       margin: 0 0 10px 0;
//     }
//     .corporate-pro-footer-text {
//       color: #6b7280;
//       margin: 0;
//       font-size: 14px;
//     }

//     /* Responsive Design */
//     @media (max-width: 768px) {
//       .corporate-pro-grid {
//         grid-template-columns: 1fr;
//         gap: 20px;
//       }
//       .corporate-pro-header-content {
//         flex-direction: column;
//         text-align: center;
//       }
//       .corporate-pro-company {
//         text-align: center;
//         margin-top: 20px;
//       }
//       .corporate-pro-footer-grid {
//         grid-template-columns: 1fr;
//         gap: 20px;
//       }
//     }
//   `,

//     // Modern Minimal Template Styles
//     modernMinimal: `
//     .modern-minimal-container {
//       font-family: 'Inter', Arial, sans-serif;
//       max-width: 700px;
//       margin: 0 auto;
//       padding: 40px 20px;
//       background: white;
//     }
//     .modern-minimal-header {
//       text-align: center;
//       margin-bottom: 60px;
//     }
//     .modern-minimal-divider {
//       width: 60px;
//       height: 3px;
//       background: linear-gradient(135deg, #3b82f6, #8b5cf6);
//       margin: 0 auto 20px auto;
//     }
//     .modern-minimal-title {
//       font-size: 48px;
//       font-weight: 300;
//       color: #111827;
//       margin: 0 0 10px 0;
//       letter-spacing: 2px;
//     }
//     .modern-minimal-subtitle {
//       color: #6b7280;
//       text-transform: uppercase;
//       letter-spacing: 3px;
//       font-size: 12px;
//       margin: 0;
//     }
//     .modern-minimal-details {
//       display: grid;
//       grid-template-columns: 1fr 1fr 1fr;
//       gap: 30px;
//       margin-bottom: 60px;
//     }
//     .modern-minimal-detail-section {
//       text-align: center;
//     }
//     .modern-minimal-detail-title {
//       font-size: 11px;
//       font-weight: 600;
//       color: #6b7280;
//       text-transform: uppercase;
//       letter-spacing: 1px;
//       margin: 0 0 15px 0;
//     }
//     .modern-minimal-detail-name {
//       font-weight: 500;
//       color: #111827;
//       margin: 5px 0;
//     }
//     .modern-minimal-detail-text {
//       color: #6b7280;
//       font-size: 13px;
//       margin: 2px 0;
//     }
//     .modern-minimal-table {
//       width: 100%;
//       margin-bottom: 60px;
//     }
//     .modern-minimal-table-header {
//       border-bottom: 2px solid #111827;
//     }
//     .modern-minimal-table th {
//       padding-bottom: 15px;
//       font-weight: 600;
//       color: #111827;
//       text-transform: uppercase;
//       letter-spacing: 1px;
//       font-size: 11px;
//     }
//     .modern-minimal-table th:first-child {
//       text-align: left;
//     }
//     .modern-minimal-table th:last-child {
//       text-align: right;
//     }
//     .modern-minimal-totals {
//       display: flex;
//       justify-content: flex-end;
//       margin-bottom: 60px;
//     }
//     .modern-minimal-totals-container {
//       width: 250px;
//     }
//     .modern-minimal-total-row {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 8px;
//       color: #6b7280;
//     }
//     .modern-minimal-total-divider {
//       border-top: 1px solid #e5e7eb;
//       padding-top: 12px;
//       margin-top: 12px;
//     }
//     .modern-minimal-grand-total {
//       display: flex;
//       justify-content: space-between;
//       font-size: 18px;
//       font-weight: 600;
//       color: #111827;
//     }
//     .modern-minimal-footer {
//       text-align: center;
//       color: #6b7280;
//       font-size: 13px;
//     }

//     @media (max-width: 768px) {
//       .modern-minimal-details {
//         grid-template-columns: 1fr;
//         gap: 20px;
//       }
//       .modern-minimal-title {
//         font-size: 36px;
//       }
//     }
//   `,

//     // Creative Bold Template Styles
//     creativeBold: `
//     .creative-bold-container {
//       font-family: 'Inter', Arial, sans-serif;
//       max-width: 800px;
//       margin: 0 auto;
//       background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//       padding: 40px 20px;
//     }
//     .creative-bold-card {
//       background: white;
//       border-radius: 24px;
//       box-shadow: 0 20px 60px rgba(0,0,0,0.2);
//       overflow: hidden;
//     }
//     .creative-bold-header {
//       background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
//       color: white;
//       padding: 50px 40px;
//       text-align: center;
//     }
//     .creative-bold-title {
//       font-size: 48px;
//       font-weight: 800;
//       margin: 0 0 10px 0;
//       letter-spacing: 1px;
//     }
//     .creative-bold-subtitle {
//       font-size: 18px;
//       margin: 0;
//       opacity: 0.9;
//     }
//     .creative-bold-content {
//       padding: 50px 40px;
//     }
//     .creative-bold-grid {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 40px;
//       margin-bottom: 50px;
//     }
//     .creative-bold-from-card {
//       background: linear-gradient(135deg, #ffeaa7, #fab1a0);
//       padding: 30px;
//       border-radius: 16px;
//     }
//     .creative-bold-bill-to-card {
//       background: linear-gradient(135deg, #74b9ff, #0984e3);
//       padding: 30px;
//       border-radius: 16px;
//       color: white;
//     }
//     .creative-bold-section-title {
//       font-size: 20px;
//       font-weight: 700;
//       margin: 0 0 15px 0;
//     }
//     .creative-bold-from-title {
//       color: #2d3436;
//     }
//     .creative-bold-bill-to-title {
//       color: white;
//     }
//     .creative-bold-name {
//       font-weight: 600;
//       margin: 5px 0;
//     }
//     .creative-bold-from-name {
//       color: #2d3436;
//     }
//     .creative-bold-bill-to-name {
//       color: white;
//     }
//     .creative-bold-detail {
//       margin: 3px 0;
//     }
//     .creative-bold-from-detail {
//       color: #636e72;
//     }
//     .creative-bold-bill-to-detail {
//       opacity: 0.9;
//     }
//     .creative-bold-meta-grid {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 20px;
//       margin-bottom: 50px;
//     }
//     .creative-bold-meta-card {
//       color: white;
//       padding: 25px;
//       border-radius: 12px;
//       text-align: center;
//     }
//     .creative-bold-invoice-number {
//       background: linear-gradient(135deg, #00b894, #00a085);
//     }
//     .creative-bold-date {
//       background: linear-gradient(135deg, #fd79a8, #e84393);
//     }
//     .creative-bold-due-date {
//       background: linear-gradient(135deg, #fdcb6e, #f39c12);
//     }
//     .creative-bold-meta-label {
//       font-size: 14px;
//       opacity: 0.9;
//       margin-bottom: 8px;
//     }
//     .creative-bold-meta-value {
//       font-size: 24px;
//       font-weight: 700;
//     }
//     .creative-bold-table-container {
//       background: #f8f9fa;
//       padding: 40px;
//       border-radius: 16px;
//       margin-bottom: 50px;
//     }
//     .creative-bold-table {
//       width: 100%;
//     }
//     .creative-bold-table-header {
//       border-bottom: 3px solid #e9ecef;
//     }
//     .creative-bold-table th {
//       padding-bottom: 20px;
//       font-weight: 700;
//       color: #2d3436;
//       font-size: 16px;
//     }
//     .creative-bold-table th:first-child {
//       text-align: left;
//     }
//     .creative-bold-table th:nth-child(2) {
//       text-align: center;
//     }
//     .creative-bold-table th:nth-child(3),
//     .creative-bold-table th:nth-child(4) {
//       text-align: right;
//     }
//     .creative-bold-total-section {
//       background: linear-gradient(135deg, #2d3436, #1a1a1a);
//       color: white;
//       padding: 40px;
//       border-radius: 16px;
//     }
//     .creative-bold-totals-container {
//       max-width: 400px;
//       margin-left: auto;
//     }
//     .creative-bold-total-row {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 15px;
//       font-size: 16px;
//     }
//     .creative-bold-total-label {
//       opacity: 0.8;
//     }
//     .creative-bold-total-divider {
//       border-top: 2px solid rgba(255,255,255,0.3);
//       padding-top: 20px;
//       margin-top: 20px;
//     }
//     .creative-bold-grand-total {
//       display: flex;
//       justify-content: space-between;
//       font-size: 28px;
//       font-weight: 700;
//     }
//     .creative-bold-total-amount {
//       color: #ffeaa7;
//     }
//     .creative-bold-notes {
//       margin-top: 40px;
//       text-align: center;
//       color: #636e72;
//     }

//     @media (max-width: 768px) {
//       .creative-bold-grid {
//         grid-template-columns: 1fr;
//         gap: 20px;
//       }
//       .creative-bold-meta-grid {
//         grid-template-columns: 1fr;
//         gap: 15px;
//       }
//       .creative-bold-title {
//         font-size: 36px;
//       }
//     }
//   `
// };


export const templateStyles = {
  // Corporate Pro Template Styles
  corporatePro: `
    .corporate-pro-container {
      font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
      max-width: 800px;
      margin: 0 auto;
      background: #f8fafc;
      padding: 40px 20px;
    }
    .corporate-pro-card {
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }
    .corporate-pro-header {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
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
      font-weight: 700;
      margin: 0 0 10px 0;
      letter-spacing: -0.5px;
    }
    .corporate-pro-subtitle {
      margin: 0;
      opacity: 0.9;
      font-weight: 400;
    }
    .corporate-pro-company {
      text-align: right;
    }
    .corporate-pro-company-name {
      font-size: 24px;
      font-weight: 700;
    }
    .corporate-pro-company-address {
      margin: 5px 0 0 0;
      opacity: 0.9;
      font-size: 14px;
    }
    .corporate-pro-content {
      padding: 40px;
    }
    .corporate-pro-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      margin-bottom: 40px;
    }
    .corporate-pro-section-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      border-bottom: 2px solid #3b82f6;
      padding-bottom: 8px;
      margin: 0 0 20px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .corporate-pro-bill-to {
      border-bottom-color: #3b82f6;
    }
    .corporate-pro-details {
      border-bottom-color: #8b5cf6;
    }
    .corporate-pro-info-card {
      background: #f1f5f9;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }
    .corporate-pro-client-name {
      font-weight: 600;
      color: #1e293b;
      font-size: 16px;
      margin: 0 0 8px 0;
    }
    .corporate-pro-client-detail {
      color: #64748b;
      margin: 4px 0;
      font-size: 14px;
    }
    .corporate-pro-detail-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      align-items: center;
    }
    .corporate-pro-detail-label {
      color: #64748b;
      font-size: 14px;
    }
    .corporate-pro-detail-value {
      font-weight: 600;
      color: #1e293b;
      font-size: 14px;
    }
    .corporate-pro-due-date {
      color: #dc2626 !important;
      font-weight: 600;
    }
    .corporate-pro-table-container {
      overflow: hidden;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      background: #ffffff;
    }
    .corporate-pro-table {
      width: 100%;
      border-collapse: collapse;
      font-family: 'Inter', sans-serif;
    }
    .corporate-pro-table-header {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    }
    .corporate-pro-table th {
      padding: 16px;
      text-align: left;
      font-weight: 600;
      color: #1e293b;
      border-bottom: 1px solid #e2e8f0;
      font-size: 14px;
    }
    .corporate-pro-table th:nth-child(2) {
      text-align: center;
    }
    .corporate-pro-table th:nth-child(3),
    .corporate-pro-table th:nth-child(4) {
      text-align: right;
    }
    .corporate-pro-table td {
      padding: 16px;
      border-bottom: 1px solid #e2e8f0;
      color: #1e293b;
    }
    .corporate-pro-totals {
      display: flex;
      justify-content: flex-end;
      margin-top: 32px;
    }
    .corporate-pro-totals-container {
      width: 300px;
    }
    .corporate-pro-total-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      color: #64748b;
      font-size: 14px;
    }
    .corporate-pro-total-divider {
      border-top: 2px solid #e2e8f0;
      padding-top: 16px;
      margin-top: 16px;
    }
    .corporate-pro-grand-total {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 700;
      color: #1e293b;
    }
    .corporate-pro-total-amount {
      color: #3b82f6;
    }
    .corporate-pro-footer {
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid #e2e8f0;
    }
    .corporate-pro-footer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    .corporate-pro-footer-title {
      font-size: 14px;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 8px 0;
    }
    .corporate-pro-footer-text {
      color: #64748b;
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .corporate-pro-grid {
        grid-template-columns: 1fr;
        gap: 24px;
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
        gap: 24px;
      }
      .corporate-pro-content {
        padding: 24px;
      }
      .corporate-pro-header {
        padding: 32px 24px;
      }
    }
  `,

  // Modern Minimal Template Styles
  modernMinimal: `
    .modern-minimal-container {
      font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
      max-width: 700px;
      margin: 0 auto;
      padding: 40px 20px;
      background: #ffffff;
      color: #1e293b;
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
      color: #1e293b;
      margin: 0 0 10px 0;
      letter-spacing: 2px;
    }
    .modern-minimal-subtitle {
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 12px;
      margin: 0;
      font-weight: 500;
    }
    .modern-minimal-details {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 32px;
      margin-bottom: 60px;
    }
    .modern-minimal-detail-section {
      text-align: center;
    }
    .modern-minimal-detail-title {
      font-size: 11px;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 15px 0;
    }
    .modern-minimal-detail-name {
      font-weight: 600;
      color: #1e293b;
      margin: 5px 0;
      font-size: 14px;
    }
    .modern-minimal-detail-text {
      color: #64748b;
      font-size: 13px;
      margin: 2px 0;
      line-height: 1.4;
    }
    .modern-minimal-table {
      width: 100%;
      margin-bottom: 60px;
      border-collapse: collapse;
    }
    .modern-minimal-table-header {
      border-bottom: 2px solid #1e293b;
    }
    .modern-minimal-table th {
      padding-bottom: 16px;
      font-weight: 600;
      color: #1e293b;
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
    .modern-minimal-table td {
      padding: 12px 0;
      border-bottom: 1px solid #e2e8f0;
      color: #1e293b;
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
      color: #64748b;
      font-size: 14px;
    }
    .modern-minimal-total-divider {
      border-top: 1px solid #e2e8f0;
      padding-top: 12px;
      margin-top: 12px;
    }
    .modern-minimal-grand-total {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 600;
      color: #1e293b;
    }
    .modern-minimal-footer {
      text-align: center;
      color: #64748b;
      font-size: 13px;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .modern-minimal-details {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      .modern-minimal-title {
        font-size: 36px;
      }
    }
  `,

  // Creative Bold Template Styles
  creativeBold: `
    .creative-bold-container {
      font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
      max-width: 800px;
      margin: 0 auto;
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      padding: 40px 20px;
    }
    .creative-bold-card {
      background: #ffffff;
      border-radius: 24px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      overflow: hidden;
    }
    .creative-bold-header {
      background: linear-gradient(135deg, #ef4444 0%, #f59e0b 100%);
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
      font-weight: 500;
    }
    .creative-bold-content {
      padding: 50px 40px;
    }
    .creative-bold-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      margin-bottom: 50px;
    }
    .creative-bold-from-card {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
      padding: 30px;
      border-radius: 16px;
      color: #92400e;
    }
    .creative-bold-bill-to-card {
      background: linear-gradient(135deg, #60a5fa, #3b82f6);
      padding: 30px;
      border-radius: 16px;
      color: white;
    }
    .creative-bold-section-title {
      font-size: 18px;
      font-weight: 700;
      margin: 0 0 15px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .creative-bold-from-title {
      color: inherit;
    }
    .creative-bold-bill-to-title {
      color: inherit;
    }
    .creative-bold-name {
      font-weight: 600;
      margin: 5px 0;
      font-size: 16px;
    }
    .creative-bold-from-name {
      color: inherit;
    }
    .creative-bold-bill-to-name {
      color: inherit;
    }
    .creative-bold-detail {
      margin: 3px 0;
      font-size: 14px;
      opacity: 0.9;
    }
    .creative-bold-from-detail {
      color: inherit;
    }
    .creative-bold-bill-to-detail {
      color: inherit;
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
      background: linear-gradient(135deg, #10b981, #059669);
    }
    .creative-bold-date {
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    }
    .creative-bold-due-date {
      background: linear-gradient(135deg, #f59e0b, #d97706);
    }
    .creative-bold-meta-label {
      font-size: 12px;
      opacity: 0.9;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .creative-bold-meta-value {
      font-size: 20px;
      font-weight: 700;
    }
    .creative-bold-table-container {
      background: #f8fafc;
      padding: 40px;
      border-radius: 16px;
      margin-bottom: 50px;
      border: 1px solid #e2e8f0;
    }
    .creative-bold-table {
      width: 100%;
      border-collapse: collapse;
    }
    .creative-bold-table-header {
      border-bottom: 3px solid #e2e8f0;
    }
    .creative-bold-table th {
      padding-bottom: 20px;
      font-weight: 700;
      color: #1e293b;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
    .creative-bold-table td {
      padding: 16px 0;
      border-bottom: 1px solid #e2e8f0;
      color: #1e293b;
    }
    .creative-bold-total-section {
      background: linear-gradient(135deg, #1e293b, #0f172a);
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
      margin-bottom: 12px;
      font-size: 14px;
    }
    .creative-bold-total-label {
      opacity: 0.8;
    }
    .creative-bold-total-divider {
      border-top: 2px solid rgba(255,255,255,0.3);
      padding-top: 16px;
      margin-top: 16px;
    }
    .creative-bold-grand-total {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      font-weight: 700;
    }
    .creative-bold-total-amount {
      color: #fef3c7;
    }
    .creative-bold-notes {
      margin-top: 40px;
      text-align: center;
      color: #64748b;
      font-size: 14px;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .creative-bold-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      .creative-bold-meta-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      .creative-bold-title {
        font-size: 36px;
      }
      .creative-bold-content {
        padding: 32px 24px;
      }
      .creative-bold-table-container {
        padding: 24px;
      }
    }
  `
};

export const PREMIUM_TEMPLATES = [
  {
    id: 'corporate-pro',
    name: 'Corporate Pro',
    type: 'Professional',
    category: 'Business',
    description: 'Elegant corporate design with modern layout and professional typography',
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
    description: 'Clean, modern design with focus on typography and whitespace',
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
            <p class="modern-minimal-detail-text"><span style="font-weight: 600;">{{billNumber}}</span></p>
            <p class="modern-minimal-detail-text">{{billDate}}</p>
            <p style="color: #dc2626; font-size: 13px; font-weight: 600; margin: 5px 0;">Due {{dueDate}}</p>
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
    description: 'Bold, colorful design perfect for creative agencies and modern businesses',
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

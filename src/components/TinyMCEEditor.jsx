import { useRef, useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor = ({ content, onUpdate, onReady }) => {
  const editorRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Only update content in editor when ready and content differs, inside undo transaction
  useEffect(() => {
    if (isReady && editorRef.current && editorRef.current.getContent() !== content) {
      editorRef.current.undoManager.transact(() => {
        editorRef.current.setContent(content);
      });
    }
  }, [content, isReady]);

  const init = {
    height: 600,
    menubar: false,
    plugins: [
      'undo', 'redo', 'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
      'insertdatetime', 'media', 'table', 'help', 'wordcount',
      'emoticons', 'quickbars'
    ],
    toolbar:
      'undo redo | blocks | bold italic underline strikethrough | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist outdent indent | ' +
      'forecolor backcolor emoticons | ' +
      'table image link media | ' +
      'removeformat help',
    quickbars_selection_toolbar:
      'bold italic underline | quicklink h2 h3 blockquote | ' +
      'forecolor backcolor | alignleft aligncenter alignright alignjustify',
    quickbars_insert_toolbar: 'quickimage quicktable media emoticons',
    toolbar_mode: 'sliding',
    paste_data_images: true,
    images_upload_handler: (blobInfo) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blobInfo.blob());
      });
    },
    image_caption: true,
    image_advtab: true,
    image_class_list: [
      { title: 'Responsive', value: 'img-responsive' },
      { title: 'Rounded', value: 'img-rounded' },
      { title: 'Circle', value: 'img-circle' }
    ],
    table_advtab: true,
    table_cell_advtab: true,
    table_row_advtab: true,
    table_appearance_options: true,
    table_grid: true,
    table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
    content_style: `
      body { 
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
        font-size: 14px; 
        line-height: 1.6; 
        color: #374151;
        margin: 0;
        padding: 20px;
      }
      .mce-content-body {
        max-width: 800px;
        margin: 0 auto;
        background: white;
      }
      h1, h2, h3, h4, h5, h6 {
        color: #111827;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        font-weight: 600;
      }
      h1 { font-size: 2em; border-bottom: 2px solid #e5e7eb; padding-bottom: 0.3em; }
      h2 { font-size: 1.5em; }
      h3 { font-size: 1.25em; }
      p { margin-bottom: 1em; }
      table { 
        border-collapse: collapse; 
        width: 100%; 
        margin: 1em 0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
        font-weight: 600;
      }
      img { 
        max-width: 100%; 
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      blockquote {
        border-left: 4px solid #3b82f6;
        background: #f8fafc;
        padding: 1em 1.5em;
        margin: 1.5em 0;
        border-radius: 0 8px 8px 0;
        font-style: italic;
      }
      ul, ol {
        margin: 1.5em 0;
        padding-left: 2em;
      }
      li {
        margin-bottom: 0.5em;
      }
      .img-responsive {
        max-width: 100%;
        height: auto;
      }
      .img-rounded {
        border-radius: 12px;
      }
      .img-circle {
        border-radius: 50%;
      }
    `,
    setup: (editor) => {
      editor.on('init', () => {
        setIsReady(true);
        if (onReady) onReady(editor);
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Document Editor</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Auto-save enabled</span>
            </div>
          </div>
        </div>
      </div>
      <Editor
        apiKey="l5ijq2i5d4dhchm3cin58p9hv6asbcl6x8sw43rlfkgfrnby"
        onInit={(evt, editor) => { editorRef.current = editor; }}
        value={content}
        init={init}
        onEditorChange={onUpdate}
      />
    </div>
  );
};

export default TinyMCEEditor;
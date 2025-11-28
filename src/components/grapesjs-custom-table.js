const customTablePlugin = (editor, opts = {}) => {
    const options = {
        // Table block settings
        // Inside your customTablePlugin options
        tableBlock: {
            category: 'Basic',
            label: 'Table',
            content: `
                <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">
                    <div data-gjs-type="text">Cell 1</div>
                    </td>
                    <td style="border: 1px solid #ddd; padding: 8px;">
                    <div data-gjs-type="text">Cell 2</div>
                    </td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">
                    <div data-gjs-type="text">Cell 3</div>
                    </td>
                    <td style="border: 1px solid #ddd; padding: 8px;">
                    <div data-gjs-type="text">Cell 4</div>
                    </td>
                </tr>
                </table>`,
        },
        // Enable cell resizing
        enableResizing: true,
        // Enable custom toolbar
        enableToolbar: true,
        ...opts
    };

    // Define a custom table component with a toolbar
    editor.DomComponents.addType('table', {
        isComponent: (el) => el.tagName === 'TABLE',
        model: {
            defaults: {
                name: 'Table',
                // Toolbar buttons for table operations
                toolbar: [
                    {
                        attributes: { class: 'fa fa-plus' },
                        command: 'add-table-row',
                        title: 'Add Row'
                    }, {
                        attributes: { class: 'fa fa-columns' },
                        command: 'add-table-column',
                        title: 'Add Column'
                    }, {
                        attributes: { class: 'fa fa-trash' },
                        command: 'delete-table',
                        title: 'Delete Table'
                    }
                ],
            },
        },
    });

    // Add commands for table operations
    editor.Commands.add('add-table-row', {
        run: (editor, sender) => {
            let selected = editor.getSelected();

            // Navigate up to find the table if a cell or row is selected
            while (selected && selected.get('tagName') !== 'TABLE') {
                selected = selected.parent();
                if (!selected) break;
            }

            if (selected && selected.get('tagName') === 'TABLE') {
                // Find the first tbody inside the table
                const tbody = selected.components().find(comp => comp.get('tagName') === 'TBODY');
                const rows = tbody ? tbody.components() : selected.components();
                const rowCount = rows.length;
                // Get column count from the first row
                const colCount = rowCount > 0 ? rows.at(0).components().length : 1;

                // Create a new row component
                const newRow = editor.DomComponents.addType('tr').model;

                // Add cells with text components to the new row
                for (let i = 0; i < colCount; i++) {
                    const cell = editor.DomComponents.addType('td').model;
                    // Add a text component inside the cell instead of plain text
                    cell.components().add({
                        type: 'text',
                        content: `Cell ${rowCount + 1}-${i + 1}`
                    });
                    newRow.components().add(cell);
                }

                // Add the new row to the tbody (or directly to the table if no tbody)
                if (tbody) {
                    tbody.components().add(newRow);
                } else {
                    selected.components().add(newRow);
                }

                editor.select(selected); // Keep table selected
            } else {
                console.warn('Please select a table first');
            }
        }
    });

    editor.Commands.add('add-table-column', {
        run: (editor, sender) => {
            let selected = editor.getSelected();

            // Navigate up to find the table if a cell or row is selected
            while (selected && selected.get('tagName') !== 'TABLE') {
                selected = selected.parent();
                if (!selected) break;
            }

            if (selected && selected.get('tagName') === 'TABLE') {
                // Find the first tbody inside the table
                const tbody = selected.components().find(comp => comp.get('tagName') === 'TBODY');
                const rows = tbody ? tbody.components() : selected.components();

                if (rows.length > 0) {
                    const colCount = rows.at(0).components().length;

                    // Add a new cell to each row
                    rows.each(row => {
                        const cell = editor.DomComponents.addType('td').model;
                        // Add a text component inside the new cell
                        cell.components().add({
                            type: 'text',
                            content: `Column ${colCount + 1}`
                        });
                        row.components().add(cell);
                    });

                    editor.select(selected); // Keep table selected
                }
            } else {
                console.warn('Please select a table first');
            }
        }
    });

    editor.Commands.add('delete-table', {
        run: (editor, sender) => {
            let selected = editor.getSelected();

            // Navigate up to find the table if a cell or row is selected
            while (selected && selected.get('tagName') !== 'TABLE') {
                selected = selected.parent();
                if (!selected) break;
            }

            if (selected && selected.get('tagName') === 'TABLE') {
                selected.remove();
            } else {
                console.warn('Please select a table first');
            }
        }
    });

    // Enhanced TD component type with resizing
    if (options.enableResizing) {
        editor.DomComponents.addType('td', {
            isComponent: (el) => el.tagName === 'TD',
            model: {
                defaults: {
                    resizable: {
                        tc: 0, tl: 0, tr: 0,   // top handles
                        cl: 0, cr: 1,           // left/right handles
                        bc: 1, bl: 0, br: 0,    // bottom handles
                        minWidth: 30,
                        minHeight: 20,
                    },
                    stylable: true,
                    style: {
                        'border': '1px solid #ddd',
                        'padding': '8px',
                        'min-width': '50px',
                        'min-height': '25px',
                        'vertical-align': 'top',
                    },
                },
            },
        });

        // Enhanced TH component type
        editor.DomComponents.addType('th', {
            isComponent: (el) => el.tagName === 'TH',
            model: {
                defaults: {
                    resizable: {
                        tc: 0, tl: 0, tr: 0,
                        cl: 0, cr: 1,
                        bc: 1, bl: 0, br: 0,
                        minWidth: 30,
                        minHeight: 20,
                    },
                    stylable: true,
                    style: {
                        'border': '1px solid #ddd',
                        'padding': '8px',
                        'min-width': '50px',
                        'min-height': '25px',
                        'background-color': '#f9fafb',
                        'font-weight': 'bold',
                        'text-align': 'center',
                    },
                },
            },
        });
    }

    // Add table block to the blocks panel
    editor.Blocks.add('custom-table', {
        label: options.tableBlock.label,
        category: options.tableBlock.category,
        content: options.tableBlock.content,
        media: `
                <svg viewBox="0 0 24 24" width="48" height="48">
                <path fill="currentColor" d="M4,3H20A1,1 0 0,1 21,4V20A1,1 0 0,1 20,21H4A1,1 0 0,1 3,20V4A1,1 0 0,1 4,3M4,7V11H11V7H4M4,13V17H11V13H4M13,7V11H20V7H13M13,13V17H20V13H13Z"/>
                </svg>
            `,
    });

};

export default customTablePlugin;
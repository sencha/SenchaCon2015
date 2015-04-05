/**
 * This view is an example list of tickets.
 */
Ext.define('Ticket.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Ticket.store.Tickets',
        'Ticket.grid.column.Glyph'
    ],

    title: 'Tickets',

    store: {
        type: 'tickets'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id', width: 50 },
        { text: 'Summary', dataIndex: 'summary', flex: 1 },
        {
            xtype: 'glyphcolumn',
            width: 40,
            align: 'center',
            items: ['fa-edit'],
            handler: 'onEditRow'
        }
    ]
});

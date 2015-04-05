Ext.define('Ticket.view.ticket.Window', {
    extend: 'Ext.window.Window',
    xtype: 'ticketwindow',
    
    layout: 'fit',
    
    bind: {
        title: 'Ticket {ticket.id}'
    },
    
    width: 700,
    height: 500,

    items: [{
        xtype: 'ticketform'
    }],

    buttons: ['->', {
        text: 'Save',
        handler: 'onSaveClick'
    }]
});

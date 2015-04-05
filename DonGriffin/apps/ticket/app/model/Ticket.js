Ext.define('Ticket.model.Ticket', {
    extend: 'Ticket.model.Base',

    fields: [{
        name: 'assigneeId',
        reference: 'User'
    },{
        name: 'reporterId',
        reference: 'User'
    }]
});

Ext.define('Ticket.model.Comment', {
    extend: 'Ticket.model.Base',

    fields: [{
        name: 'creatorId',
        reference: 'User'
    },{
        name: 'text'
    },{
        name: 'date'
    },{
        name: 'ticketId',
        reference: 'Ticket'
    }]
});

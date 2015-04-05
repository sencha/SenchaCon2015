Ext.define('Ticket.store.Tickets', {
    extend: 'Ext.data.Store',
    alias: 'store.tickets',

    model: 'Ticket.model.Ticket',

    autoLoad: true
});

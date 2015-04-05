Ext.define('Ticket.model.Base', {
    extend: 'Ext.data.Model',

    identifier: 'negative',

    schema: {
        namespace: 'Ticket.model',
        proxy: {
            //type: 'rest',
            noCache: false,
            url: '~api/{entityName:uncapitalize}'
        }
    }
});

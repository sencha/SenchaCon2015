Ext.define('Ticket.data.Sim', {
    requires: [
        'Ext.ux.ajax.JsonSimlet',
        'Ext.ux.ajax.SimManager'
    ],

    singleton: true,

    constructor: function() {
        Ext.ux.ajax.SimManager.init({
            defaultSimlet: null
        }).register({
            '~api/ticket': {
                type: 'json',
                data: [{
                    id: 10,
                    summary: "Something went wrong",
                    description: "I'd tell you what went wrong but that would be too easy.",
                    assigneeId: 1,
                    reporterId: 1
                }]
            },

            '~api/user': {
                type: 'json',
                data: [{
                    id: 1,
                    name: "Don",
                    fullName: "Don Griffin",
                    pic: ""
                }, {
                    id: 2,
                    name: "Bill",
                    fullName: "Bill S. Preston, Esq.",
                    pic: "http://images2.fanpop.com/images/photos/2800000/Bill-S-Preston-Esq-bill-and-ted-2892235-333-500.jpg"
                }, {
                    id: 3,
                    name: "Ted",
                    fullName: "Ted (Theodore) Logan",
                    pic: "http://images2.fanpop.com/images/photos/2800000/Ted-Theodore-Logan-bill-and-ted-2892205-319-458.jpg"
                }]
            },
            
            '~api/comment': {
                type: 'json',
                data: [{
                    "id": 100,
                    "text": "This bug report is totally bogus!",
                    "date": "Oct 2",
                    "creator": {
                        "id": 2,
                        "name": "Bill",
                        "fullName": "Bill S. Preston, Esq.",
                        "pic": "http://images2.fanpop.com/images/photos/2800000/Bill-S-Preston-Esq-bill-and-ted-2892235-333-500.jpg"
                    },
                    "ticketId": 10
                }, {
                    "id": 101,
                    "text": "No way! It is a most excellent bug report!",
                    "date": "Oct 7",
                    "creator": {
                        "id": 3,
                        "name": "Ted",
                        "fullName": "Ted (Theodore) Logan",
                        "pic": "http://images2.fanpop.com/images/photos/2800000/Ted-Theodore-Logan-bill-and-ted-2892205-319-458.jpg"
                    },
                    "ticketId": 10
                }]
            }
        });
    }
});

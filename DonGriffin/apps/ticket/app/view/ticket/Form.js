Ext.define('Ticket.view.ticket.Form', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ticket.view.ticket.FormController'
    ],
    
    xtype: 'ticketform',
    controller: 'ticketform',

    layout: 'column',
    bodyPadding: 10,

    viewModel: {
        stores: {
            users: {
                model: 'User',
                session: true,
                autoLoad: true
            }
        }
    },

    items: [{
        columnWidth: 0.6,
        layout: 'anchor',
        defaultType: 'textfield',
        defaults: {
            anchor: '0'
        },
        items: [{
            fieldLabel: 'Summary',
            bind: {
                value: '{ticket.summary}'
            }
        }, {
            xtype: 'textarea',
            height: 150,
            fieldLabel: 'Description',
            bind: {
                value: '{ticket.description}'
            }
        }, {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'grid',
                title: 'Comments',
                collapsible: true,
                bind: '{ticket.comments}',
                margin: '20 0 0 0',
                columns: [{
                    flex: 1,
                    xtype: 'templatecolumn',
                    tpl: ['<img style="float:left; padding-right: 10px;" height="64" ', 'src="{[values.creator.pic]}" ', 'alt="{[values.creator.fullName]}" ', 'data-qtip="{[values.creator.fullName]}">', '<div style="float:left">{text}</div>', '<div style="float:right; color:#bbb">{date}</div>']
                }, {
                    xtype: 'actioncolumn',
                    width: 30,
                    items: [{
                        iconCls: 'delete-icon',
                        handler: 'onRemoveCommentClick'
                    }]
                }],
                hideHeaders: true
            }, {
                xtype: 'textarea',
                emptyText: 'Comment Text',
                reference: 'newComment'
            }, {
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'component',
                    flex: 1
                }, {
                    xtype: 'button',
                    text: 'Add Comment',
                    handler: 'onAddCommentClick'
                }]
            }]
        }]
    }, {
        xtype: 'component',
        height: 1,
        width: 20
    }, {
        columnWidth: 0.4,
        layout: 'anchor',
        defaultType: 'textfield',
        defaults: {
            anchor: '0',
            labelWidth: 60
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '<b>People</b>'
        }, {
            xtype: 'combobox',
            fieldLabel: 'Assignee',
            editable: false,
            forceSelection: true,
            displayField: 'name',
            valueField: 'id',
            bind: {
                selection: '{ticket.assignee}',
                store: '{users}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Reporter',
            bind: {
                value: '{ticket.reporter.name}'
            }
        }]
    }]
});

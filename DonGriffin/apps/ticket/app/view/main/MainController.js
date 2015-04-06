/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Ticket.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    requires: [
        'Ticket.view.ticket.Window'
    ],

    onEditRow: function (view, info) {
        var view = this.getView();
        
        this.ticketWindow = view.add({
            xtype: 'ticketwindow',
            modal: true,
            bodyPadding: 0,
            
            // Create a child session ...
            session: {
                autoDestroy: true // ... and destroy it with the view
            },
            
            viewModel: {
                // Pass the selected record to the child session as "ticket".
                // Because the child VM also has a child session, the record
                // will not be shared directly.
                links: {
                    ticket: info.record
                }
            }
        });
        
        this.ticketWindow.show();
    },
    
    onSaveClick: function () {
        var win = this.ticketWindow;

        // Copy changes made back to the parent session.
        win.getSession().save();

        // To save to a server instead:
        //var batch = win.getSession().getSaveBatch();
        //batch.start();
        
        win.destroy();
    },
    
    onShowChanges: function () {
        var changes = this.getSession().getChanges();

        if (changes) {
            new Ext.window.Window({
                autoShow: true,
                title: 'Session Changes',
                modal: true,
                width: 600,
                height: 400,
                layout: 'fit',
                items: {
                    xtype: 'component',
                    scrollable: true,
                    style: 'font-size: 22px; line-height: 1; padding-left: 6px',
                    html: '<pre>' + JSON.stringify(changes, null, 2) + '</pre>'
                }
            });
        } else {
            Ext.Msg.alert('No Changes', 'The session has no changes.');
        }
    }
});

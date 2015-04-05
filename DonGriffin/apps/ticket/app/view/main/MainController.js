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
            
            // Create a child session
            session: {
                autoDestroy: true // destroy with the view
            },
            
            viewModel: {
                links: {
                    ticket: info.record
                }
            }
        });
        
        this.ticketWindow.show();
    },
    
    onSaveClick: function () {
        var win = this.ticketWindow;
        win.getSession().save();
        win.destroy();
    }
});

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
            
            session: {
                autoDestroy: true
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
        debugger;
        this.ticketWindow.destroy();
    }
});

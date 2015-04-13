Ext.define('Ticket.view.ticket.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ticketform',

    onAddCommentClick: function() {
        var ticket = this.getViewModel().get('ticket'),
            d = new Date(),
            field = this.lookupReference('newComment'),
            comment;
        
        comment = new Ticket.model.Comment({
            creatorId: 1,
            text: field.getValue(),
            date: d.getDate() + ' ' + Ext.Date.getShortMonthName(d.getMonth())
        }, this.getSession());

        // Ensure the creator record instance is immediately available
        // for rendering.
        comment.setCreator(comment.getCreator());
        
        ticket.comments().add(comment);
        
        field.setValue('');
    },
    
    onDeleteComment: function (view, info) {
        info.record.drop();
    }
});

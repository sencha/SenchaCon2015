Ext.define('Ticket.view.ticket.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ticketform',

    onAddCommentClick: function() {
        var ticket = this.getViewModel().get('ticket'),
            d = new Date(),
            field = this.lookupReference('newComment'),
            comment = new Ticket.model.Comment({
            	creatorId: 1,
            	text: field.getValue(),
            	date: d.getDate() + ' ' + Ext.Date.getShortMonthName(d.getMonth())
        	}, this.getSession());
        
        // Force the creator to be resolved, should have a better way to do this
        comment.setCreator(comment.getCreator());
        
        ticket.comments().add(comment);
        
        field.setValue('');
    },
    
    onDeleteComment: function (view, info) {
        info.record.drop();
    },

    onRemoveCommentClick: function(view, rowIdx, colIdx, actionItem, e, rec) {
        this.getViewModel().get('ticket').comments().remove(rec);
    }
});

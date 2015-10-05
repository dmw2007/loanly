Meteor.subscribe('loansRequests');

Template.loansRequests.helpers({
    loansRequests: function () {
        return LoansRequests.find({},{sort : {createdAt : -1}});
    }
});

Template.loanRequestItem.events({
    'click .delete-loan-request' : function(event){
        event.preventDefault();

        var confirm = window.confirm("Delete this loan request?");
        if (confirm) Meteor.call('loansRequests:remove', this._id);
    }
});
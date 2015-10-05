Template._loansRequestForm.events({
    "submit .loan-request": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        this.title = event.target.title.value;


        var handleRes = function(error, results){
            if(error){
                console.log(error.reason);
            } else {
                Router.go('loansRequests');
            }
        };

        if (this._id){
            Meteor.call('loansRequests:update', this, handleRes);
        } else {
            Meteor.call('loansRequests:create', this, handleRes);
        }

        // Clear form
        event.target.title.value = '';
    }
});
Meteor.publish('loansRequests', function(){
    return LoansRequests.find();
});

Meteor.methods({
    'loansRequests:create': function(data){
        var currentUser = Meteor.userId();

        LoansRequests.insert({
            title: data.title,
            owner : currentUser,
            createdAt: new Date() // current time
        });
    },
    'loansRequests:update': function(data){
        var currentUser = Meteor.userId();

        LoansRequests.update({_id : data._id}, {$set : {title : data.title}});
    },
    'loansRequests:remove': function(id){
        var currentUser = Meteor.userId();

        LoansRequests.remove(id);
    }
});
Router.configure({
    layoutTemplate: 'main',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound'
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });

    this.route('loansRequests', {
        path: '/loans-requests'
    });
    this.route('loanRequest', {
        path: '/loan-request'
    });
    this.route('createLoanRequest', {
        path: '/add-loan-request'
    });
    this.route('loan-request/:id/edit', {
        template : 'editLoanRequest',
        data : function(){
            return LoansRequests.findOne({_id: this.params.id});
        }
    });
});

Router.plugin('ensureSignedIn', {
  only: ['createLoanRequest']
});


//UserAccounts Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

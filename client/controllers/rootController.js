rootController = RouteController.extend({

    index: function(){
        if(Meteor.loggingIn()){
            return this.render('loading');
        }

        if(Meteor.user()){
            if(Meteor.user().profile.company){
                return this.redirect('dashboard');
            }

            return this.redirect('update');
        }

        this.render(this.route.name);
    },

    update: function(){
        this.render(this.route.name);
    }
});

Template.update.events({
   'submit form': function(e){
        var name = $('#company-name');
       //validate here

       Meteor.users.update(Meteor.userId(), { $set: { 'profile.company': name.val() }});
       Router.go('dashboard');

        return false;
   }
});
dashboardController = RouteController.extend({
   index: function(){
       if(Meteor.loggingIn()){
           return this.render('loading');
       }

       if(!Meteor.user()){
           return this.redirect('root');
       }

       if(!Meteor.user().profile.company){
           return this.redirect('update');
       }

       return this.render(this.route.name);
   }
});
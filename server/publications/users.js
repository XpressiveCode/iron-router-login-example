Meteor.users.allow({
    update: function(userId, user){
        return user._id === Meteor.userId();
    }
});

Meteor.publish('userData', function(){
   if(this.userId){
       return Meteor.users.find(this.userId, { fields: {  profile: 1, services: 1}});
   }

    return [];
});
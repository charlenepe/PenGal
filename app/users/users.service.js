
angular.module('pengalapp')
  .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){
    var usersRef = new Firebase(FirebaseUrl+'users');
    var connectedRef = new Firebase(FirebaseUrl+'.info/connected');
    var users = $firebaseArray(usersRef);

    var Users = {};

    var Users = {
  getProfile: function(uid){
    return $firebaseObject(usersRef.child(uid));
  },

  getGravatar: function(uid){
    return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
  },

  getDisplayName: function(uid){
    return users.$getRecord(uid).displayName;
  },

  setOnline: function(uid){
    var connected = $firebaseObject(connectedRef);
    var online = $firebaseArray(usersRef.child(uid+'/online'));

    connected.$watch(function (){
      if(connected.$value === true){
        online.$add(true).then(function(connectedRef){
          connectedRef.onDisconnect().remove();
        });
      }
    });
  },

  all: users


  };

    return Users;
});
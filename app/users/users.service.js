angular.module('angularfireSlackApp')
	.factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){
		var Users = {};
		return Users;
});


angular.module('angularfireSlackApp')
  .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){
    var usersRef = new Firebase(FirebaseUrl+'users');
    var users = $firebaseArray(usersRef);

    var Users = {};

    return Users;
  });

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
  all: users
};
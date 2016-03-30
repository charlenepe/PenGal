angular.module('angularfireSlackApp')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;
    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;
    channelsCtrl.getDisplayName = Users.getDisplayName;
    channelsCtrl.getGravatar = Users.getGravatar;
    channelsCtrl.logout = function(){
    Auth.$unauth();
    $state.go('home');
};


  });


 //  angular.module('angularfireSlackApp')
 //  .controller('ProfileCtrl', function($state, md5, auth, profile){
 //    var profileCtrl = this;


	// profileCtrl.profile = profile;

	// profileCtrl.updateProfile = function(){
	// 	profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
	// 	profileCtrl.profile.$save().then(function(){
 //  			$state.go('channels');
	// 	});
	//   };

 //  });


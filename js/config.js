var FlexSite = {
	type: 'entertainer',
	rootId: '',
	routes: [{"url":"/","templateUrl":"/html/home.html","title":"Site Admin","id":null},{"url":"/login","templateUrl":"/html/login.html","title":"Comedian Login","id":null},{"url":"/users","templateUrl":"/html/user/list.html","title":"User List","controller":"ListController","id":null},{"url":"/account","templateUrl":"/html/user/list.html","title":"User List","controller":"ListController","id":null},{"url":"/admin/user/:id?","templateUrl":"/html/admin/userAddEdit.html","title":"Edit User","controller":"UserController","id":null},{"url":"/profile","templateUrl":"/html/profile/addEdit.html","title":"Edit Profile","controller":"EntertainerController","id":null},{"url":"/media","templateUrl":"/html/media/list.html","title":"Edit Media","controller":"ListController","id":null},{"url":"/medium/:id?","templateUrl":"/html/media/addEdit.html","title":"Edit Medium","controller":"MediumController","id":null},{"url":"/events","templateUrl":"/html/event/list.html","title":"Event List","controller":"ListController","id":null},{"url":"/event/:id?","templateUrl":"/html/event/addEdit.html","title":"Edit Event","controller":"EventController","id":null},{"url":"/venue/:id?","templateUrl":"/html/venue/addEdit.html","title":"Edit Venue","controller":"VenueController","id":null},{"url":"/settings","templateUrl":"/html/site/edit.html","title":"Edit Site Settings","controller":"SiteController","id":null}]
}
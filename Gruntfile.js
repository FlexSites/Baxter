module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        abbr: __dirname.split('/').pop(),
        sdk: {
            options: {
                modules: [
	               	'AdminApp',

	               	// Module inclusion
	               	'AppModule',
	               	'InterceptorModule',
	               	'EntertainerModule',
	               	'MessageModule',
	               	'SubscriberModule',
	               	'SiteModule',
	               	'UserModule',
	               	'EventModule',
	               	'VenueModule',
	               	'MediaModule',
	               	'PageModule'
                ]
            }
        }   
    });

    grunt.loadTasks('../global/grunt');
};

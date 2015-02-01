module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        abbr: __dirname.split('/').pop(),
        render: {
            options: {
            	resources: [
                    'site',
            		'entertainer',
            		'subscriber',
            		'user',
            		'event',
            		'venue',
            		'medium',
            		'section',
            		'page',
            		'message'
            	]
            }
        }   
    });

    grunt.loadTasks('../global/grunt');
};

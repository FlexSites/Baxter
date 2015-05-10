angular.module('app')
  .directive('dropzone', [
    '$window',
    '$http',
    'Medium',

    function ($window, $http, Medium) {
      return {
        restrict: 'A',
        scope: {
          dropzone: '&'
        },
        link: function (scope, element) {
          new Dropzone(element[0], {
            url: '/uploads',
            method: 'PUT',
            headers: {
              'x-amz-acl': 'public-read'
            },
            // autoProcessQueue: false,
            accept: function(file, done){
              $http.get('http://<<env>>api.flexsites.io/media/sign?name='+file.name+'&type='+file.type, {
                headers: {
                  'X-FlexSite': $window.localStorage.site
                }
              })
                .then(function(res){
                  file.s3_url = res.data.signed_request;
                  done();
                });
            },
            sending: function(file, xhr) {
              // Horrible, hacky, monkey patch...
              // Makes the xhr not send as FormData
              var _send = xhr.send;
              xhr.send = function() {
                _send.call(xhr, file);
              };
            },
            init: function() {
              this.on('processing', function(file) {
                this.options.url = file.s3_url;
                this.options.headers['Content-Type'] = file.type;
              });

              this.on('success', function(file) {
                var medium = new Medium({
                  type: file.type,
                  name: file.name,
                  src: file.s3_url.split('?')[0]
                });

                medium.$create(function(){
                  scope.dropzone({
                    medium: medium,
                    isAdded: true
                  });
                });
              });
            }
          });
        }
      };
    }
  ]);

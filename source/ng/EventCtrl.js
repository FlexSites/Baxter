angular.module('app')
  .controller('EventCtrl', [
    '$window',
    '$http',
    '$scope',
    '$state',
    '$q',
    'Event',
    'Medium',
    'Showtime',
    'event',
    'venues',
    'showtimes',

  function($window, $http, $scope, $state, $q, Event, Medium, Showtime, event, venues, showtimes){

    // Variables
    $scope.event = event || new Event();
    $scope.venues = venues;
    $scope.showtimes = showtimes;
    $scope.editShowtime = new Showtime();
    $scope.venueMap = venues.reduce(function(prev,curr){
      prev[curr.id] = curr;
      return prev;
    }, {});

    console.log(event);

    // Functions

    // Venue
    $scope.changeVenue = changeVenue;
    $scope.getSections = getSections;

    $scope.selectMedia = selectMedia;
    $scope.hasPanel = hasPanel;
    $scope.mediaChange = mediaChange;

    // Pricing
    $scope.addTier = addTier;
    $scope.removeTier = removeTier;

    // Showtime
    $scope.addShowtime = addShowtime;
    $scope.saveShowtime = saveShowtime;
    $scope.removeShowtime = removeShowtime;

    // Event
    $scope.saveEvent = saveEvent;

    if(!event.venue && venues.length){
      $scope.event.venue = event.venue = venues[0].id;
      changeVenue();
    }
    if(!$scope.event.pricingTiers) addTier();

    addShowtime();

    function changeVenue(){

    }


    function selectMedia(media){
      console.log('select media', media);
      if(!$scope.event.media) $scope.event.media = [];
      $scope.event.media.push(media);
      $state.go('eventEdit');
    }

    function addTier(){
      var tier = {};
      var venue = $scope.event.venue
      console.log('add tier for %s', venue.name, venue);
      if(!venue || !venue.sections) return;
      venue.sections.forEach(function(section){
        if(!tier.sections) tier.sections = [];
        tier.sections.push({
          id: section.id
        });
      });
      if(!$scope.event.pricingTiers) $scope.event.pricingTiers = [];
      $scope.event.pricingTiers.push(tier);
    }

    function addShowtime(force){
      if(!$scope.showtimes) $scope.showtimes = [];

      var showtimes = $scope.showtimes
        , showtime = new Showtime({event: event.id})
        , last = showtimes[showtimes.length-1] || showtime;
      if(!showtimes.length || (force && last.date && last.time)) $scope.showtimes.push(showtime);
      return showtime;
    }

    function saveShowtime(showtime, cb){
      if(!(showtime instanceof Showtime)) showtime = new Showtime(showtime);
      if(!event.id) return;
      showtime.eventId = event.id;
      if(showtime.id){
        return showtime.$upsert(cb);
      }
      return showtime.$create(cb);
    }

    function removeShowtime(showtime){
      if(!showtime.id) return done();
      showtime.$delete(done);

      function done(){
        $scope.showtimes = $scope.showtimes.filter(function(showtime){
          return showtime !== showtime && showtime.id !== showtime.id;
        });
        addShowtime();
      }
    }

    function getSections(tier){
      var event = $scope.event;
      var venues = $scope.venues;
      if(!event.venue || !venues) return [];

      console.log('here', event.venue);
      for(var i = 0, len = venues.length; i < len; i++){
        if(venues[i].id !== event.venue) continue;
        console.log(venues[i]);
        return venues[i].sections;
      }
    }

    function removeTier(idx){
      $scope.event.pricingTiers.splice(idx,1);
      console.log('remove tier', idx);
    }

    function hasPanel() {
      return $state.is('eventEdit.media');
    }

    function mediaChange(medium, isAdded){
      if(!$scope.event.mediumIds) $scope.event.medium = [];
      $scope.event.medium.push(medium.id);
    }

    function saveEvent(){
      if($scope.event.id){
        return $scope.event.$upsert(done);
      }
      $scope.event.$create(done);
      function done(data){
        console.log(data);
        $q.all($scope.showtimes.map(function(showtime){
          return saveShowtime(showtime);
        }));
        $state.go('events');
      }
    };
  }]);

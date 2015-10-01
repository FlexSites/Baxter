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

  function($window, $http, $scope, $state, $q, Event, Medium, Showtime, event, venues){

    // Variables
    var calendar;
    $scope.event = event || new Event();
    $scope.venues = venues;
    $scope.editShowtime = new Showtime();
    $scope.venueMap = venues.reduce(function(prev,curr){
      prev[curr.id] = curr;
      return prev;
    }, {});



    $scope.selectedDate = new Date().toISOString();
    if ($scope.event.showtimes && $scope.event.showtimes.length) {
      $scope.selectedDate = $scope.event.showtimes[0].datetime;
    }
    $scope.availableTimes = getTimes();
    $scope.selectedTime = $scope.availableTimes[0].value;

    $(function(){
      calendar = $('#calendar').fullCalendar({
        timezone: 'local',
        editable: false,
        eventRender: function(event, element) {
          console.log(element.html());
          return element;
        },
        events: function( start, end, timezone, callback ) {
          callback($scope.event.showtimes.map(function(show) {
            return {
              id: show._id,
              // title: show.formats.time,
              start: show.datetime,
              url: '/events/' + event.id
            };
          }));
        },

        // events: {
        //   url: '/api/v1/showtimes',
        //   type: 'GET',
        //   // startParam: 'filter[where][datetime][$gte]',
        //   // endParam: 'filter[where][datetime][$lte]',
        //   data: {
        //     'filter[where][event]': event.id
        //   },
        //   eventDataTransform: function(data) {
        //     console.log({
        //       id: data._id,
        //       title: data.formats.time,
        //       allDay: false,
        //       start: data.datetime,
        //       url: '/events/' + event.id
        //     });
        //     return {
        //       id: data._id,
        //       // title: data.formats.time,
        //       start: data.datetime,
        //       url: '/events/' + event.id
        //     };
        //   },
        //   error: function() {
        //     alert('there was an error while fetching events!');
        //   },
        //   color: '#FF6700',   // a non-ajax option
        //   textColor: 'white' // a non-ajax option
        // },
        dayClick: function(date, jsEvent, view) {
          console.log(jsEvent.target, view, date);
          $('.dumbClass').removeClass("dumbClass");
          $(jsEvent.target).find('.fc-day').addClass("dumbClass");
          $scope.selectedDate = date.format();
          calendar.fullCalendar('render');
          $scope.$digest();
        },
        dayRender: function (date, cell) {
          console.log('day render', date, cell);
        }
      });
    });

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
      $scope.event.venue = event.venue = venues[0];
      changeVenue();
    }
    if(!$scope.event.pricingTiers) addTier();

    function changeVenue(){

    }


    function selectMedia(media){
      if(!$scope.event.media) $scope.event.media = [];
      $scope.event.media.push(media);
      $state.go('eventEdit');
    }

    function addTier(){
      var tier = {};
      var venue = $scope.event.venue;
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

    function addShowtime(){
      if(!$scope.event.showtimes) $scope.event.showtimes = [];

      var parts = $scope.selectedTime.split(':');
      var datetime = moment($scope.selectedDate);
      datetime.set('hour', parts[0]);
      datetime.set('minute', parts[1]);

      var showtime = new Showtime({event: event.id, datetime: datetime.toISOString()});
      $scope.event.showtimes.push(showtime);
      calendar.fullCalendar('refetchEvents');
      return showtime;
    }

    function saveShowtime(showtime, cb){
      if(!(showtime instanceof Showtime)) showtime = new Showtime(showtime);
      if(!event.id) return;
      showtime.event = event.id;
      if(showtime.id){
        return showtime.$upsert(cb);
      }
      return showtime.$create(cb);
    }

    function removeShowtime(showtime){
      if(!showtime.id) return done();
      showtime.$delete(done);

      function done(){
        $scope.event.showtimes = $scope.event.showtimes.filter(function(showtime){
          return showtime !== showtime && showtime.id !== showtime.id;
        });
        addShowtime();
      }
    }

    function getSections(){
      var event = $scope.event;
      var venues = $scope.venues;
      if(!event.venue || !venues) return [];

      for(var i = 0, len = venues.length; i < len; i++){
        if(venues[i].id !== event.venue) continue;
        return venues[i].sections;
      }
    }

    function removeTier(idx){
      $scope.event.pricingTiers.splice(idx,1);
    }

    function hasPanel() {
      return $state.is('eventEdit.media');
    }

    function mediaChange(medium){
      if(!$scope.event.mediumIds) $scope.event.medium = [];
      $scope.event.medium.push(medium.id);
    }

    function saveEvent(){
      $q.all($scope.event.showtimes.map(saveShowtime))
        .then(function(showtimes){
          var venue = $scope.event.venue;
          if (typeof venue === 'object') $scope.event.venue = venue._id || venue.id;

          $scope.event.showtimes = showtimes;
          if($scope.event.id){
            return $scope.event.$upsert(eventDone);
          }
          $scope.event.$create(eventDone);
        });

      function eventDone(){
        $state.go('events');
      }
    }
  }])
  .filter("showtimesOnDay", function() {
    return function(items, from) {
      console.log('items', items, from);
      var start = moment(new Date(from));
      return items.filter(function(item){
        console.log('difference', start.diff(moment(item.datetime)));
      });
    };
  })
  .directive('editTime', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {

        //format text going to user (model to view)
        ngModel.$formatters.push(function(value) {
          console.log('format', value);
          return moment(value).format('LT');
        });

        //format text from the user (view to model)
        ngModel.$parsers.push(function(value) {
          console.log('parse', value);
          console.log(arguments);
          return value;
        });
      }
    }
  });

  function getTimes(){
    var start = moment();
    start.set('hour', 11);
    start.set('minute', 45);

    var startDay = start.day();
    var results = [];

    while (startDay === start.day()) {
      results.push({
        key: start.add(15, 'minute').format('LT'),
        value: start.format('HH:mm')
      });
    }
    return results;
  }

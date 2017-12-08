'use strict';

eventsApp.controller('EventListController',
	function EventListController($scope, $location, $anchorScroll, eventData) {
		$scope.events = eventData.getAllEvents();

	}
);

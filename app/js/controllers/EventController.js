'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData, $log, $anchorScroll) {

		$scope.buttonDisabled = true;
		$scope.sortorder = 'name';
		eventData.getEvent()
			.$promise
			.then(function(event) {
				$scope.event = event;
			})
			.catch(function(response) {
				console.log(response);
			});

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}

		$scope.scrollToSession = function() {
			$anchorScroll();
		}

	}
);

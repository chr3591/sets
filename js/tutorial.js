var tutorialApp = angular.module('tutorialApp', ['ngAnimate']);

tutorialApp.directive('tutorial', function() {
  return {
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {
			scope.index = 0; // Beim initialen Aufruf steht das erste Bild im Fokus
	
			scope.next_image = function() { // Wenn Ende erreicht, springe wieder zu Bild 0
			  	if (scope.index < scope.images.length - 1){
				  	scope.index++
			  		}
				else {
					scope.index = 0;
				}
			};
			
			scope.previous_image = function() { // Wenn 0 erreicht, springe zum letzten Bild
				  if (scope.index > 0) {
					  scope.index--
				  }
				  else {
					  scope.index = scope.images.length - 1;
				  }
			};
			
			scope.$watch('index', function() {
				scope.images.forEach(function(image) {
					image.visible = false; // Versteckt jedes Bild
				});
				
				scope.images[scope.index].visible = true; // Sorgt für die Anzeige des aktuellen Bilds
			});
		},
    templateUrl: 'slideshow.html'
  };
});

tutorialApp.controller('TutorialController', function($scope) {
  //Reihenfolge hier = Reihenfolge in der Ansicht
  $scope.images = [{
    name: 'Trägermenge',
	src: 'Traegermenge.png'
  }, {
    name: 'Teilmenge',
	src: 'Teilmenge.png'
  }, {
    name: 'Gleichheit',
	src: 'Gleichheit.png'
  }, {
    name: 'Ungleichheit',
	src: 'Ungleichheit.png'
  }, {
    name: 'Schnittmenge',
	src: 'Schnittmenge.png'
  }, {
    name: 'Vereinigung',
	src: 'Vereinigung.png'
  }, {
    name: 'Differenz',
	src: 'Differenz.png'
  }, {
    name: 'Komplement',
	src: 'Komplement.png'
  }, {
    name: 'Die wichtigsten Gesetze I',
	src: 'Gesetze_1.png'
  }, {
    name: 'Die wichtigsten Gesetze II',
	src: 'Gesetze_2.png'
  }, {
    name: 'Partition',
	src: 'Partition.png'
  }];
});
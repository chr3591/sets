var app = angular.module('quantityQuiz', []);
 
app.directive('quiz', function(exerciseGenerator) {
	return {
	    scope: {},
		templateUrl: 'quiz_questions.html',
		link: function(scope, elem, attrs) {					
					scope.startQuiz = function() {
							scope.questionID = 0;
							scope.endOfQuiz = false;
							scope.playing = true;
							scope.getExercise();
					};
		 			
					scope.quizReset = function() {
						scope.playing = false;
						scope.totalscore = 0;
					};
					
					scope.getExercise = function() {
							var qid = exerciseGenerator.getQuestion(scope.questionID);
							if(qid) {
								scope.question = qid.question;
								scope.options = qid.options;
								scope.answer = qid.correctAnswer;
								scope.checkAnswer = true;
							} else {
								scope.endOfQuiz = true;
							}
					};
		 
					scope.checkChoice = function() {
							if(!$('input[name=choice]:checked').length) return;
							var c = $('input[name=choice]:checked').val();
							if(c == scope.options[scope.answer]) {
								scope.totalscore++;
								scope.correctChoice = true;
							} else {
								scope.correctChoice = false;
							}
			 
							scope.checkAnswer = false;
					};
					
					scope.next = function() {
						scope.questionID++;
						scope.getExercise();
					};
					scope.quizReset();
		}	
    }
});

app.factory('exerciseGenerator', function() {
	var exercises = [
		{
			question: "Wie lautet ein anderer Begriff für die Trägermenge?",
			options: ["Hauptmenge", "Universalmenge", "Gesamtmenge", "keine der anderen Antworten"],
			correctAnswer: 1,
			alreadyPlayed: 0
		},
		{
			question: "Wofür steht dieser Mengenoperator? ∖",
			options: ["Komplement", "Schnittmenge", "Differenz", "Vereinigung"],
			correctAnswer: 2,
			alreadyPlayed: 0
		},
		{
			question: 'Wofür steht dieser Mengenoperator? ∪',
			options: ["Vereinigung", "Differenz", "Schnittmenge", "Komplement"],
			correctAnswer: 0,
			alreadyPlayed: 0
		},
		{
			question: "Wofür steht dieser Mengenoperator? ∩",
			options: ["Schnittmenge", "Vereinigung", "Komplement", "Differenz"],
			correctAnswer: 0,
			alreadyPlayed: 0
		},
		{	
			question: "Wofür steht dieser Mengenoperator? ‾",
			options: ["Differenz", "Komplement", "Vereinigung", "Schnittmenge"],
			correctAnswer: 1,
			alreadyPlayed: 0
		}
	];
	return {
		getQuestion: function(id) {
			var frage = Math.floor(Math.random() * exercises.length);
			while (exercises[frage].alreadyPlayed != 0 && id != exercises.length) {
				frage = Math.floor(Math.random() * exercises.length);
			}
			exercises[frage].alreadyPlayed = 1;
			if (id != exercises.length) {
				return exercises[frage];
			}
			else {
				for (i=0;i<exercises.length;i++){
				exercises[i].alreadyPlayed = 0
				}
				return false;
			}
		}
	};
});
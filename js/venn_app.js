angular.module("vennApp",[]).controller("vennCtrl", function setController($scope){
	var m1 = false, m2 = false, m3 = false, m4 = false, m5 = false, m6 =false, m7 = false, m8 = false, m9 = false, m10 = false, m11 = false, m12 = false, m13 =false, m14 = false, m15 = false;
	$scope.rect = true;
	$scope.four = false;
	$scope.style_arr = [{
	  value: '1',
	  text: 'Quadrate'
	}, {
	  value: '2',
	  text: 'Kreise'
	}, {
	  value: '3',
	  text: '4 Mengen'
	}];
	$scope.styleSelected = $scope.style_arr[0];
	$scope.getStyle = function () {
		if ($scope.styleSelected.text == 'Kreise'){
			$scope.rect = false;
			$scope.circle = true;
			$scope.four = false;
			check_r1 = false;
			check_r2 = false; 
			check_r3 = false;
			check_r4 = false;
			check_r5 = false;
			check_r6 = false;
			check_r7 = false;
		}
		else if ($scope.styleSelected.text == '4 Mengen'){
			$scope.rect = false;
			$scope.circle = false;
			$scope.four = true;
			check_r1 = false;
			check_r2 = false; 
			check_r3 = false;
			check_r4 = false;
			check_r5 = false;
			check_r6 = false;
			check_r7 = false;
			check_c1 = false;
			check_c2 = false; 
			check_c3 = false;
			check_c4 = false;
			check_c5 = false;
			check_c6 = false;
			check_c7 = false;
		}
		else {
			$scope.rect = true;
			$scope.circle = false;
			$scope.four = false;
			check_r1 = false;
			check_r2 = false; 
			check_r3 = false;
			check_r4 = false;
			check_r5 = false;
			check_r6 = false;
			check_r7 = false;
			check_c1 = false;
			check_c2 = false; 
			check_c3 = false;
			check_c4 = false;
			check_c5 = false;
			check_c6 = false;
			check_c7 = false;
		}
	}
	
	//Prozentualer Zufall für Mengen in der Aufgabenstellung
	var set_percentage = Math.floor(Math.random() * 100)+1;
	var sets = 0;
	if (set_percentage < 6){
		sets = 2;
	}
	else if (set_percentage > 5 && set_percentage < 81){
		sets = 3;
	}
	else {
		sets = 4;
	}
	
	//Klammerwahrscheinlichkeit
	var bracket_percentage = Math.floor(Math.random() * 100)+1;
	var brackets = false;
	if (bracket_percentage < 16){
		brackets = true;
	}
	else {
		brackets = false;
	}
	
	//Aufgabengenerierung
	var ex = "Zeigen Sie ";
	var operators = [];
	for (i=1;i<=sets;i++){ //Hier muss dann eingetragen werden, dass eine Iteration mehr erfolgen muss, wenn der User 4 Mengen haben will
		operators[i] = Math.floor(Math.random() * 3)+1;
		switch(operators[i]) {
				case 1:
					operators[i]="∖";
					break;
				case 2:
					operators[i]="∪";
					break;
				case 3:
					operators[i]="∩";
					break;
		}
		if (brackets == true && sets > 2 && i==2){
			ex += "(M" + i + " " + operators[i] + " ";
		}
		else if (brackets == true && sets > 2 && i!=sets && i>2){
			ex += "M" + i + ") " + operators[i] + " ";
		}
		else if (brackets == true && sets > 2 && i==3){
			ex += "M" + i + ")";
		}
		else if (i != sets){
			ex += "M" + i + " " + operators[i] + " ";	
		}
		else{
			ex += "M" + i;
		}
	}
	$scope.exercise = ex;
	
	// Ergebnisermittlung für 2 Mengen
	if (sets == 2){
		if (operators[1] == "∖"){
			m1 = true;
		}
		else if (operators[1] == "∪"){
			m1 = true;
			m2 = true;
			m4 = true;
		}
		else if (operators[1] == "∩"){
			m4 = true;
		}
	}
	// Ergebnisermittlung für 3 Mengen
	else if (sets == 3){
		if (operators[1] == "∖"){
			m1 = true;
			m5 = true;
			if (operators[2] == "∖"){
				m5 = false;
			}
			else if (operators[2] == "∪"){
				m3 = true;
			}
			else if (operators[2] == "∩"){
				m1 = false;
			}
			else if (operators[2] == "∖" && brackets == true){
				m7 = true;
			}
			else if (operators[2] == "∪" && brackets == true){
				m5 = false;
			}
			else if (operators[2] == "∩" && brackets == true){
				m4 = true;
			}
		}
		else if (operators[1] == "∪"){
			m1 = true;
			m2 = true;
			m4 = true;
			m5 = true;
			m6 = true;
			m7 = true;
			if (operators[2] == "∖"){
				m5 = false;
				m6 = false;
				m7 = false;
			}
			else if (operators[2] == "∪"){
				m3 = true;
			}
			else if (operators[2] == "∩"){
				m1 = false;
				m2 = false;
				m4 = false;
			}
			else if (operators[2] == "∖" && brackets == true){
				m6 = false;
			}
			else if (operators[2] == "∪" && brackets == true){
				m3 = true;
			}
			else if (operators[2] == "∩" && brackets == true){
				m2 = false;
			}
		}
		else if (operators[1] == "∩"){
			m4 = true;
			m7 = true;
			if (operators[2] == "∖"){
				m7 = false;
			}
			else if (operators[2] == "∪"){
				m3 = true;
			}
			else if (operators[2] == "∩"){
				m4 = false;
			}	
			else if (operators[2] == "∖" && brackets == true){
				m7 = false;
			}
			else if (operators[2] == "∪" && brackets == true){
				m5 = true;
			}
			else if (operators[2] == "∩" && brackets == true){
				m4 = false;
			}			
		}
	}
	//Ergebnis bei 4 Mengen
	else {
		if (operators[1] == "∖"){
			if (operators[2] == "∖"){
				if (operators[3] == "∖"){
					m1 = true;
				}
				else if (operators[3] == "∪"){
					m1,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9 = true;
				}
			}
			if (operators[2] == "∖" && brackets == true){
				if (operators[3] == "∖"){
					m1,m5,m7 = true;
				}
				else if (operators[3] == "∪"){
					m1,m5,m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9,m13,m15 = true;
				}
			}
			else if (operators[2] == "∪"){
				if (operators[3] == "∖"){
					m1,m3,m5,m6,m7 = true;
				}
				else if (operators[3] == "∪"){
					m1,m3,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m11,m13,m14,m15 = true;
				}
			}
			else if (operators[2] == "∪" && brackets == true){
				if (operators[3] == "∖"){
					m1 = true;
				}
				else if (operators[3] == "∪"){
					m1,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9 = true;
				}
			}
			else if (operators[2] == "∩"){
				if (operators[3] == "∖"){
					m5 = true;
				}
				else if (operators[3] == "∪"){
					m5,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m13 = true;
				}
			}
			else if (operators[2] == "∩" && brackets == true){
				if (operators[3] == "∖"){
					m1,m4,m5 = true;
				}
				else if (operators[3] == "∪"){
					m1,m4,m5,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9, m12, m13 = true;
				}
			}
		}
		else if (operators[1] == "∪"){
			if (operators[2] == "∖"){
				if (operators[3] == "∖"){
					m1,m2,m4 = true;
				}
				else if (operators[3] == "∪"){
					m1,m2,m4,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9,m10,m12 = true;
				}
			}
			else if (operators[2] == "∖" && brackets == true){
				if (operators[3] == "∖"){
					m1,m2,m4,m5,m7 = true;
				}
				else if (operators[3] == "∪"){
					m1,m2,m4,m5,m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9,m10,m12,m13,m15 = true;
				}
			}
			else if (operators[2] == "∪"){
				if (operators[3] == "∖"){
					m1,m2,m3,m4,m5,m6,m7 = true;
				}
				else if (operators[3] == "∪"){
					m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9,m10,m11,m12,m13,m14,m15 = true;
				}
			}
			else if (operators[2] == "∪" && brackets == true){
				if (operators[3] == "∖"){
					m1,m2,m3,m4,m5,m6,m7 = true;
				}
				else if (operators[3] == "∪"){
					m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9,m10,m11,m12,m13,m14,m15 = true;
				}
			}
			else if (operators[2] == "∩"){
				if (operators[3] == "∖"){
					m5,m6,m7 = true;
				}
				else if (operators[3] == "∪"){
					m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m13,m14,m15 = true;
				}
			}
			else if (operators[2] == "∩" && brackets == true){
				if (operators[3] == "∖"){
					m1,m4,m5,m6,m7 = true;
				}
				else if (operators[3] == "∪"){
					m1,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m9,m12,m13,m14,m15 = true;
				}
			}
		}
		else if (operators[1] == "∩"){
			if (operators[2] == "∖"){
				if (operators[3] == "∖"){
					m4 = true;
				}
				else if (operators[3] == "∪"){
					m4,m8,m15 = true;
				}
				else if (operators[3] == "∩"){
					m12 = true;
				}
			}
			else if (operators[2] == "∖" && brackets == true){
				if (operators[3] == "∖"){
					m4 = true;
				}
				else if (operators[3] == "∪"){
					m4,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m12 = true;
				}
			}
			else if (operators[2] == "∪"){
				if (operators[3] == "∖"){
					m3,m4,m5,m6,m7 = true;
				}
				else if (operators[3] == "∪"){
					m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15
				}
				else if (operators[3] == "∩"){
					m11,m12,m13,m14,m15 = true;
				}
			}
			else if (operators[2] == "∪" && brackets == true){
				if (operators[3] == "∖"){
					m4,m5,m7 = true;
				}
				else if (operators[3] == "∪"){
					m4,m5,m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m12,m13,m15 = true;
				}
			}
			else if (operators[2] == "∩"){
				if (operators[3] == "∖"){
					m7 = true;
				}
				else if (operators[3] == "∪"){
					m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m15 = true;
				}
			}	
			else if (operators[2] == "∩" && brackets == true){
				if (operators[3] == "∖"){
					m7 = true;
				}
				else if (operators[3] == "∪"){
					m7,m8,m9,m10,m11,m12,m13,m14,m15 = true;
				}
				else if (operators[3] == "∩"){
					m15 = true;
				}
			}		
		}
	}
	
	
	$scope.solutionCheck = function(){
		var solArray = [m1,m2,m3,m4,m5,m6,m7];
		if (solArray.join('') == answerArrayR.join('')){
		$scope.ans_right = true;
		$scope.ans_wrong = false;
		}
		else if (solArray.join('') == answerArrayC.join('')){
		$scope.ans_right = true;
		$scope.ans_wrong = false;
		}
		else if (solArray.join('') == answerArrayR4.join('')){
		$scope.ans_right = true;
		$scope.ans_wrong = false;
		}
		else {
		$scope.ans_wrong = true;
		$scope.ans_right = false;
		}
	}
});
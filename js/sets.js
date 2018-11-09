var answerArrayR = [];
var answerArrayR4 = [];
var answerArrayC = [];
var check_r1 = false, check_r2 = false, check_r3 = false, check_r4 = false, check_r5 = false, check_r6 = false, check_r7 = false, check_r8 = false, check_r9 = false, check_r10 = false, check_r11 = false, check_r12 = false, check_r13 = false, check_r14 = false, check_r15 = false;
var check_c1 = false, check_c2 = false, check_c3 = false, check_c4 = false, check_c5 = false, check_c6 = false, check_c7 = false;

function getElements(){
	//3Rect - Clickhandler
	var r1 = document.getElementById('R1'), r2 = document.getElementById('R2'), r3 = document.getElementById('R3'), r4 = document.getElementById('R4'), r5 = document.getElementById('R5'), r6 = document.getElementById('R6'), r7 = document.getElementById('R7');
	var toggle_r1 = document.getElementsByClassName("r1")[0], toggle_r2 = document.getElementsByClassName("r2")[0], toggle_r3 = document.getElementsByClassName("r3")[0], toggle_r4 = document.getElementsByClassName("r4")[0], toggle_r5 = document.getElementsByClassName("r5")[0], toggle_r6 = document.getElementsByClassName("r6")[0], toggle_r7 = document.getElementsByClassName("r7")[0];
	toggle_r1.toggleStatus = "on";
	toggle_r2.toggleStatus = "on";
	toggle_r3.toggleStatus = "on";
	toggle_r4.toggleStatus = "on";
	toggle_r5.toggleStatus = "on";
	toggle_r6.toggleStatus = "on";
	toggle_r7.toggleStatus = "on";
	r1.addEventListener('click', function(){
		console.log("M1 wurde geklickt")
		  switch(toggle_r1.toggleStatus){
			case "on":
			  toggle_r1.toggleStatus="off";
			  toggle_r1.style.fill = "orange";
			  toggle_r1.style.fillOpacity = "1";
			  check_r1 = true;
			  break;
			case "off":
			  toggle_r1.toggleStatus="on";
			  toggle_r1.style.fill = "red";
			  toggle_r1.style.fillOpacity = "0.5";
			  check_r1 = false;
			  break;
		  }
	});
	r2.addEventListener('click', function(){
		console.log("M2 wurde geklickt")
		  switch(toggle_r2.toggleStatus){
			case "on":
			  toggle_r2.toggleStatus="off";
			  toggle_r2.style.fill = "orange";
			  toggle_r2.style.fillOpacity = "1";
			  check_r2 = true;
			  break;
			case "off":
			  toggle_r2.toggleStatus="on";
			  toggle_r2.style.fill = "green";
			  toggle_r2.style.fillOpacity = "0.5";
			  check_r2 = false;
			  break;
		  }
	});
	r3.addEventListener('click', function(){
		console.log("M3 wurde geklickt")
		  switch(toggle_r3.toggleStatus){
			case "on":
			  toggle_r3.toggleStatus="off";
			  toggle_r3.style.fill = "orange";
			  toggle_r3.style.fillOpacity = "1";
			  check_r3 = true;
			  break;
			case "off":
			  toggle_r3.toggleStatus="on";
			  toggle_r3.style.fill = "blue";
			  toggle_r3.style.fillOpacity = "0.5";
			  check_r3 = false;
			  break;
		  }
	});	
	r4.addEventListener('click', function(){
		console.log("M4 wurde geklickt")
		  switch(toggle_r4.toggleStatus){
			case "on":
			  toggle_r4.toggleStatus="off";
			  toggle_r4.style.fill = "orange";
			  toggle_r4.style.fillOpacity = "1";
			  check_r4 = true;
			  break;
			case "off":
			  toggle_r4.toggleStatus="on";
			  toggle_r4.style.fill = "black";
			  toggle_r4.style.fillOpacity = "0.3";
			  check_r4 = false;
			  break;
		  }
	});
	r5.addEventListener('click', function(){
		console.log("M5 wurde geklickt")
		  switch(toggle_r5.toggleStatus){
			case "on":
			  toggle_r5.toggleStatus="off";
			  toggle_r5.style.fill = "orange";
			  toggle_r5.style.fillOpacity = "1";
			  check_r5 = true;
			  break;
			case "off":
			  toggle_r5.toggleStatus="on";
			  toggle_r5.style.fill = "black";
			  toggle_r5.style.fillOpacity = "0.3";
			  check_r5 = false;
			  break;
		  }
	});
	r6.addEventListener('click', function(){
		console.log("M6 wurde geklickt")
		  switch(toggle_r6.toggleStatus){
			case "on":
			  toggle_r6.toggleStatus="off";
			  toggle_r6.style.fill = "orange";
			  toggle_r6.style.fillOpacity = "1";
			  check_r6 = true;
			  break;
			case "off":
			  toggle_r6.toggleStatus="on";
			  toggle_r6.style.fill = "black";
			  toggle_r6.style.fillOpacity = "0.3";
			  check_r6 = false;
			  break;
		  }
	});
	r7.addEventListener('click', function(){
		console.log("M7 wurde geklickt")
		  switch(toggle_r7.toggleStatus){
			case "on":
			  toggle_r7.toggleStatus="off";
			  toggle_r7.style.fill = "orange";
			  toggle_r7.style.fillOpacity = "1";
			  check_r7 = true;
			  break;
			case "off":
			  toggle_r7.toggleStatus="on";
			  toggle_r7.style.fill = "black";
			  toggle_r7.style.fillOpacity = "0.3";
			  check_r7 = false;
			  break;
		  }
	});
	
	//4Rect - Clickhandler
	var r4_1 = document.getElementById('4R1');
	var r4_2 = document.getElementById('4R2');
	var r4_3 = document.getElementById('4R3');
	var r4_4 = document.getElementById('4R4');
	var r4_5 = document.getElementById('4R5');
	var r4_6 = document.getElementById('4R6');
	var r4_7 = document.getElementById('4R7');
	var r4_8 = document.getElementById('4R8');
	var r4_9 = document.getElementById('4R9');
	var r4_10 = document.getElementById('4R10');
	var r4_11 = document.getElementById('4R11');
	var r4_12 = document.getElementById('4R12');
	var r4_13 = document.getElementById('4R13');
	var r4_14 = document.getElementById('4R14');
	var r4_15 = document.getElementById('4R15');
	
	var toggle_4r1 = document.getElementsByClassName("r1_4")[0];
	var toggle_4r2 = document.getElementsByClassName("r2_4")[0];
	var toggle_4r3 = document.getElementsByClassName("r3_4")[0];
	var toggle_4r4 = document.getElementsByClassName("r4_4")[0];
	var toggle_4r5 = document.getElementsByClassName("r5_4")[0];
	var toggle_4r6 = document.getElementsByClassName("r6_4")[0];
	var toggle_4r7 = document.getElementsByClassName("r7_4")[0];
	var toggle_4r8 = document.getElementsByClassName("r8_4")[0];
	var toggle_4r9 = document.getElementsByClassName("r9_4")[0];
	var toggle_4r10 = document.getElementsByClassName("r10_4")[0];
	var toggle_4r11 = document.getElementsByClassName("r11_4")[0];
	var toggle_4r12 = document.getElementsByClassName("r12_4")[0];
	var toggle_4r13 = document.getElementsByClassName("r13_4")[0];
	var toggle_4r14 = document.getElementsByClassName("r14_4")[0];
	var toggle_4r15 = document.getElementsByClassName("r15_4")[0];
	
	toggle_4r1.toggleStatus = "on";
	toggle_4r2.toggleStatus = "on";
	toggle_4r3.toggleStatus = "on";
	toggle_4r4.toggleStatus = "on";
	toggle_4r5.toggleStatus = "on";
	toggle_4r6.toggleStatus = "on";
	toggle_4r7.toggleStatus = "on";
	toggle_4r8.toggleStatus = "on";
	toggle_4r9.toggleStatus = "on";
	toggle_4r10.toggleStatus = "on";
	toggle_4r11.toggleStatus = "on";
	toggle_4r12.toggleStatus = "on";
	toggle_4r13.toggleStatus = "on";
	toggle_4r14.toggleStatus = "on";
	toggle_4r15.toggleStatus = "on";
	
	r4_1.addEventListener('click', function(){
		console.log("M1 wurde geklickt")
		  switch(toggle_4r1.toggleStatus){
			case "on":
			  toggle_4r1.toggleStatus="off";
			  toggle_4r1.style.fill = "orange";
			  toggle_4r1.style.fillOpacity = "1";
			  check_r1 = true;
			  break;
			case "off":
			  toggle_4r1.toggleStatus="on";
			  toggle_4r1.style.fill = "red";
			  toggle_4r1.style.fillOpacity = "0.5";
			  check_r1 = false;
			  break;
		  }
	});
	r4_2.addEventListener('click', function(){
		console.log("M2 wurde geklickt")
		  switch(toggle_4r2.toggleStatus){
			case "on":
			  toggle_4r2.toggleStatus="off";
			  toggle_4r2.style.fill = "orange";
			  toggle_4r2.style.fillOpacity = "1";
			  check_r2 = true;
			  break;
			case "off":
			  toggle_4r2.toggleStatus="on";
			  toggle_4r2.style.fill = "green";
			  toggle_4r2.style.fillOpacity = "0.5";
			  check_r2 = false;
			  break;
		  }
	});
	r4_3.addEventListener('click', function(){
		console.log("M3 wurde geklickt")
		  switch(toggle_4r3.toggleStatus){
			case "on":
			  toggle_4r3.toggleStatus="off";
			  toggle_4r3.style.fill = "orange";
			  toggle_4r3.style.fillOpacity = "1";
			  check_r3 = true;
			  break;
			case "off":
			  toggle_4r3.toggleStatus="on";
			  toggle_4r3.style.fill = "blue";
			  toggle_4r3.style.fillOpacity = "0.5";
			  check_r3 = false;
			  break;
		  }
	});
	r4_4.addEventListener('click', function(){
		console.log("M4 wurde geklickt")
		  switch(toggle_4r4.toggleStatus){
			case "on":
			  toggle_4r4.toggleStatus="off";
			  toggle_4r4.style.fill = "orange";
			  toggle_4r4.style.fillOpacity = "1";
			  check_r4 = true;
			  break;
			case "off":
			  toggle_4r4.toggleStatus="on";
			  toggle_4r4.style.fill = "black";
			  toggle_4r4.style.fillOpacity = "0.3";
			  check_r4 = false;
			  break;
		  }
	});
	r4_5.addEventListener('click', function(){
		console.log("M5 wurde geklickt")
		  switch(toggle_4r5.toggleStatus){
			case "on":
			  toggle_4r5.toggleStatus="off";
			  toggle_4r5.style.fill = "orange";
			  toggle_4r5.style.fillOpacity = "1";
			  check_r5 = true;
			  break;
			case "off":
			  toggle_4r5.toggleStatus="on";
			  toggle_4r5.style.fill = "black";
			  toggle_4r5.style.fillOpacity = "0.3";
			  check_r5 = false;
			  break;
		  }
	});
	r4_6.addEventListener('click', function(){
		console.log("M6 wurde geklickt")
		  switch(toggle_4r6.toggleStatus){
			case "on":
			  toggle_4r6.toggleStatus="off";
			  toggle_4r6.style.fill = "orange";
			  toggle_4r6.style.fillOpacity = "1";
			  check_r6 = true;
			  break;
			case "off":
			  toggle_4r6.toggleStatus="on";
			  toggle_4r6.style.fill = "black";
			  toggle_4r6.style.fillOpacity = "0.3";
			  check_r6 = false;
			  break;
		  }
	});
	r4_7.addEventListener('click', function(){
		console.log("M7 wurde geklickt")
		  switch(toggle_4r7.toggleStatus){
			case "on":
			  toggle_4r7.toggleStatus="off";
			  toggle_4r7.style.fill = "orange";
			  toggle_4r7.style.fillOpacity = "1";
			  check_r7 = true;
			  break;
			case "off":
			  toggle_4r7.toggleStatus="on";
			  toggle_4r7.style.fill = "black";
			  toggle_4r7.style.fillOpacity = "0.3";
			  check_r7 = false;
			  break;
		  }
	});
	r4_8.addEventListener('click', function(){
		console.log("M8 wurde geklickt")
		  switch(toggle_4r8.toggleStatus){
			case "on":
			  toggle_4r8.toggleStatus="off";
			  toggle_4r8.style.fill = "orange";
			  toggle_4r8.style.fillOpacity = "1";
			  check_r8 = true;
			  break;
			case "off":
			  toggle_4r8.toggleStatus="on";
			  toggle_4r8.style.fill = "yellow";
			  toggle_4r8.style.fillOpacity = "0.5";
			  check_r8 = false;
			  break;
		  }
	});
	r4_9.addEventListener('click', function(){
		console.log("M9 wurde geklickt")
		  switch(toggle_4r9.toggleStatus){
			case "on":
			  toggle_4r9.toggleStatus="off";
			  toggle_4r9.style.fill = "orange";
			  toggle_4r9.style.fillOpacity = "1";
			  check_r9 = true;
			  break;
			case "off":
			  toggle_4r9.toggleStatus="on";
			  toggle_4r9.style.fill = "black";
			  toggle_4r9.style.fillOpacity = "0.3";
			  check_r9 = false;
			  break;
		  }
	});
	r4_10.addEventListener('click', function(){
		console.log("M10 wurde geklickt")
		  switch(toggle_4r10.toggleStatus){
			case "on":
			  toggle_4r10.toggleStatus="off";
			  toggle_4r10.style.fill = "orange";
			  toggle_4r10.style.fillOpacity = "1";
			  check_r10 = true;
			  break;
			case "off":
			  toggle_4r10.toggleStatus="on";
			  toggle_4r10.style.fill = "black";
			  toggle_4r10.style.fillOpacity = "0.3";
			  check_r10 = false;
			  break;
		  }
	});
	r4_11.addEventListener('click', function(){
		console.log("M11 wurde geklickt")
		  switch(toggle_4r11.toggleStatus){
			case "on":
			  toggle_4r11.toggleStatus="off";
			  toggle_4r11.style.fill = "orange";
			  toggle_4r11.style.fillOpacity = "1";
			  check_r11 = true;
			  break;
			case "off":
			  toggle_4r11.toggleStatus="on";
			  toggle_4r11.style.fill = "black";
			  toggle_4r11.style.fillOpacity = "0.3";
			  check_r11 = false;
			  break;
		  }
	});
	r4_12.addEventListener('click', function(){
		console.log("M12 wurde geklickt")
		  switch(toggle_4r12.toggleStatus){
			case "on":
			  toggle_4r12.toggleStatus="off";
			  toggle_4r12.style.fill = "orange";
			  toggle_4r12.style.fillOpacity = "1";
			  check_r12 = true;
			  break;
			case "off":
			  toggle_4r12.toggleStatus="on";
			  toggle_4r12.style.fill = "black";
			  toggle_4r12.style.fillOpacity = "0.3";
			  check_r12 = false;
			  break;
		  }
	});
	r4_13.addEventListener('click', function(){
		console.log("M13 wurde geklickt")
		  switch(toggle_4r13.toggleStatus){
			case "on":
			  toggle_4r13.toggleStatus="off";
			  toggle_4r13.style.fill = "orange";
			  toggle_4r13.style.fillOpacity = "1";
			  check_r13 = true;
			  break;
			case "off":
			  toggle_4r13.toggleStatus="on";
			  toggle_4r13.style.fill = "black";
			  toggle_4r13.style.fillOpacity = "0.3";
			  check_r13 = false;
			  break;
		  }
	});
	r4_14.addEventListener('click', function(){
		console.log("M14 wurde geklickt")
		  switch(toggle_4r14.toggleStatus){
			case "on":
			  toggle_4r14.toggleStatus="off";
			  toggle_4r14.style.fill = "orange";
			  toggle_4r14.style.fillOpacity = "1";
			  check_r14 = true;
			  break;
			case "off":
			  toggle_4r14.toggleStatus="on";
			  toggle_4r14.style.fill = "black";
			  toggle_4r14.style.fillOpacity = "0.3";
			  check_r14 = false;
			  break;
		  }
	});
	r4_15.addEventListener('click', function(){
		console.log("M15 wurde geklickt")
		  switch(toggle_4r15.toggleStatus){
			case "on":
			  toggle_4r15.toggleStatus="off";
			  toggle_4r15.style.fill = "orange";
			  toggle_4r15.style.fillOpacity = "1";
			  check_r15 = true;
			  break;
			case "off":
			  toggle_4r15.toggleStatus="on";
			  toggle_4r15.style.fill = "black";
			  toggle_4r15.style.fillOpacity = "0.3";
			  check_r15 = false;
			  break;
		  }
	});
	
	//3Circ - Clickhandler
	var c1 = document.getElementById('C1');
	var c2 = document.getElementById('C2');
	var c3 = document.getElementById('C3');
	var c4 = document.getElementById('C4');
	var c5 = document.getElementById('C5');
	var c6 = document.getElementById('C6');
	var c7 = document.getElementById('C7');
	
	var toggle_c1 = document.getElementsByClassName("c1")[0];
	toggle_c1.toggleStatus = "on";
	var toggle_c2 = document.getElementsByClassName("c2")[0];
	toggle_c2.toggleStatus = "on";
	var toggle_c3 = document.getElementsByClassName("c3")[0];
	toggle_c3.toggleStatus = "on";
	var toggle_c4 = document.getElementsByClassName("c4")[0];
	toggle_c4.toggleStatus = "on";
	var toggle_c5 = document.getElementsByClassName("c5")[0];
	toggle_c5.toggleStatus = "on";
	var toggle_c6 = document.getElementsByClassName("c6")[0];
	toggle_c6.toggleStatus = "on";
	var toggle_c7 = document.getElementsByClassName("c7")[0];
	toggle_c7.toggleStatus = "on";
	c1.addEventListener('click', function(){
		console.log("M1 wurde geklickt")
		  switch(toggle_c1.toggleStatus){
			case "on":
			  toggle_c1.toggleStatus="off";
			  toggle_c1.style.fill = "orange";
			  toggle_c1.style.fillOpacity = "1";
			  check_c1 = true;
			  break;
			case "off":
			  toggle_c1.toggleStatus="on";
			  toggle_c1.style.fill = "red";
			  toggle_c1.style.fillOpacity = "0.5";
			  check_c1 = false;
			  break;
		  }
	});
	c2.addEventListener('click', function(){
		console.log("M2 wurde geklickt")
		  switch(toggle_c2.toggleStatus){
			case "on":
			  toggle_c2.toggleStatus="off";
			  toggle_c2.style.fill = "orange";
			  toggle_c2.style.fillOpacity = "1";
			  check_c2 = true;
			  break;
			case "off":
			  toggle_c2.toggleStatus="on";
			  toggle_c2.style.fill = "green";
			  toggle_c2.style.fillOpacity = "0.5";
			  check_c2 = false;
			  break;
		  }
	});
	c3.addEventListener('click', function(){
		console.log("M3 wurde geklickt")
		  switch(toggle_c3.toggleStatus){
			case "on":
			  toggle_c3.toggleStatus="off";
			  toggle_c3.style.fill = "orange";
			  toggle_c3.style.fillOpacity = "1";
			  check_c3 = true;
			  break;
			case "off":
			  toggle_c3.toggleStatus="on";
			  toggle_c3.style.fill = "blue";
			  toggle_c3.style.fillOpacity = "0.5";
			  check_c3 = false;
			  break;
		  }
	});
	c4.addEventListener('click', function(){
		console.log("M4 wurde geklickt")
		  switch(toggle_c4.toggleStatus){
			case "on":
			  toggle_c4.toggleStatus="off";
			  toggle_c4.style.fill = "orange";
			  toggle_c4.style.fillOpacity = "1";
			  check_c4 = true;
			  break;
			case "off":
			  toggle_c4.toggleStatus="on";
			  toggle_c4.style.fill = "black";
			  toggle_c4.style.fillOpacity = "0.3";
			  check_c4 = false;
			  break;
		  }
	});
	c5.addEventListener('click', function(){
		console.log("M5 wurde geklickt")
		  switch(toggle_c5.toggleStatus){
			case "on":
			  toggle_c5.toggleStatus="off";
			  toggle_c5.style.fill = "orange";
			  toggle_c5.style.fillOpacity = "1";
			  check_c5 = true;
			  break;
			case "off":
			  toggle_c5.toggleStatus="on";
			  toggle_c5.style.fill = "black";
			  toggle_c5.style.fillOpacity = "0.3";
			  check_c5 = false;
			  break;
		  }
	});
	c6.addEventListener('click', function(){
		console.log("M6 wurde geklickt")
		  switch(toggle_c6.toggleStatus){
			case "on":
			  toggle_c6.toggleStatus="off";
			  toggle_c6.style.fill = "orange";
			  toggle_c6.style.fillOpacity = "1";
			  check_c6 = true;
			  break;
			case "off":
			  toggle_c6.toggleStatus="on";
			  toggle_c6.style.fill = "black";
			  toggle_c6.style.fillOpacity = "0.3";
			  check_c6 = false;
			  break;
		  }
	});
	c7.addEventListener('click', function(){
		console.log("M7 wurde geklickt")
		  switch(toggle_c7.toggleStatus){
			case "on":
			  toggle_c7.toggleStatus="off";
			  toggle_c7.style.fill = "orange";
			  toggle_c7.style.fillOpacity = "1";
			  check_c7 = true;
			  break;
			case "off":
			  toggle_c7.toggleStatus="on";
			  toggle_c7.style.fill = "black";
			  toggle_c7.style.fillOpacity = "0.3";
			  check_c7 = false;
			  break;
		  }
	});
	
	button1.addEventListener('mouseover', function(){
		answerArrayR = [check_r1,check_r2,check_r3,check_r4,check_r5,check_r6,check_r7];
		answerArrayR4 = [check_r1,check_r2,check_r3,check_r4,check_r5,check_r6,check_r7,check_r8,check_r9,check_r10,check_r11,check_r12,check_r13,check_r14,check_r15];
		answerArrayC = [check_c1,check_c2,check_c3,check_c4,check_c5,check_c6,check_c7];
		console.log ("Rect " + answerArrayR);
		console.log ("Circ " + answerArrayC);
		});
}
//
//$("#M1").click(function() {
//   console.log($(this).getAttributeNS(null,"id"));    
//});
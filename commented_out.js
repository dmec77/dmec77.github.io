	"use strict";
$(document).ready(function() {

	var colorList = ["DeepPink", "MediumSpringGreen", "Turquoise", "Coral", "PeachPuff", "MidnightBlue"]

	var randomColor = colorList[Math.floor(Math.random() * colorList.length)];
		console.log(randomColor);

	var tableCells = ("td.cell");
		console.log(tableCells);

			//var eachCell = int[".row"][".cell"];
		
				//$(".start-game").click("click", function () {
					//$(tableCells).append(randomColor);
		
			//});	



	$(".start-game").click(function() {	
		for(var i = 0; i < colorList.length; i++) {
    		$("tableCells").css("back-ground-color", colorList[i]);

    	//colorList[Math.floor(Math.random() * colors.length)];

    	tableCells[i].style.backgroundColor = colorList[Math.floor(Math.random() * colors.length)];
});	

	//for (var j = 0; j < colorList.length; j++) { };
$(document).ready(function() {

	//console.log("JS id WORKING!");

	// $("body").animate("background-color", "black");
	// $("header").animate({color: "#dc0055"}, "slow");
	//
	// { from { opacity:0; } to { opacity:1; } "slow" };



	//REMINDER: use a $(this) so it refers to the one clicked at that time

	//REMINDER: use the toArray() when putting into the array maybe

	var fullboard = [];

	var inPlay = [];

	var counter = 0;

	//var notAccessed = [];

	var colorList = ["Aqua", "DarkOliveGreen", "yellow", "Coral", "PeachPuff", "Crimson", "Hotpink", "Lavender", "Royalblue"];

	var randomColor = colorList[Math.floor(Math.random() * colorList.length)];
		//console.log(randomColor);

	//var startCell = $(".start-cell");

	var tableCells = $(".cell");
		//console.log(tableCells);



// 		$(".cell").click(function() {
//     count++;
//     $("#counter").append("You have " + " \ " + " 23 turns";
// 	});
// );


	//var coordinates = int [][];
		//console.log(startCell);


// $('.cell').click(function() {
//    var $this = $(this);
//    var col   = $this.index();
//    var row   = $this.closest('tr').index();
//    console.log( [col,row] );
// });
		//Fill the board to start the game by filling with the colors randomly
	$(".start-game").on("click", function() {

		for (var i = 0; i < tableCells.length; i++) {
			var randomColor = colorList[Math.floor(Math.random() * colorList.length)];
			$(tableCells[i]).css("background-color", randomColor);

		};
	});


				//Set each TD so that when clicked an even can occur
			$(".cell").on("click", function() {
				alert("ALL ARE NOW CLICKABLE");
		});

			//*****Possible Logic: create an array of all the td's after they have been filled with color
			// $(fullboard).append(tableCells);
			// $(inPlay).append(startCell);

			//*******Possible Logic:  grab the Top and Left Coordinates and store in an array to match up against adjacent td's to see if they should be added to the inPlay array

				$(".cell").click(function(event) {
  			var offset = $(this).offset();
  			event.stopPropagation();
  			result = offset;
  			inPlay.push(offset);
	 			console.log(inPlay);
});

		// $(".cell").click(function(event) {
		//   var offset = $(this).offset();
		//   event.stopPropagation();
		// 	console.log(offset.left + ", " + offset.top );
// });





			//**********Possible Logic:  when a cell is clicked, add to the inPlay array, and then check to see if the other td's are the same color as clicked item AND

// 	$(".cell").click(function(event) {
// 		$(inPlay).append($(this));

// 		if($(".cell").css("background-color") === $(this)) &&
// 			$.each(inPlay, function (key, value) === offset || (key, value) =+
// 				Alert("we hve a match");

			//******Possible Logic: add a class to the clicked td and the ones that match
			// $(".cell").click(function( event ) {
			// 	var clickedColor = $(this).css("background-color");
			// 	$(".start-cell").css("background-color");
			// 	$(this).addClass("start-cell");
// });
					//*******REMINDER: ASK WHY couldnt I get the X and Y coordinates
					// $(document).on("click", function(event) {
 						// var x = event.offset(X);
						// 	console.log("The X-Coord is " + X +" AND The Y-Coord is " + X);
	// });
// $( ".cell").on( "click", function( event ) {
//   	$(this).offset("pageX: " + event.pageX + ", pageY: " + event.pageY);
// });




	// 	counter <= 23
	// //if (tableCells).css("background-color") === "last Clicked"
	// 	Alert("You WIN");
	// 	else if counter >23 && tableCell not all one color
	// 	Alert (Sorry,Try Again)

	//if "start" is hit in the middle of a game, prompt the player to enter Y or N if they want to quit













});






















	//});





















































































































//});

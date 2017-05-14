$(document).ready(function() {

	//console.log("JS id WORKING!");


	var fullboard = [];

	var inPlay = [];

	//var notAccessed = [];

	var colorList = ["DeepPink", "DarkOliveGreen", "yellow", "Coral", "PeachPuff", "MidnightBlue"];

	var randomColor = colorList[Math.floor(Math.random() * colorList.length)];
		//console.log(randomColor);

	var tableCells = $(".cell");
		//console.log(tableCells);

	var startCell = $(".start-cell");

	//var coordinates = int [][];
		//console.log(startCell);	


// $('.cell').click(function() {   
//    var $this = $(this);
//    var col   = $this.index();
//    var row   = $this.closest('tr').index();
//    console.log( [col,row] );
// });		
	
	$(".start-game").on("click", function() {	

		for (var i = 0; i < tableCells.length; i++) {

			var randomColor = colorList[Math.floor(Math.random() * colorList.length)];

			$(tableCells[i]).css("background-color", randomColor);	
			$(fullboard).append(tableCells);
			$(inPlay).append(startCell);

 		};
 	});	
//     });	

//       var offset = $(this).offset();
//   event.stopPropagation();
//   result = offset;
//   inPlay.push(offset);
// 	console.log(inPlay);

// });

// 	$(".cell").on("click", function() {

// 		//if
// 	// 	alert("ALL ARE NOW CLICKABLE");
// 	// });

// 	$(".cell").click(function( event ) {
// 		$(inPlay).append($(this));

// 		if($(".cell").css("background-color") === $(this)) && 
// 			$.each(inPlay, function (key, value) === offset;
// 				Alert("we hve a match");





	// var clickedColor = $(this).css("background-color");
	// $(".start-cell").css("background-color");
	// $(this).addClass("start-cell");
	
//});

	// $(document).on("click", function(event) {
 //    var x = event.offset(X);
	// 	console.log("The X-Coord is " + X +" AND The Y-Coord is " + X);

	// });
				//use a $(this) so it refers to the one clicked at that time

				// use the toArray() when putting into the array maybe

// $( ".cell").on( "click", function( event ) {
//   	$(this).offset("pageX: " + event.pageX + ", pageY: " + event.pageY);

// });



// $( ".cell").click(function( event ) {
//   var offset = $( this ).offset();
//   event.stopPropagation();
//   $( ".cell" ).text( this.tagName +
//     " coords ( " + offset.left + ", " + offset.top + " )" );
// });

// $( ".cell").click(function( event ) {
//   var offset = $( this ).offset();
//   event.stopPropagation();
// 	console.log( offset.left + ", " + offset.top  );
// });



// $(".cell").click(function( event ) {
// 	var clickedColor = $(this).css("background-color");
// 	$(".start-cell").css("background-color");
// 	$(this).addClass("start-cell");
	
// });



















	//});





















































































































//});	









































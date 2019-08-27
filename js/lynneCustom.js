$(function() {
	var LAB = "Lab"
	var READINGS = "Readings"
	var TITLE = "Title"
	var LINK = "Link"
	// var people = [];
	// $.getJSON('json/readings.json', function(data) {
	// 	for (week in data) {
	// 		var introRow = "<p class='item-intro text-muted'>" + week +"</p>"
	// 		$(introRow).appendTo("#portfolioModal1 .wrapper")
	// 		$("<ul></ul>").appendTo("#portfolioModal1 .wrapper")
	// 		data[week].forEach(function (article) {
	// 			$("<li></li>").appendTo("#portfolioModal1 .wrapper ul:last")
	// 			article.forEach(function (row) {
	// 				$("<p>" + row +"</p>").appendTo("#portfolioModal1 .wrapper li:last")
	// 			})
	// 		})
	// 	}
	// });
	// $.getJSON('json/labs.json', function(data) {
	// 	for (week in data) {
	// 		var introRow = "<p class='item-intro text-muted'>" + week +"</p>"
	// 		$(introRow).appendTo("#portfolioModal2 .wrapper")
	// 		$("<ul></ul>").appendTo("#portfolioModal2 .wrapper")
	// 		data[week].forEach(function (article) {
	// 			$("<li></li>").appendTo("#portfolioModal2 .wrapper ul:last")
	// 			article.forEach(function (row) {
	// 				$("<p>" + row +"</p>").appendTo("#portfolioModal2 .wrapper li:last")
	// 			})
	// 		})
	// 	}
	// });

	$.getJSON('json/materials.json', function(data) {
		var modalName = "weeklyModal"
		for (week in data) {
			//add week num
			var weekRow = "<h3 class='item-uppercas text-muted'>" + week +"</h3><hr>"
			$(weekRow).appendTo("#" + modalName + " .wrapper")

			//add readings
			appendIntro(modalName,READINGS)
			appendReadings(modalName,data[week][READINGS])

			//add lab
			appendIntro(modalName,LAB)
			appendLabTitle(modalName, data[week][LAB][TITLE])
			if (READINGS in data[week][LAB]){
				$("<p>Readings for Lab</p>").appendTo("#" + modalName + " .wrapper")
				appendReadings(modalName, data[week][LAB][READINGS])
			}
		}
	});
	function appendIntro(modalName, heading) {//append an grep title to the wrapper in the modal
		$("<p class='item-intro text-muted'>" + heading + "</p>").appendTo("#" + modalName + " .wrapper")
	}
	function appendReadings(modalName, data) {//append an ul(unordered list) to the wrapper in the modal
		$("<ul></ul>").appendTo("#" + modalName + " .wrapper")
		data.forEach(function (reading){
			$("<li></li>").appendTo("#" + modalName +" .wrapper ul:last")	
			$("<p>" + reading[TITLE].replace("\n", "<br>") +"</p>").appendTo("#" + modalName +" .wrapper li:last")
			$("<a href='" + reading[LINK] +"'> &rarr;</a>").appendTo("#" + modalName +" .wrapper li:last p:last")
		})
	}

	function appendLabTitle(modalName, labTitle) {//append a ul
		$("<ul></ul>").appendTo("#" + modalName + " .wrapper")
		$("<li></li>").appendTo("#" + modalName +" .wrapper ul:last")
		$("<p>" + labTitle +"</p>").appendTo("#" + modalName +" .wrapper li:last")
	}
});
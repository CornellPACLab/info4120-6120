$(function() {
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
			$("<p class='item-intro text-muted'>Readings</p>").appendTo("#" + modalName + " .wrapper")
			$("<ul></ul>").appendTo("#" + modalName + " .wrapper")
			var readings = data[week]["Readings"]
			readings.forEach(function (reading){
				$("<li></li>").appendTo("#" + modalName +" .wrapper ul:last")	
				$("<p>" + reading["Title"].replace("\n", "<br>") +"</p>").appendTo("#" + modalName +" .wrapper li:last")
				$("<a href='" + reading["Link"] +"'>PDF&rarr;</a>").appendTo("#" + modalName +" .wrapper li:last p:last")
			})

			//add lab
			$("<p class='item-intro text-muted'>Lab</p>").appendTo("#" + modalName + " .wrapper")
			$("<ul></ul>").appendTo("#" + modalName + " .wrapper")
			var lab = data[week]["Lab"]
			for (item in lab) {
				$("<li></li>").appendTo("#" + modalName +" .wrapper ul:last")	
				// $("<p>" + item + ": " +lab[item] +"</p>").appendTo("#" + modalName +" .wrapper li:last")
				$("<p>" +lab[item] +"</p>").appendTo("#" + modalName +" .wrapper li:last")
			}
		}
	});
});
$(function() {
	var people = [];
	$.getJSON('json/readings.json', function(data) {
		for (week in data) {
			var introRow = "<p class='item-intro text-muted'>" + week +"</p>"
			$(introRow).appendTo("#portfolioModal1 .wrapper")
			$("<ul></ul>").appendTo("#portfolioModal1 .wrapper")
			data[week].forEach(function (article) {
				$("<li></li>").appendTo("#portfolioModal1 .wrapper ul:last")
				article.forEach(function (row) {
					$("<p>" + row +"</p>").appendTo("#portfolioModal1 .wrapper li:last")
				})
			})
		}
	});

	$.getJSON('json/labs.json', function(data) {
		for (week in data) {
			var introRow = "<p class='item-intro text-muted'>" + week +"</p>"
			$(introRow).appendTo("#portfolioModal2 .wrapper")
			$("<ul></ul>").appendTo("#portfolioModal2 .wrapper")
			data[week].forEach(function (article) {
				$("<li></li>").appendTo("#portfolioModal2 .wrapper ul:last")
				article.forEach(function (row) {
					$("<p>" + row +"</p>").appendTo("#portfolioModal2 .wrapper li:last")
				})
			})
		}
	});
});
(function(){exportTableToCSV = function(table, filename) {

	var $headers = $(table).find('tr:has(th)'),
		$rows = $(table).find('tr:has(td)')
		// Temporary delimiter characters unlikely to be typed by keyboard
		// This is to avoid accidentally splitting the actual contents
		,
		tmpColDelim = String.fromCharCode(11) // vertical tab character
		,
		tmpRowDelim = String.fromCharCode(0) // null character
		// actual delimiter characters for CSV format
		,
		colDelim = '","',
		rowDelim = '"\r\n"';
	// Grab text from table into CSV formatted string
	var csv = '"';
	csv += formatRows($headers.map(grabRow));
	csv += rowDelim;
	csv += formatRows($rows.map(grabRow)) + '"';
	// Data URI
	var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
	var blob = new Blob([csv], {
		type: 'text/csv;charset=utf-8;'
	});
	if (navigator.msSaveBlob) { // IE 10+
		navigator.msSaveBlob(blob, filename);
	} else {
		var link = document.createElement("a");
		if (link.download !== undefined) { // feature detection
			// Browsers that support HTML5 download attribute
			var url = URL.createObjectURL(blob);
			link.setAttribute("href", url);
			link.setAttribute("download", filename);
			link.style = "visibility:hidden";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}

	//------------------------------------------------------------
	// Helper Functions
	//------------------------------------------------------------
	// Format the output so it has the appropriate delimiters

	function formatRows(rows) {
		return rows.get().join(tmpRowDelim).split(tmpRowDelim).join(rowDelim).split(tmpColDelim).join(colDelim);
	}
	// Grab and format a row from the table

	function grabRow(i, row) {
		var $row = $(row);
		//for some reason $cols = $row.find('td') || $row.find('th') won't work...
		var $cols = $row.find('td');
		if (!$cols.length) $cols = $row.find('th');
		return $cols.map(grabCol).get().join(tmpColDelim);
	}
	// Grab and format a column from the table

	function grabCol(j, col) {
		var $col = $(col),
			$text = $col.text();
		return $text.replace('"', '""'); // escape double quotes
	}
}

})();

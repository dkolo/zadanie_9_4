var treeRows = prompt('Wpisz zakładaną liczbę pięter choinki');
function drawTree() {
	for ( var i = 0 ; i <= treeRows ; i++ ) {
		var star = '';
		for ( var j = 0 ; j < i ; j++ ) {
			star += '*';
		}
	console.log(star);
	}
}
drawTree(treeRows);
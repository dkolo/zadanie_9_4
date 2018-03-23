var treeRows = prompt('Wpisz zakładaną liczbę pięter choinki');
function drawTree() {
	for ( var i = 0 ; i <= treeRows ; i++ ) {
		var star = '',
			 space = '';
		for ( var j = 0 ; j < ( treeRows - i ) ; j++ ) {
			space += ' ';
		}
		for ( var k = 0 ; k < (2 * i - 1) ; k++ ) {
			star += '*';
		}
	console.log(space + star);
	}
}
drawTree(treeRows);
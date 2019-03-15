module.exports = function check(str, bracketsConfig) {
  let compareArr = str.split('');
	
	let compareResult = false;
	
	function check() {
		for (let i = 0; i < bracketsConfig.length; i++) {
			let open = bracketsConfig[i][0];
			let close = bracketsConfig[i][1];
			
			let closeIdx;
			let openIdx;
			
			if (open === close) {
				openIdx = compareArr.indexOf(open);
				closeIdx = openIdx + 1;
			} else {
				closeIdx = compareArr.indexOf(close);
				openIdx = closeIdx - 1;
			}

			while (compareArr[closeIdx - 1] === open && compareArr[closeIdx] === close) {
				compareArr.splice(closeIdx, 1);
				compareArr.splice(openIdx, 1);

				if (compareArr.length === 0) {
					compareResult = true;
					break;
				} else {
					check();
				}
			}
		}
	}
	check();
	
	return compareResult;
}

const fs = require('fs');

try{
	const data = fs.readFileSync('./names.txt','utf8');
	let dataArray = data.split(',').sort();
	let total = 0;
	for(let i=0;i<dataArray.length;i++){
		let namescore = 0;
		for(let j=1;j<dataArray[i].length-1;j++){
			namescore += dataArray[i].charCodeAt(j)-64;
		}
		namescore = namescore * (i+1);
		total += namescore;
	}
	console.log(total);
} catch(err){
	console.error(err);
}
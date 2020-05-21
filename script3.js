//console.log("Bonjour monde");

//name = prompt('Prénom?');
//console.log(`Bonjour ${name}`);

//number = prompt('De quel nombre veux-tu calculer la factorielle ?');

//const factorielle = function(inputNumber) {
//  let outputNumber = 1;
//  for(let count = 1; count <=inputNumber; count++){
//  	outputNumber = outputNumber * count
//	}
//  return outputNumber;
//}

//console.log(factorielle(number));

askFloor = prompt('Floor number');

const buildFloor = function(totalFloor,currentFloor) {
	
	str1 = ''
	for(let count = 1; count <=(currentFloor-totalFloor); count++) {
  	str1 = ' ' + str1
	}
	
	str2 = ''
	for(let count = 1; count <=(2*totalFloor-1); count++) {
  	str2 = '#' + str2
	}

	console.log(str1,str2);

}

const buildPyramid = function(totalFloor) {
	
	for(let count = 0; count <=totalFloor-1; count++) {
  	buildFloor(count+1,totalFloor);
  	
	}
}

buildPyramid(askFloor)

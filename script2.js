//console.log("Bonjour monde");

//name = prompt('Prénom?');
//console.log(`Bonjour ${name}`);

number = prompt('De quel nombre veux-tu calculer la factorielle ?');

const factorielle = function(inputNumber) {
  let outputNumber = 1;
  for(let count = 1; count <=inputNumber; count++){
  	outputNumber = outputNumber * count
	}
  return outputNumber;
}

console.log(factorielle(number));
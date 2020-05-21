

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("> Est-ce que tous les livres ont été au moins empruntés une fois ?");
console.log(" ");

let countRented = 0

for(let index in books) {

	if(books[index]['rented']>1) {
  	console.log(books[index].title + ": au moins une fois");
  	countRented = countRented + 1
		} else {
  	console.log(books[index].title + ": jamais");
	} 
}

if(countRented === books.length) {
	console.log(" ");
  console.log("Oui, tous les livres ont été empruntés au moins une fois");
  
	} else {
	console.log(" ");
  console.log("Non, tous les livres n'ont pas été empruntés au moins une fois");
}

// Quel est le livre le plus emprunté ?
console.log(" ");
console.log("> Quel est le livre le plus emprunté ?");

let rate = 0
let title = ""

for(let index in books) {
	if (books[index].rented > rate) {
			rate = books[index].rented
      title = books[index].title;
    }
}

console.log(title + " a été emprunteé " + rate +" fois ");

// Quel est le livre le moins emprunté ?
console.log(" ");
console.log("> Quel est le livre le moins emprunté ?");

let booksSorted = books.sort(function(a, b){return a-b});
console.log(booksSorted[0].title + " est le livre le moins emprunté ");


// Trouve le livre avec l'ID: 873495 ?
console.log(" ");
console.log("> Trouve le livre avec l'ID: 873495 ?");

let findBookId = books.find(item => item.id === 873495);
console.log(findBookId.title + " est le livre avec l'ID: 873495 ");

// Supprime le livre avec l'ID: 133712
console.log(" ");
console.log("> Supprime le livre avec l'ID: 133712");

let bookToDelete = books.findIndex(item => item.id === 133712);
books.splice(bookToDelete,1);

console.log("Book id: 133712 supprimé de la liste..");
console.log(" ");

for(let index in books) {
console.log("Id: " + books[index].id + ", Title: " + books[index].title);
}

// Trie les livres par ordre alphabétique
console.log(" ");
console.log("> Trie Des livres par ordre alphabétique:");
console.log(" ");

books.sort((a, b) => (a.title > b.title) ? 1 : -1);

for(let index in books) {
console.log(books[index].title);
}


const morningClass = [ 
    "Koki","Guilherme","Vinicius","Misato","Cybill","Alex","Asafe","Clelia"
]

const afternoonClass = [
  "Megumi", "Emir", "Ozan", "Jorge", "Naomi", "Gabriel", "Yuto", "Tatiana"
]

//Create a function to sort names A-Z (sort)
const sortNames = (names) => {
  return [...names].sort();
};
  

console.log("sort names A-Z",sortNames(morningClass));
console.log("sort names A-Z",sortNames(afternoonClass));

//Create a function to sort names Z-A (sort + reverse)
const sortReversedNames = (names) => {
  return [...names].sort().reverse();
};

console.log("sort names Z-A",sortReversedNames(morningClass));
console.log("sort names Z-A",sortReversedNames(afternoonClass));

// Create a function to return what class the student is attending (find)
const findStudent = (name, listA, listB) => {
	const checkName = (list) => {
	  return list.find((listName) => {
		return name === listName;
	  });
	};
	const afternoon = checkName(listA);
	if (afternoon === name) {
	  return `${name} is attending afternoon class.`;
	} else {
	  const morning = checkName(listB);
	  if (morning) {
		return `${name} is attending morning class.`;
	  } else {
		return `${name} is not attending classes.`;
	  }
	}
  };

console.log("find student Misato",findStudent("Misato", afternoonClass, morningClass));

console.log("find student Ozan",findStudent("Ozan", afternoonClass, morningClass));

console.log("find student Arthur",findStudent("Arthur", afternoonClass, morningClass));

// Reverse all names and return new array with reversed names (reverse)
const reverseNames = (names) => {
	return names.map((name) => {
		return name.split("").reverse().join("");
	}); 
};
console.log("reverse names",reverseNames(morningClass));
console.log("reverse names",reverseNames(afternoonClass));
// Create a function to check if some of the names have at least 8 letters (some)
const someNames = (names, num) => {
	return names.some((name) => {
		return name.length >= num;
	});
};
console.log("some names 8 letters",someNames(morningClass, 8));
console.log("some names 8 letters",someNames(afternoonClass, 8));

// Create a function to check if every name has at least one vowel (every)
const namesVowel = (names) => {
	return names.everz(
		(name) =>
		name.indexOf("a") !== -1 ||
		name.indexOf("e") !== -1 ||
		name.indexOf("i") !== -1 ||
		name.indexOf("o") !== -1 ||
		name.indexOf("u") !== -1 
	);
};

console.log("all names vowels",namesVowel(morningClass));
console.log("all names vowels",namesVowel(afternoonClass));

// This targets the div with the ID planet and assigns it to a variable. It makes the code more succinct below.
var el = document.getElementById("planets");

// This creates an array with all the planet names to satisfy the paramaters of the assignment.
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

// Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets". //
	/* The forEach method calls the function for each element in the array, in order. 
	The code here also adds each element to the HTML.*/
planets.forEach(function(value, index, array){el.innerHTML += "<p>" + array[index] + "<p>"});

// Use the map method to create a new array where the first letter of each planet is capitalized.
	/* The map method calls the function once for each element in an array, in order, and reassigns it to an array. 
	Here it calls each element, segments out the first character of each word (charAt[0]), capitalizes it(toUpperCase), 
	and reconnects it to what remains(.slice) */
planets = planets.map(function(word){return word.charAt(0).toUpperCase() + word.slice(1)});
console.log(planets);

// Use the filter method to create a new array that contains planets with the letter 'e'
	/* The filter method fills a new array with all elements that pass a test. Here the test is whether the element
	begins(charAt[0]) with the letter "E" (=== "E") */
planets = planets.filter(function(e){return e.charAt(0) === "E"});
console.log(planets);

// Use the reduce method to create a sentence from the words in the following array
	/* The reduce method reduces the array to a single value, calling the function on each element of the array from left to right. */
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
words = words.reduce(function(total, string){return total + " " + string});
words = words + ".";
console.log(words);
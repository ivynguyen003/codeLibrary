 let fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
 //1. Check if the value exists for stringOne, stringTwo, numOne, numTwo	
	let string1 = stringOne || 'Fizz';
	let string2 = stringTwo || 'Buzz';
	let num1 = numOne || 3;
	let num2 = numTwo || 5;
//2. Create an array
	let array = [];
	for (let i = 1 ; i < 101; i++){
//3. Check each value if it is devisible by 3 or 5 or both
		if (i % num1 == 0 && i % num2 == 0){
			array.push(string1 + string2);
		}else if (i % num1 == 0){
			array.push(string1);
		}else if (i % num2 == 0){
			array.push(string2);
		}else{
			array.push(i);
		}
	};
	return array;
}; 

console.log(fizzBuzzCustom()[15]);

function sortByLength (array) {
//Return an array containing the same strings, ordered from shortest to longest
 return array.sort((a,b) => a.length-b.length);
};

const newArray = ["Beg", "Life", "I", "To"];
console.log (sortByLength(newArray));



function transposeTwoStrings(arr){
 let string1 = arr[0];
 let string2 = arr[1];
 let transposeArr = [];
 let arrLength = arr[0];

  if (string1.length > string2.length){
  	arrLength = string1.length;
  } else{arrLength = string2.length}

  for (let i = 0; i < arrLength; i++){
    transposeArr.push((string1[i]||' ') + ' ' + (string2[i] || ' '));
  } 
  
 return transposeArr.join('\n');

}

console.log(transposeTwoStrings(['Hello','World']));
console.log(transposeTwoStrings(['joey','louise']));
console.log(transposeTwoStrings(['a','cat']));
console.log(transposeTwoStrings(['cat','']));



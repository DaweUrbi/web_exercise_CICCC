/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function(input, caze) {
  let result = input;
  let styles= [];

  if(Array.isArray(caze)){
    for(let selectStyle of caze){
      styles.push(selectStyle);
    }
  } else styles.push(caze);

  for(let style of styles){
    switch(style){
      case "camel":
        result = camelCase(result);
        break;
      case 'pascal':
        result = pascalCase(result);
        break;
      case 'snake':
        result = snakeCase(result);
        break;  
      case 'kebab':
        result = kebabCase(result);
        break;  
      case 'title':
        result = titleCase(result);
        break;  
      case 'vowel':
        result = vowelCase(result);
        break; 
      case 'consonant':
        result = consonantCase(result);
        break;
      case 'upper':
        result = result.toUpperCase();
        break;
      case 'lower':
        result = result.toLowerCase();
    }
  } 
  return result;
}

const camelCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, "");
}

const pascalCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toUpperCase() : word.toUpperCase()
  }).replace(/\s+/g, "");
}

const snakeCase = (input) =>{
  return input.replace(/\s+/g, "_");
}

const kebabCase = (input) =>{
  return input.replace(/\s+/g, "-");
}

const titleCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toUpperCase() : word.toUpperCase()
  });
}

const vowelCase = (input) =>{
  return input.replace(/[aeiouAEIOU]/g, (word) => word.toUpperCase())
}

const consonantCase = (input) =>{
  return input.replace(/[^aeiouAEIOU]/g, (word) => word.toUpperCase())
}

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING


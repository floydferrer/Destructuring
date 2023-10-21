//OD 1: numPlanets returns 8, yearNeptuneDiscovered returns 1846

//OD 2: discoverYears returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//OD 3:
//1. 'Your name is Alejandro and you like purple
//2. 'Your name is Melissa and you like green
//3. 'Your name is undefined and you like green

//AD 1:
//1. Maya
//2. Marisa
//3. Chi

//AD 2:
//1. Raindrops on roses
//2. whiskers on kittens
//3. Bright copper kettles warm woolen mittens Brown paper packages tied up with strings

//AD 3: 10, 30, 20

//Assigning Variable to Object Properties
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers;

//Array Swap
const arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
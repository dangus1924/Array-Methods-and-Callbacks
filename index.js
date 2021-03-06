import { fifaData } from "./fifa.js";
console.log(fifaData);

// console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. 
Practice accessing data by console.log-ing 
the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

/* Task 2: Create a function called  getFinals that takes 
`data` as an argument and returns an array of objects with 
only finals data */
const FinalFilter = fifaData.filter(
  (e) => e["Stage"] === "Final" && e["Year"] === 2014
);
console.log(
  `Home Team ${FinalFilter[0]["Home Team Name"]} who scored: ${FinalFilter[0]["Home Team Goals"]}pts vs Away Team ${FinalFilter[0]["Away Team Name"]} who scored: ${FinalFilter[0]["Away Team Goals"]}pts `
);
for (let i = 0; i < fifaData.length; i++) {
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final") {
    console.log(
      `Home Team ${fifaData[i]["Home Team Name"]} who scored: ${fifaData[i]["Home Team Goals"]}pts vs Away Team ${fifaData[i]["Away Team Name"]} who scored: ${fifaData[i]["Away Team Goals"]}pts `
    );
  }
}

function getFinals(data) {
  // let finals = [{}];
  return data.filter((e) => e["Stage"] === "Final");
  // return finals;
}

console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` 
that accepts the callback function `getFinals`, 
and returns an array called `years` containing all 
of the years in the dataset */

function getYears(getFinals) {
  const years = getFinals.map((e) => e.Year);
  return years;
}

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, 
that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each
 `finals` game. Return the name of all winning
  countries in an array called `winners` */

function getWinners(callback) {
  return callback.map((e) =>
    e["Home Team Goals"] > e["Away Team Goal"]
      ? `The Winner is: ${e["Home Team Name"]}`
      : `The Winner ${e["Away Team Name"]}`
  );
}

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` 
that accepts the following parameters and returns a set of strings 
"In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {  
  
  const results = [{}] 
  getYears.forEach((years) => {
    getWinners.forEach((Winners) => {      
       results.push(`In ${years}, ${Winners} won the world cup!`);      
    });
  });
return results;
}

console.log(
  getWinnersByYear(
    getWinners(getFinals(fifaData)),
    getYears(getFinals(fifaData))
  )
);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` 
and returns the the average number of home team goals and away team goals scored per 
match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  const reducer = (accumulator, currentValue) => (accumulator + currentValue)/goals.length;
  const goals = data.map(e => e["Home Team Goals"])  
  return goals.reduce(reducer, 0)
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters 
`data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  data.map(e => e[])
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

// build a message generator program so that every time
// a user runs a program, they should get a new, randomized output

let userSunSign = prompt('What is your sun sign?').toLowerCase(); //get user input

let firstMessage = ['mercury is in retrograde', 'the planets are directly aligned', 'the sun is in your house', 'we are in the age of Aquarius'];
let secondMessage = ['encounter new opportunities related to work', 'come across several occasions to travel', 'find money comes easily to you this month', 'notice increased attention from a partner or love interest', 'feel increased pressures to solve a family related issue'];
let thirdMessage = ['might find yourself wanting to enjoy a little time to reflect.', 'will use your determination to see it through.', 'shine your light on the dark corners to ensure a positive outcome.'];

let firstMessageRandom = firstMessage[(Math.floor(Math.random() * firstMessage.length))];
let secondMessageRandom = secondMessage[(Math.floor(Math.random() * secondMessage.length))];
let thirdMessageRandom = thirdMessage[(Math.floor(Math.random() * thirdMessage.length))];

let sunSign = ['capricorn', 'aquarius', 'aries', 'pisces', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];

const astroReading = (userSunSign, sunSign) => {
for (let i=0; i < sunSign.length; i++) {
if (userSunSign === sunSign[i]) {
    console.log(`Because ${firstMessageRandom} you will ${secondMessageRandom} and you ${thirdMessageRandom}`);
} else {
   console.log('Please enter a valid astrological sign!')
}}};
console.log(astroReading());
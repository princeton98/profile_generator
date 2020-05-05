const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  //console.log(`Thank you for your valuable feedback: ${name}`);
  rl.question("What's an activity you like doing? ", (activity) => {
    //console.log(`Thank you for your valuable feedback: ${activity}`);
    rl.question('What do you listen to while doing that? ', (music) => {
      //console.log(`Thank you for your valuable feedback: ${music}`);
      rl.question('Which meal is your favourite? (e.g: dinner, brunch, etc.) ', (timeOfMeal) => {
        //console.log(`Thank you for your valuable feedback: ${timeOfMeal}`);
        rl.question("What's your favourite thing to eat for that meal? ", (meal) => {
          //console.log(`Thank you for your valuable feedback: ${meal}`);
          rl.question('Which sport is your absolute favourite? ', (sport) => {
           // console.log(`Thank you for your valuable feedback: ${sport}`);
            rl.question('What is your superpower? ', (superpower) => {
              //console.log(`Thank you for your valuable feedback: ${superpower}`);
              console.log(`Hello, my name is ${name}. My favourite activity is ${activity}. Usually when I'm doing the activity, I like listening to ${music}. My favourite time to enjoy food is usually during ${timeOfMeal}. I loved to eat ${meal}, I devour ${meal} like a tiger. My favourite sport is ${sport}, I'll probably destroy you at ${sport}, haha, just kidding, unless... 👀. A superpower that I would like to have is ${superpower}, I'll use it rule all of civilization. JKJK haha almost got you... unless 👀. Anyways... this is my Ted Talk, I hope you enjoyed it!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

//console.log(`Hello, my name is ${name}. My favourite activity is ${activity}. Usually when I'm doing the activity, I like listening to ${music}. My favourite time to enjoy food is usually during ${timeOfMeal}. I loved to eat ${meal}, I devour ${meal} like a tiger. My favourite sport is ${sport}, I'll probably destroy you at ${sport}, haha, just kidding, unless... 👀. A superpower that I would like to have is ${superpower}, I'll use it rule all of civilization. JKJK haha almost got you... unless 👀. Anyways... this is my Ted Talk, I hope you enjoyed it!`);

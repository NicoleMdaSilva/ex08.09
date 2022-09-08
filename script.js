const prompt=require('prompt-sync')()

const name = prompt(`Type your name: `);

const lastName = prompt(`Type your last name: `);

const weight = prompt(`Type your weight: `);

const height = prompt(`Type your height: `);

const date = prompt(`Type the admission date: `);

const diabete = prompt(`The patient is diabetic? `);

console.log(`1 - ${name}`);

console.log(`2 - ${lastName}`);

console.log(`3 - ${weight}`);

console.log(`4 - ${height}`);

console.log(`5 - ${date}`);

console.log(`6 - ${diabete}`);
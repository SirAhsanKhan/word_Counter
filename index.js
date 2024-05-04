#!usr/bin/env node
import inquirer from "inquirer";
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Please enter a sentence or word to count the words:"
        }
    ]);
    let words = answer.sentence.trim().split(" ");
    console.log(`Your sentence's word count is: ${words.length}`);
    let characters = answer.sentence.trim().length;
    console.log(`Your sentence's character count is: ${characters}`);
    const continuePrompt = await inquirer.prompt([
        {
            name: "continue",
            type: "confirm",
            message: "Do you want to continue?"
        }
    ]);
    condition = continuePrompt.continue;
    if (!condition) {
        console.log("OK. Take care!");
    }
}

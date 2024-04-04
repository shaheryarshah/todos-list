#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while(condition)
{let todoQuestions = await inquirer.prompt(
    [
        {
            name: "firstQuistions",
            type: "input",
            message: "what would you like to add in your todos list?"
        },
        {
            name: "secondQuistions",
            type: "confirm",
            message: "would you like to add more in your todos list?",
            default: true
            }
    ]            
);
todos.push(todoQuestions.firstQuistions);
console.log(todos);
condition = todoQuestions.secondQuistions;
};

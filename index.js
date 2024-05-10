#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: [
            "addition", //+
            "subtraction", //-
            "multiplication", //*
            "division", // '/'
            "modulus", // %
            "power", // **
        ],
    },
]);
// conditional statment
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "power") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else
    console.log("please enter valid operator");

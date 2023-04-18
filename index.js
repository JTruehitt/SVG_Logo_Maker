const inquirer = require('inquirer');
const fs = require ('fs');
const generateSVG = require('./lib/generateSVG')

const questions = [
    {
        name: 'characters',
        type: 'input',
        message: 'Please enter up to 3 characters for your logo:',
        validate: input => {
            if (input.length <= 3) return true;
            else return 'Please use a maximum of 3 characters.'
        }
    }, 
    {
        name: 'charColor',
        type: 'input',
        message: 'Please enter a color keyword or hexadecimal for your text color:'
    }, 
    {
        name: 'shape',
        type: 'list',
        message: `Please select the shape of your logo's background:`,
        choices: ['Square', 'Triangle', 'Circle']
    }, 
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Please enter a color keyword or hexadecimal for your shape color:'
    }, 
]

async function init() {
    const input = await inquirer.prompt(questions);
    const svg = generateSVG(input)
    fs.writeFile('./svg_output/logo.svg', svg, err => err ? console.error(err) : console.log("Hooray, you generated a new logo.svg!"))
    console.log(svg)
}

init();
import inquirer from "inquirer";
import chalk from "chalk";

interface Student {
    name: string;
    id: number;
    grade: string;
}

const studentData: Student[] = [];

const addStudent = () => {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter student name: ",
        },
        {
            name: "id",
            type: "input",
            message: "Please enter student ID: ",
        },
        {
            name: "grade",
            type: "input",
            message: "Please enter student grade: ",
        },
    ]).then(answers => {
        const student: Student = {
            name: answers.name,
            id: parseInt(answers.id),
            grade: answers.grade,
        };
        studentData.push(student);
        console.log(chalk.green(`Student ${student.name} added successfully!`));
        usingPrompt();
    });
};

const displayStudents = () => {
    console.log(chalk.blue("List of Students:"));
    studentData.forEach((student: Student) => {
        console.log(`Name: ${chalk.bold(student.name)}, ID: ${chalk.bold(student.id)}, Grade: ${chalk.bold(student.grade)}`);
    });
    usingPrompt();
};

const usingPrompt = () => {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Choose an action:",
        choices: ["Add Student", "Display Students", "Exit"],
    }).then(answer => {
        switch (answer.action) {
            case "Add Student":
                addStudent();
                break;
            case "Display Students":
                displayStudents();
                break;
            default:
                console.log(chalk.yellow("Exiting the student management system."));
                break;
        }
    });
};

console.log(chalk.cyan("\tWelcome to the student management project!!!...\n"));

usingPrompt();

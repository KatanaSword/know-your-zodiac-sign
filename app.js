import readlineSync from "readline-sync"
import chalk from "chalk"
import { zodiacSigns } from "./database.js"
const log = console.log

function greeting() {
    log(chalk.bold.magenta("Hello!, Welcome to the 'Know Your Zodiac Sign'"));
    userNameInput()
};
greeting()

function userNameInput() {
    const userName = readlineSync.question(`${chalk.yellow.bold.underline("Please enter your name")}${chalk.yellow.bold(":")} `);
    if(!userName || !isNaN(userName)) {
        log(chalk.red.bold.italic("Error: Please enter your name"));
        userNameInput()
    } else {
        log(chalk.bgWhite.bold(`Welcome ${userName}, Let's know your zodiac sign`));
        userDateOfBirthInput()
    };
};

function userDateOfBirthInput() {
    const dateOfBirth = readlineSync.question(`${chalk.yellow.bold.underline("Please enter your date of birth [dd/mm]")}${chalk.yellow.bold(":")} `);
    const [day, month] = dateOfBirth.split("/").map(Number);
    if(isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
        log(chalk.red.bold.italic("Error: Please enter a valid date of birth [dd/mm]"));
        userDateOfBirthInput()
    } else {
        knowYourZodiacSign(day, month)
    };
};

function knowYourZodiacSign(userDay, userMonth) {
    const userSign = zodiacSigns.find((sign) => {
        const [startDate, startMonth] = sign.startDate.split("/").map(Number);
        const [endDate, endMonth] = sign.endDate.split("/").map(Number);

        return (
            (userMonth === startMonth && userDay >= startDate) ||
            (userMonth === endMonth && userDay <= endDate) ||
            (userMonth > startMonth && userMonth < endMonth)
        );
    });

    if(userSign) {
        log(chalk.bold("Sign:", userSign.sign));
        log(chalk.bold("Element:", userSign.zodiacElement));
        log(chalk.bold("Quality:", userSign.zodiacQuality));
        log(chalk.bold("Ruler:", userSign.signRuler));
    } else {
        log(chalk.red.bold.italic("Error: Unable to determine zodiac sign."));
    };
    exitOrContinueFunc()
};

function exitOrContinueFunc() {
    const exitOrContinue = readlineSync.question(`${chalk.cyan.bold.underline("Do you want to continue [y/n]")}${chalk.cyan.bold(":")} `);
    if(exitOrContinue === "y") {
        userDateOfBirthInput()
    } else if(exitOrContinue === "n") {
        exit()
    } else {
        log(chalk.red.bold.italic("Error: Please enter [y/n] to continue"));
        exitOrContinueFunc()
    };
};

function exit() {
    log(chalk.magenta.bold("Thank you for using the Know Your Zodiac Sign app. Goodbye!"));
};
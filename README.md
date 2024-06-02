# Know Your Zodiac Sign

Welcome to the Know Your Zodiac Sign application, a simple and interactive CLI program that helps you discover your zodiac sign based on your date of birth.

## Features

- Greeting: A friendly welcome message when the program starts.

- User Input: Prompts the user to enter their name and date of birth.

- Zodiac Sign Determination: Determines and displays the user's zodiac sign along with its element, quality, and ruler.

- Interactive Navigation: Users can choose to enter another date of birth or exit the program.

## Requirements

- Node.js (v12.0.0 or later)

  [Install Node.js](https://nodejs.org/en/download/package-manager)

- readline-sync package

- chalk package

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/KatanaSword/know-your-zodiac-sign.git
   cd know-your-zodiac-sign
   ```

2. **Install the dependencies:**

   ```
   npm install readline-sync chalk
   ```

## Usage

1. **Run the program using Node.js:**

   ```
   node app.js
   ```

## Program Flow

1. **Greeting:**

- Displays a welcome message.

- Prompts the user to enter their name.

2. **User Name Input:**

- If the entered name is invalid (empty or not a string), prompts the user to enter again.

- Greets the user by name and moves to the date of birth input.

3. **Date of Birth Input:**

- Prompts the user to enter their date of birth in the format [dd/mm].

- Validates the date of birth input and prompts again if invalid.

- Moves to zodiac sign determination if the date is valid.

4. **Zodiac Sign Determination:**

- Matches the user's date of birth with the corresponding zodiac sign.

- Displays the user's zodiac sign, its element, quality, and ruler.

- Prompts the user to continue or exit.

5. **Interactive Options:**

- Continue (y): Prompts for another date of birth.

- Exit (n): Exits the program.

6. **Exit:**

- Displays a goodbye message and terminates the program.

## Example

```
Hello!, Welcome to the 'Know Your Zodiac Sign'
Please enter your name: Alice
Welcome Alice, Let's know your zodiac sign
Please enter your date of birth [dd/mm]: 15/04
Sign: Aries
Element: Fire
Quality: Cardinal
Ruler: Mars
Do you want to continue [y/n]: y
Please enter your date of birth [dd/mm]: 23/07
Sign: Leo
Element: Fire
Quality: Fixed
Ruler: Sun
Do you want to continue [y/n]: n
Thank you for using the Know Your Zodiac Sign app. Goodbye!
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Do You Know?

Welcome to Do You Know?, an interactive CLI program that provides a variety of fascinating facts across different topics including Science, History, Culture, and Social aspects.

## Features

- Welcome Message: A friendly welcome message when the program starts.

- User Input: Prompts the user to enter their name and choose a topic of interest.

- Fact Display: Provides a random fact from the selected topic.

- Interactive Navigation: Users can choose to change the topic, get another fact from the same topic, or exit the program.

## Requirements

- Node.js (v12.0.0 or later)

  [Install Node.js](https://nodejs.org/en/download/package-manager)

- readline-sync package

- chalk package

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/KatanaSword/do-you-know.git
   cd do-you-know
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

- Greets the user by name and moves to topic selection.

3. **Topic Selection:**

- Displays available topics: Science, History, Culture, and Social.

- Prompts the user to select a topic by entering a specific key (s for Science, h for History, c for Culture, ss for Social).

4. **Display Fact:**

- Shows a random fact from the selected topic.

- Asks the user if they want to change the topic, get another fact, or exit.

5. **Interactive Options:**

- Change topic (x): Goes back to topic selection.

- Continue (y): Displays another fact from the current topic.

- Exit (n): Exits the program.

6. **Exit:**

- Displays a goodbye message and terminates the program.

## Example

```
🌟 Welcome to 'Do You Know?'🌟
Unlock a world of fascinating facts! Ready for a journey of discovery?
Please enter your name: John
Hello!, John Let's get started!
Select topic
Science History Culture Social
Press key: Science: s History: h Culture: c Social: ss
Please enter your topic: s
Did you know?
The speed of light is approximately 299,792 kilometers per second.
Do you want to change topic or continue or exit [x/y/n]: y
Did you know?
The Earth's core is as hot as the surface of the sun.
Do you want to change topic or continue or exit [x/y/n]: n
👋 Thank you for exploring 'Do You Know?'
!Feel free to return anytime for more fascinating facts. Happy learning!
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

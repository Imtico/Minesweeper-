## Description

This game has been developed as part of a course curriculum. It works as expected but the codebase could be improved and everyone is invited to collaborate.

It's an easy to run game that allows user to play in a customised environment choosing rows, columns and bombs on board. It keeps running until the user has completed the board or has chosen a spot that contains a mine.

## How to run

- Clone this repository:
```
git clone {repo link}
```
- Go inside the cloned directory:
```
cd Minesweeper
```
- Run the game:
```
node lib/play.js
```

## Things to improve

- The code is tightly-coupled.

- It needs tests in order to be able to maintain the codebase and add functionality.

- Implement user messages.

- It needs to handle bad user input.

- Object-oriented design with adherence to SOLID principles.

- Decouple from console/terminal to make it possible to implement UI in the future.

- Change board printing format.

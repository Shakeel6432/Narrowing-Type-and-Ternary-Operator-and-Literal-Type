// Type Narrowing 
export {};
// First Example
// interface Circle {
//     kind: "circle",
//     radius: number,
// };
// interface Square {
//     kind: "square",
//     sideLength: number,
// };
// type Shape = Circle | Square;
// function calculateArea(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2;
//     } else {
//         return shape.sideLength ** 2;
//     };
// };
// let myCircle: Circle = { kind: "circle", radius: 2 };
// let mySquare: Square = { kind: "square", sideLength: 4 };
// console.log(calculateArea(myCircle));
// console.log(calculateArea(mySquare));
// Second Example
// let userInput: string | number;
// userInput = "hello";
// if (typeof userInput === "string") {
//     let length = userInput.length;
//     console.log(length);
// } else {
//     let squared = userInput ** 2;
//     console.log(squared);
// };
// Ternary Operator
// First Example
// let isEven: boolean = true;
// let message: string
// message = isEven ? "Number is Even" : "Number is Odd"; 
// console.log(message);
// Second Example
// function formatValue(value: string | number) {
//     return typeof value === "string" ? value.toUpperCase() : value.toFixed(2);
// }
// let stringValue = formatValue("hello");
// let numberValue = formatValue(3.874868);
// console.log(stringValue);
// console.log(numberValue);
// Literal Type 
// First Example
// type Direction = "Left" | "Right" | "Up" | "Down";
// function move(direction: Direction) {
//     console.log(`Move to ${direction}`);
// };
// move("Right");
// move("Down");
// move("Up");
// Second Example
// type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
// function rollDice(roll: DiceRoll) {
//     console.log(`Rolled a ${roll}`);
// }
// rollDice(5);
// rollDice(3);
// rollDice(2);
// rollDice(9);

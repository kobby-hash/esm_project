import { passwordLength, greetings, Animal } from "./module/utils.js";
import THEPROCESS, { fishPie } from "./process.js";

//console.log(import.meta);

//console.log("directory: " + import.meta.dirname);
//console.log("filename: " + import.meta.filename);

console.log("password Length:" + passwordLength);
console.log(greetings("Godwin"));

//const colors = ["red", "green", "grey", "blue"];

//let first = colors[0]
//let third = colors[2]
console.log(fishPie);

//const [first, second, third, fourth] = colors;

//const [first, ...rest] = colors;
//console.log(first, third);
//console.log(rest);
//const user = { name: "Godwin", age: "idk", city: "Accra" };

//const { name, age, car = "Toyota" } = user;

//console.log(age, name, car)

async function LoadModule() {
  const module = await import("./module/utils.js");
  return module.greetings("Kobby");
}

const result = LoadModule();
console.log(result);
console.log("I am here too");

//we are trying to add something in the future

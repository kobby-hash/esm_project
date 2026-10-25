//export * from "./utils.js";
//export { default as TheProcess } from "../process.js";

//try {
//  milk = 500;
//} catch (error) {
//  console.log("something unexpected happened");
//
//}
//console.log("what are we eating to night");
//function LogInfo() {
//  console.log("How are you doing Kobby");
//}
//setInterval(LogInfo, 25);

let numberOfLog = 10;

const LogSomething = SetInterval(() => {
  console.log("I am Here ");
  ++numberOfLog;

  if (numberOfLog >= 15) {
    clearInterval(LogSomething);
    console.log("we are done");
  }
}, 1000);

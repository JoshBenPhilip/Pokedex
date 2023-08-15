// Autoshopper

let myName = "Josh";

let list = ["rice", "beans", "salad"];

let quantity = 1;

let otherList: ["hello", "my", "name", "is"];

myName = "Sir Drake";

interface GibberishTest {
  id: number;
  name?: string;
}

const myGibberishTest = (myArgs: GibberishTest): string => {
  if (myArgs.name) {
    return `Hello ${myArgs.name}`;
  }
};

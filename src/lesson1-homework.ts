/* eslint-disable @typescript-eslint/no-unused-vars */
// 1. Heloo World task
// TODO: creaate excercise1 folder
// TODO: check node version
// TODO: check npm version
// TODO: check npx version
// TODO: init npm project
// TODO: install typescript
// TODO: generate tsconfig.json
// TODO: create src/index.ts with this code
function excercise1() {
  let greeting: string;
  greeting = 'Hello World';
  greeting += '!!!';
  console.log(greeting);
}
excercise1();
// TODO: run typescript in watch mode
// TODO: compare with javascript generated by typescript

// 2. loop which prints string to console n times
function excercise2() {
  // declare two varaibles - one of string, one of type number
  const num: number = 3;
  const str: string = 'Hello';
  // assign string var value 'Hello'
  // assign number var value 3
  // create a while loop which prints string variable to console 3 times
  let i = 0;
  while (i < 3) {
    console.log(str);
    i++;
  }
  // try to assign number variable to string variable - observe the error
  //str = num //Error
}
excercise2();

// 3. code that generates array of numbers - from n to m
function excercise3() {
  // TODO: declare varaibles n and m of type number
  // TODO: assign n and m some values - n = 1, m = 10
  const n: number = 1;
  const m: number = 10;
  // TODO: declare varaible result of type array of numbers
  const arr: number[] = [];
  // TODO: create a for loop which adds numbers from n to m to result array
  for (let i = n; i <= m; i++) {
    arr.push(i);
  }
  console.log(arr);
  // TODO: support case where m > n (reverse the order)
  const reversedArr: number[] = [];
  for (let i = m; i >= n; i--) {
    reversedArr.push(i);
  }
  // TODO: support case where n > m (reverse the order)
  // TODO: print result array to console
  console.log(reversedArr);
}
excercise3();
// TODO: compile and run the code

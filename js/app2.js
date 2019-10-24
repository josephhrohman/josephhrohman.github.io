/* Need a funtion that creates a modulas of fractions

EX// input 30.625 "i"
report how many 1s
then report how many 1/2s from remainder "a"
then report how many 1/4s from remainder "b"
then report how many 1/8s from remained "c"
then report how many 1/16s from remained "d"
then eport how many 1/32s from remained "e"
then report how many 1/64s from remained "f"

*/


// let i = null;
let num = null;
let a = 1;
let b = 0.5;
let c = 0.25;
let d = 0.125;
let e = 0.0625;
let f = 0.3125;
let g = 0.015625;
let output = null;
let hold = null;

const valueList = [a, b, c, d, e, f, g];

// const modRunner = (i) => {
//   console.log(`starting value = ` + i);
//   hold = i%a;
//   output = (i-hold)/a;
//   console.log(`There are ${output} ${a}\'s in ${i}`);
//   i = hold;
//   hold = i%b;
//   output = (i-hold)/b;
//   console.log(`There are ${output} ${b}\'s in ${i}`);
//   i = hold;
//   hold = i%c;
//   output = (i-hold)/c;
//   console.log(`There are ${output} ${c}\'s in ${i}`);
//   i = hold;
//   hold = i%d;
//   output = (i-hold)/d;
//   console.log(`There are ${output} ${d}\'s in ${i}`);
//   i = hold;
//   hold = i%e;
//   output = (i-hold)/e;
//   console.log(`There are ${output} ${e}\'s in ${i}`);
//   i = hold;
//   hold = i%f;
//   output = (i-hold)/f;
//   console.log(`There are ${output} ${f}\'s in ${i}`);
//   i = hold;
//   hold = i%g;
//   output = (i-hold)/g;
//   console.log(`There are ${output} ${g}\'s in ${i}`);
// }

const modRunner2 = (num) => {
  hold = num%a;
  output = (num-hold)/a;
  console.log(`There are ${output} ${a}\'s in ${num}`);
  for (let i=1; i < valueList.length; i++) {
    num = hold;
    hold = num%valueList[i];
    output = (num-hold)/valueList[i];
    console.log(`There are ${output} ${valueList[i]}\'s in ${valueList[i]}`);
  };
}




// let x = function modRunner(num) {
// 	output.push(num);
//   	return output;
// // 	num (modulas) (pre-set value) = (hold);
// // 	(input) - (hold) = (hold2);
// // 	(hold2) / (pre-set value) = (tally);
// // 	(pre-set value).push(tally);
// }


// EX//

// 30.625(i) % 1 = 0.625(hold)
// 30.625(i) - 0.625(hold) = 30(a)

// 0.625(hold) % 0.5 = 0.125(hold)
// 0.625(hold) - 0.125(hold) = 0.5(b)

// 0.125(hold) % 0.0625 = 0(hold)
// 0.125(hold) - 0.0625 = 0.0625(hold)

// 0.0625(hold) % 0.03125 = 0(hold)
// 0 - 0.03125 = Problem, make a filter for negative numbers.
// > build in a comparison, if pret-set value is greater than remainder - move on to next pre-set value




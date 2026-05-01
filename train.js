// A Task
console.log("train task ishga tushdi");

/*  TAsk B 
B-TASK

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin. MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

@MITASK
*/
// function countDigits(string) {
// //   let count = 0;
// //   for ( let dbs of string) {
// //     if (dbs >= '0' && dbs <= '9'){
// //       count ++;
// //     }
// //   }
// //   return count;
// // }
// console.log(countDigits("absd23gsj5679"));

// function countDigits(str) {
//   let count = 0;
//   for (let dbs of str) {
//     if (dbs >= "0" && dbs <= "9") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("absd12hjs459"));

// function count1(string) {
//   let count2 = 0;
//   for (let abs of string) {
//     if (abs >= "0" && abs <= "9") {
//       count2++;
//     }
// //   }
// //   return count2;
// // }
// // console.log(count1("aabsd23gsj5679"));

// /* Task B tugadi */

// /* Task C start.
// C-TASK

// Shunday function tuzing, u 2ta string parametr ega bolsin,
//  hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
//   MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true.

// @MITASK */

function checkContent(xoji, boy) {
  return [...xoji].sort().join("") === [...boy].sort().join("");
}

console.log(checkContent("mitgroup", "gmtiprou"));
console.log("============");
function checkContent1(eshmat, teshmat) {
  return [...eshmat].sort().join("") === [...teshmat].sort().join("");
}
console.log(checkContent1("xojiakbar", "rabkaijox"));

console.log("============");
function checkContent(eshmat1, teshmat2) {
  return [...eshmat1].sort().join("") === [...teshmat2].sort().join("");
}
console.log(
  checkContent1("xojiakbar", "rabkaijoh"),
); /* Xulosa bu yerdagi 2 ta string ichidagi harflar teng buls amisol uchun 2 ta x, 2 a va hokaza bulsa true
chiqarakan moboda bittasi boshqacha bulib qolsa false chiqarakan */

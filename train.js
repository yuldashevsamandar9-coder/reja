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
/* D-TASK

Shunday class tuzing tuzing nomi Shop,
 va uni constructoriga 3 hil mahsulot pass bolsin, 
 hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
  Har bir method ishga tushgan vaqt ham log qilinsin.
   MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
   shop.sotish('non', 3) & shop.qabul('cola', 4) & 
   shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

    
  

@MITASK */
class Shop {
  constructor(lagmon, non, cola) {
    this.lagmon = lagmon;
    this.non = non;
    this.cola = cola;
  }

  qoldiq() {
    let xozir = new Date().toLocaleTimeString();
    return `xozir  ${xozir}da  ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor!`;
  }
  sotish(lagmon, non, cola) {
    let xozirgi = new Date().toLocaleTimeString();

    return `xozir ${xozirgi}da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola sotildi!`;
  }
  qabul() {
    let hozir = new Date().toLocaleTimeString();
    return `hozir ${hozir}da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola qushildi!`;
  }
}
const myshop = new Shop(10, 5, 10);
console.log(myshop.qoldiq());
const myShop = new Shop(3, 2, 4);
console.log(myShop.sotish());
const myshop3 = new Shop(2, 5, 4);
console.log(myshop3.qabul());

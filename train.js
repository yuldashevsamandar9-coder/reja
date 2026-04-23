// A Task
// console.log("train task ishga tushdi");
// // Callback function //

// console.log("Jack Ma maslahatlri");

// const list = [
//   " Yaxshi talaba boling", // 0-20
//   "Tugri boshliq tanlang va kuproq xato qiling", // 20 -30
//   "Uzingiz ishlashingizni boshlang", //30 - 40
//   "Siz kuchli bolgan narsalarni qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling, foydasi yug endi", //60
// ];

// function maslahatbering(a, callback) {
//   if (typeof a !== "number") callback("iltimos raqam yozing", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 4000);
//   }
// }
// maslahatbering(25, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// maslahatbering(55, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// maslahatbering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// console.log("passed here 0");

// maslahatbering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");

// const list = [
//   "apple", //  0 -20
//   "pomidor", //  20 -30
//   "gusht", //  30 -40
// ];
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= number) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
// }
// maslahatBering(20, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

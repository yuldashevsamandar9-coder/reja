// // A Task

// function greeting(a, b) {
//   let count = 0;
//   for (i = 0; i < b.length; i++) {
//     if (a === b[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// const task_1 = greeting("a", "samanadara");
// console.log(task_1);
// console.log("=============");
// function introduce(c, d) {
//   let count1 = 0;
//   for (i = 0; i < d.length; i++) {
//     if (c === d[i]) {
//       count1++;
//     }
//   }
//   return count1;
// }
// const task2 = introduce("e", "engenereningennge");
// console.log(task2);

/* Task tugadi     */
// // console.log("train task ishga tushdi");
// // // Callback function //

// // console.log("Jack Ma maslahatlri");

// // const list = [
// //   " Yaxshi talaba boling", // 0-20
// //   "Tugri boshliq tanlang va kuproq xato qiling", // 20 -30
// //   "Uzingiz ishlashingizni boshlang", //30 - 40
// //   "Siz kuchli bolgan narsalarni qiling", // 40-50
// //   "Yoshlarga investitsiya qiling", // 50-60
// //   "Endi dam oling, foydasi yug endi", //60
// // ];

// // function maslahatbering(a, callback) {
// //   if (typeof a !== "number") callback("iltimos raqam yozing", null);
// //   else if (a <= 20) callback(null, list[0]);
// //   else if (a > 20 && a <= 30) callback(null, list[1]);
// //   else if (a > 30 && a <= 40) callback(null, list[2]);
// //   else if (a > 40 && a <= 50) callback(null, list[3]);
// //   else if (a > 50 && a <= 60) callback(null, list[4]);
// //   else {
// //     setTimeout(function () {
// //       callback(null, list[5]);
// //     }, 4000);
// //   }
// // }
// // maslahatbering(25, (err, data) => {
// //   if (err) console.log("ERROR:", err);
// //   console.log("javob:", data);
// // });

// // maslahatbering(55, (err, data) => {
// //   if (err) console.log("ERROR:", err);
// //   console.log("javob:", data);
// // });

// // maslahatbering(70, (err, data) => {
// //   if (err) console.log("ERROR:", err);
// //   console.log("javob:", data);
// // });

// // console.log("passed here 0");

// // maslahatbering(65, (err, data) => {
// //   if (err) console.log("ERROR:", err);
// //   console.log("javob:", data);
// // });
// // console.log("passed here 1");

// // const list = [
// //   "apple", //  0 -20
// //   "pomidor", //  20 -30
// //   "gusht", //  30 -40
// // ];
// // function maslahatBering(a, callback) {
// //   if (typeof a !== "number") callback("Insert a number", null);
// //   else if (a <= number) callback(null, list[0]);
// //   else if (a > 20 && a <= 30) callback(null, list[1]);
// //   else if (a > 30 && a <= 40) callback(null, list[2]);
// // }
// // maslahatBering(20, (err, data) => {
// //   if (err) console.log("ERROR:", err);
// //   console.log("javob:", data);
// // });

// // Asynchronus function //

// const list = [
//   " Yaxshi talaba boling", // 0-20
//   "Tugri boshliq tanlang va kuproq xato qiling", // 20 -30
//   "Siz kuchli bolgan narsalarni qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling, foydasi yug endi", //60
// ];

// async function maslahatbering(a) {
//   if (typeof a !== "number") throw new Error("iltimos raqam yozing", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     return new Promise((resolve, reject) => {
//       //   setTimeout(() => {
//       setInterval(() => {
//         callback(null, list[5]);
//         // resolve(list[5]);
//       }, 4000);

//       // setTimeout(function () {
//       //   return list[5];
//       // }, 4000);
//     });
//   }
// }
// // // call via then /catch

// // console.log("passed here 0"); // birinchi ishga tushadi buning sababi
// // // sychronus functionlar ishga tushgandan keyin asychonus functionlarni uqirkan nodejs
// // maslahatbering(60)
// //   .then((data) => {
// //     console.log("javob:", data); // keyingi ishga tushuvchi
// //   })
// //   .catch((err) => {
// //     console.log("ERROR:", err);
// //   });

// // console.log("passed here 1"); // ikkinchi ishga tushadi

// async function run() {
//   let javob = await maslahatbering(60);
//   console.log(javob);
//   javob = await maslahatbering(31);
//   console.log(javob);
//   javob = await maslahatbering(41);
//   console.log(javob);
// }
// run();

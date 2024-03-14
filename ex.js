const carA = {
  name: "car A",
  size: { Object: 4 },
  line: { name: "luxury" },
};
const carB = JSON.parse(JSON.stringify(carA));
carB.name = "carB";
console.log(carA);
console.log(carB);
console.log("change value:");
carA.size.Object = 8;
carB.line.name = "normal";
console.log(carA);
console.log(carB);

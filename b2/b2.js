// In ra dòng chữ 'Hello world' mỗi giây, nhưng chỉ 5 lần. Sau 5 lần, in ra dòng chữ 'Done'.
const myInterval = setInterval(printf, 1000);
let i = 0;
function printf() {
  console.log("Hello world");
  i++;
  if (i >= 5) {
    clearInterval(myInterval);
    console.log("Done");
  }
}

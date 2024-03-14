// In ra dòng chữ 'Hello world' sau khoảng delay ko cố định. Bắt đầu sau delay 1 giây,
// sau đó mỗi lần tăng thời gian delay thêm 1 giây. Lần thứ 2 sẽ delay 2 giây, lần 3 delay 3s…
let i = 1;
function printf() {
  console.log("Hello world");
  i++;
  let setTime = i * 1000;
  setTimeout(printf, setTime);
}
printf();

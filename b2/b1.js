// In ra 2 dòng chữ sau sau một khoảng thời gian delay:
// In ra 'Hello after 4 seconds' sau 4 giây
// In ra 'Hello after 4 seconds' sau 8 giây
// Điều kiện: Bạn chỉ đc phép định nghĩa một function duy nhất, nghĩa là tất cả các lần gọi setTimeout chỉ đc dùng đúng function đấy thôi.
const printf = () => {
  setTimeout(() => {
    console.log("Hello after 4 seconds");
    setTimeout(() => {
      console.log("Hello after 4 seconds");
    }, 4000);
  }, 4000);
};
printf();

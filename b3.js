const prompt = require("prompt-sync")();
const maxProfit = function (prices) {
  if (!prices || prices.length < 2) console.log("0");
  let buy = prices[0];
  let maxProfit = 0;
  for (i = 1; i < +prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > maxProfit) {
      maxProfit = prices[i] - buy;
    }
  }
  console.log(maxProfit);
};
function main() {
  const pricesString = prompt("prices:");
  const prices = pricesString.split(",").map(Number);
  maxProfit(prices);
}
main();

let playerName: string = "Mario";
let currentLives: number = 3;

const level1: { coinValue: number } = { coinValue: 25 };
const level2: { coinValue: number } = { coinValue: 30 };
const level3: { coinValue: number } = { coinValue: 45 };

const coin : { [key: string]: { coinValue: number } } = {
  level1,
  level2,
  level3
};

let totalCoins: number = level1.coinValue + level2.coinValue + level3.coinValue;
let averageCoins: number = totalCoins / 3;
let surplusCoins: number = totalCoins % 3;

console.log(`Average coins per level is ${averageCoins.toFixed(0)} coins.`);
console.log(`Total surplus coins is ${surplusCoins} coins.`);
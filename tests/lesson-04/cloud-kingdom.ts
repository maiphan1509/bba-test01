let playerName: string = "Mario";
let currentLives: number = 3;

const coin : { [key: string]: { coinValue: number } } = {
    "level1": { coinValue: 25 },
    "level2": { coinValue: 30 },
    "level3": { coinValue: 45 }
};

let totalCoins: number = coin["level1"].coinValue + coin["level2"].coinValue + coin["level3"].coinValue;
let averageCoins: number = totalCoins / 3;
let surplusCoins: number = totalCoins % 3;

console.log(`Average coins per level is ${averageCoins.toFixed(0)} coins.`);
console.log(`Total surplus coins is ${surplusCoins} coins.`);
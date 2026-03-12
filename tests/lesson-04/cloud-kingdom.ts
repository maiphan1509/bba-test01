let powerUp : string = "Mushroom";
let effect : string;

if (powerUp === "Mushroom") {
    effect = "Mario becomes Super!";
}else if (powerUp === "Flower") {
    effect = "Mario can shoot fireballs!";
}else if (powerUp === "Star") {
    effect = "Mario is invincible!";
}else if (powerUp === "None") {
    effect = "Mario is normal.";
}else {
    effect = "Unknown power-up!";
}

console.log(effect);
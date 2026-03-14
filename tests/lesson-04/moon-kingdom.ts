//Bài 1 ------------------------------------------------------------------
console.log("Bài 1:");

interface Character {
  name: string;
  level: number;
  heath: number;
}

const character = (chars: Character[]) => {
  const characterPowerUp = chars.map((char) => {
    return {
      name: char.name.toUpperCase(),
      level: char.level * 2,
      heath: char.heath * 3,
    };
  });

  const possibleWinners = characterPowerUp.filter((char) => char.heath > 1000);

  return possibleWinners;
};

const chars: Character[] = [
  { name: "Mai", level: 1, heath: 100 },
  { name: "Sao", level: 10, heath: 200 },
  { name: "Linh", level: 100, heath: 450 },
  { name: "Hien", level: 1000, heath: 550 },
];

const characters = character(chars);
console.log(characters);

//Bài 2 ------------------------------------------------------------------
console.log("Bài 2:");

interface Player {
  name: string;
  core: number;
}

const printLeaderboard = (players: Player[]) => {
  const sortedPlayers = players.sort((a, b) => b.core - a.core);

  for (let i = 0; i < sortedPlayers.length; i++) {
    if (i === 0) {
      console.log(`🥇 ${i + 1}. ${sortedPlayers[i].name} - ${sortedPlayers[i].core} pts`);
    } else if (i === 1) {
      console.log(`🥈 ${i + 1}. ${sortedPlayers[i].name} - ${sortedPlayers[i].core} pts`);
    } else if (i === 2) {
      console.log(`🥉 ${i + 1}. ${sortedPlayers[i].name} - ${sortedPlayers[i].core} pts`);
    } else {
      console.log(`   ${i + 1}. ${sortedPlayers[i].name} - ${sortedPlayers[i].core} pts`);
    }
  }
};

const players: Player[] = [
  { name: "Mai", core: 1000 },
  { name: "Sao", core: 900 },
  { name: "Linh", core: 850 },
  { name: "Hien", core: 800 },
  { name: "Minh", core: 1050 },
];

const leaderboard = printLeaderboard(players);

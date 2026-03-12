//Bài 1 ------------------------------------------------------------------
console.log("Bài 1:");

interface Character {
  name: string;
  level: number;
  heath: number;
}

const createCharacter = (chars: Character[]) => {
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

const characters = createCharacter(chars);
console.log(characters);

//Bài 2 ------------------------------------------------------------------
console.log("Bài 2:");

interface Player {
  name: string;
  core: number;
}

const printLeaderboard = (players: Player[]) => {
  const sortedPlayers = players.sort((a, b) => b.core - a.core);

  const rank = sortedPlayers.map((player, index) => {
    const defaultRank = `${index + 1}. ${player.name} - ${player.core} pts`;
    switch (index) {
      case 0:
        return `🥇 ${defaultRank}`;
      case 1:
        return `🥈 ${defaultRank}`;
      case 2:
        return `🥉 ${defaultRank}`;
      default:
        return `   ${defaultRank}`;
    }
  });

  console.log(rank);
};

const players: Player[] = [
  { name: "Mai", core: 1000 },
  { name: "Sao", core: 900 },
  { name: "Linh", core: 850 },
  { name: "Hien", core: 800 },
  { name: "Minh", core: 1050 },
];

const leaderboard = printLeaderboard(players);

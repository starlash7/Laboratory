type Team = "red" | "blue" | "yellow";
type Health1 = 1 | 5 | 10;

interface Player2 {
  nickname: string;
  team: Team;
  health: Health1;
}

const pixy: Player2 = {
  nickname: "sungwoo",
  team: "red",
  health: 10,
};

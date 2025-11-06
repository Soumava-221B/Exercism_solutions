//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const header = "Team                           | MP |  W |  D |  L |  P";
  if (!input || !input.trim()) return header;

  const board = {};
  
  const initTeam = (team) => ({
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0
  });

  input.split('\n').forEach(match => {
    if (!match.trim()) return; 
    const [p1, p2, res] = match.split(';');

    if (!board[p1]) board[p1] = initTeam(p1);
    if (!board[p2]) board[p2] = initTeam(p2);

    board[p1].played++;
    board[p2].played++;

    switch(res) {
      case 'win':
        board[p1].wins++;
        board[p2].losses++;
        board[p1].points += 3;
        break;
      case 'loss':
        board[p1].losses++;
        board[p2].wins++;
        board[p2].points += 3;
        break;
      case 'draw':
        board[p1].draws++;
        board[p2].draws++;
        board[p1].points++;
        board[p2].points++;
        break;
    }
  });

  const sortedTable = Object.entries(board)
    .sort((a, b) => b[1].points - a[1].points || a[0].localeCompare(b[0]));

  const rows = sortedTable.map(([team, stats]) => {
    const pad = (str, len, left = false) => left ? str.toString().padStart(len) : str.toString().padEnd(len);
    return `${pad(team, 30)} | ${pad(stats.played, 2, true)} | ${pad(stats.wins, 2, true)} | ${pad(stats.draws, 2, true)} | ${pad(stats.losses, 2, true)} | ${pad(stats.points, 2, true)}`;
  });

  return [header, ...rows].join('\n');
}

let playerName = prompt("Welcome to mini golf! What is your name?");
let totalHoles = Number(
  prompt(`Hi ${playerName}! Would you like to play 3 or 6 holes?`)
);

let puttHole = 0;

if (totalHoles === 3 || 6) {
  console.log("works");
  for (let i = 1; i <= totalHoles; i++) {
    let putt = Number(prompt(`"How many putts for hole ${i}?(par 3)`));
    puttHole += putt;
  }
  par = totalHoles * 3;

  totalPar = puttHole - par;

  if (totalPar > 0) {
    alert(`Great job, ${playerName}! Your total par was: ${totalPar}`);
  } else if (totalPar === 0) {
    alert(`Good game, ${playerName}. Your total par was: 0`);
  } else if (totalPar < 0) {
    alert(`Nice try, ${playerName}... Your total par was: ${totalPar}`);
  }
}
console.log(`Users name: ${playerName} `);
console.log(`Total par: ${totalPar} `);

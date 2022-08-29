

/*
	Comparing the nash equilibrium strategy to a 'bad strategy'
	The game is a simple rock paper scisors

	The inputs to be changed is the badPlayer array :
	it represents the frequency of which choice (rock, paper, or scisor)

	Also the number of iterations on the loop


	Conclusion : No player seems to win on the long run.
	Nash player plays perfectly, although it doesn't take any advantage of the imbalance of the bad player (that deviates from the optimal strategy)
	and therefore doesn't win. Doesn'l lose, doesn't win...
*/


const nashPlayer = [0.33333333333, 0.33333333333, 0.33333333334];
const badPlayer = [0, 1, 0];

const possibilities = ["rock", "paper", "scisor"];

let nashScore = 0;
let badScore = 0;



function getRandom() 
{
  return Math.random();
}

function getAction(player) 
{
	const randomNumber = getRandom();
	if (randomNumber < player[0])
	{
		return 0;
	}

	else if (randomNumber < (player[0] + player[1]))
	{
		return 1;
	}

	else
	{
		return 2;
	}
}

for (let i=0; i<1e8; i++)
{
	// main loop

	// random choice of action for players
	const nashPlayerChoice = possibilities[getAction(nashPlayer)];
	const badPlayerChoice = possibilities[getAction(badPlayer)];

	// get winner
	if (nashPlayerChoice === badPlayerChoice)
		{
			// don't do anything
		}
	else {
		if (
			(nashPlayerChoice === "rock" && badPlayerChoice === "scisor") ||
			(nashPlayerChoice === "paper" && badPlayerChoice === "rock") ||
			(nashPlayerChoice === "scisor" && badPlayerChoice === "paper")
			)
		{
			nashScore ++;
		} else {
			badScore ++;
		}
	}

	
}

if (nashScore > badScore)
{
	console.log("Nash wins by ", (nashScore - badScore), " points");
} else {
	console.log("Bad player wins by ", (badScore - nashScore), " points");
}

console.log("Nash player score : ", nashScore);
console.log("Bad player score : ", badScore);
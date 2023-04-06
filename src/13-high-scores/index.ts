/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game,
 * one of the highest selling and addictive games of all time, and a classic of the arcade era. 
 * Your task is to write methods that return the highest score from the list,
 * the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest(): number {
    return this.scores[this.scores.length - 1];
  }

  get personalBest(): number {
    return Math.max(...this.scores);
  }

  get personalTopThree(): number[] {
    let bestThree = this.scores.slice()
    bestThree.sort((a, b) => b - a);
    bestThree = bestThree.slice(0, 3);
    return bestThree;
  }
}

export { HighScores };

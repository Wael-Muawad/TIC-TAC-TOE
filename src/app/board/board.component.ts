import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit{
  squares: Array<string> = [];
  isPlayerX: boolean = true;
  winner: string | null = null;

  ngOnInit(): void {
    this.newGame();
  }
  
  newGame(): void {
    this.squares = Array(9).fill(null);
    this.isPlayerX = true;
    this.winner = null;
  }

  getPlayer():string{
    return this.isPlayerX ? 'X' : 'O';
  }

  makeMove(boxId:number): void {
    debugger;
    if(this.squares[boxId] == null && this.winner == null)
    {
      //if (!this.squares[idx])
      //this.squares.splice(idx, 1, this.player);
      this.squares[boxId] = this.getPlayer();
      this.isPlayerX = !this.isPlayerX;
      this.winner = this.calculateWinner();
      //return player;
    } 
    //return 'z';
  }

  calculateWinner() : string | null  {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }
}

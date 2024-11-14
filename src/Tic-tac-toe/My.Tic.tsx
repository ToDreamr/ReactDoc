import './Tic.Tac.Toe.css'
import React, {Component, useState} from "react";
class Square extends Component<{ value: any ,onClick:any}> {
    //wrapped with a function called render
    render() {
        let {value,onClick} = this.props
        return <button className="square" onClick={onClick}>
            {value}
        </button>;
    }
}
export class Board extends Component<{squares:any,xIsNext:any,onPlay:any}>{

    render() {

        let {squares,xIsNext,onPlay} = this.props;
        function handleClick(i: number) {
            const nextSquares = squares.slice();
            if (predicateWinner(squares) || squares[i]) {
                return;
            }
            if (xIsNext) {
                nextSquares[i] = 'X';
            } else {
                nextSquares[i] = 'O';
            }
            onPlay(nextSquares);
        }
        const winner = predicateWinner(squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
        return <>
            <div style={{position:"fixed",justifyContent:"center",alignItems:"flex-end"}}>
                <div className="status">{status}</div>
                <div className="board-row">
                    <Square value={squares[0]} onClick={()=>{handleClick(0)}}/>
                    <Square value={squares[1]} onClick={()=>{handleClick(1)}}/>
                    <Square value={squares[2]} onClick={()=>{handleClick(2)}}/>
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onClick={()=>{handleClick(3)}}/>
                    <Square value={squares[4]} onClick={()=>{handleClick(4)}}/>
                    <Square value={squares[5]} onClick={()=>{handleClick(5)}}/>
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onClick={()=>{handleClick(6)}}/>
                    <Square value={squares[7]} onClick={()=>{handleClick(7)}}/>
                    <Square value={squares[8]} onClick={()=>{handleClick(8)}}/>
                </div>
            </div>
        </>
    }
}

export function TicGame(i:any){
    const [squares, setSquares] = useState([Array(i).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = squares[currentMove];

    function  HandlePlay(nextSquares:any){
        const nextHistory = [...squares.slice(0,currentMove+1), nextSquares];
        setSquares(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    return (
        <div className="App">
            <Board squares={currentSquares} xIsNext={xIsNext} onPlay={HandlePlay}/>
        </div>
    );
}

export function predicateWinner(squares:any[]){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
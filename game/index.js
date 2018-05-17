import { Map } from "immutable";

//Type
const MOVE = "MOVE";

//Action Creator
export const move = (turn, coordinates) => {
  return {
    type: MOVE,
    turn,
    coordinates
  };
};

let board = Map();


function winner(board) {
we
  console.log("LOOKKKKKK", board)
}

export default function gameReducer(state = { board, turn: "X" }, action) {
  switch (action.type) {
    case MOVE:
      const newBoard = state.board.setIn(action.coordinates, action.turn);
      //how to switch player
      if(state.turn === action.turn) {
        if(state.turn === 'X') {
          action.turn = 'O'
        } else if(state.turn === 'O'){
          action.turn = 'X'
        }
      } else {
        action.turn 
      }
      return { turn: action.turn, board: newBoard, winner: winner(newBoard) };
    default:
      return state;
  }
}

const ongoing = Map()
  .setIn([0, 0], 'X')
  .setIn([1, 0], 'O')
  .setIn([0, 1], 'X')
  .setIn([1, 1], 'O')

const xWins = ongoing
  .setIn([0, 2], 'X')

const oWins = ongoing
  .setIn([0, 0], 'O')
  .setIn([1, 1], 'O')
  .setIn([2, 2], 'O')

console.log('null?', winner(ongoing))
console.log('X?', winner(xWins))
console.log('O?', winner(oWins))
import { Map } from "immutable";
import { createStore } from "redux";

let board = Map();

//Type
const MOVE = "MOVE";

//Action Creator
const move = (turn, coordinates) => {
  board = board.setIn(coordinates, turn);
  return {
    type: MOVE,
    player: turn,
    board: board
  };
};

export default function gameReducer(state = { board, turn: "_" }, action) {
  switch (action.type) {
    case MOVE:
      return { turn: action.player, board: action.board };
    default:
      return state;
  }
}

//Creating the store, which is the state
// const game = createStore(reducer);

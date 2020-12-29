import shortid from 'shortid';

export const getCardsForColumn = ({cards, searchString}, columnId) =>
  cards.filter((card) => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));
  
const reducerName = 'cards';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

export const createActionAddCard = (payload) => ({
  payload: {...payload, id: shortid.generate()},
  type: ADD_CARD,
});

export const createActionMoveCard = (payload) => ({
  payload: {...payload},
  type: MOVE_CARD,
});

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case MOVE_CARD: {
      const {id, src, dest} = action.payload;
      console.log(id, src, dest);
      return state;
    }
    default:
      return state;
  }
}
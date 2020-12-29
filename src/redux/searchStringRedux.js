import shortid from 'shortid';

export const getSearchString = (state) => state.searchString;

export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards = ({cards, searchString}) => 
  cards.filter((card) => new RegExp(searchString, 'i').test(card.title)).length;

// alternatywna metoda bez uzycia specjalnych bibliotek.

// export function countVisibleCards({cards, searchString}) {
//   const array = [];
//   for(let card of cards) {
//     if(card.title.includes(searchString)) {
//       array.push(card);
//     }
//   }
//   return array.length;
// }

const reducerName = 'searchString';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const SEARCH_CARD = createActionName('SEARCH_CARD');

export const createActionSearchCard = (payload) => ({
  payload: payload, 
  id: shortid.generate(),
  type: SEARCH_CARD,
});

// reducer
export default function reducer(statePart = '', action = '') {
  switch (action.type) {
    case SEARCH_CARD:
      return action.payload;
    default:
      return statePart;
  }
}

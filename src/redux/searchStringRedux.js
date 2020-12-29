import shortid from 'shortid';

export const getSearchString = (state) => state.searchString;

export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards = ({cards, searchString}) => 
  cards.filter((card) => new RegExp(searchString, 'i').test(card.title)).length;

// export function countVisibleCards({cards, searchString}) {
//   const array = [];
//   for(let card of cards) {
//     if(card.title.includes(searchString)) {
//       array.push(card);
//     }
//   }
// }

// reducer
export default function reducer(statePart = '') {
  return statePart;
}

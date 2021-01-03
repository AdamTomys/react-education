import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSearchResults, createActionMoveCard} from '../../redux/cardsRedux';
import {createActionSearchCard} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.string;
  
  return {
    string: searchString,
    lists: state.lists,
    columns: state.columns,
    cards: getSearchResults(state, searchString),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createActionSearchCard(newSearchString)),
  moveCard: (payload) => dispatch(createActionMoveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
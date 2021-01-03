import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';
import {createActionMoveCard} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredList = state.lists.filter(list => list.id == id);
  const listParams = filteredList[0] || {};
  
  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
  moveCard: (payload) => dispatch(createActionMoveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
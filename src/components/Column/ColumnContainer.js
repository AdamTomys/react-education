import {connect} from 'react-redux';
import Column from './Column';

export const getCartsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCartsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);
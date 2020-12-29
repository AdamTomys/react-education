import {connect} from 'react-redux';
import App from './App';
import {createActionAddList} from '../../redux/listsRedux';
import {createActionMoveCard} from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  addList: title => dispatch(createActionAddList(
    {
      image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
      title, 
    },
  )),
  moveCard: (payload) => dispatch(createActionMoveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
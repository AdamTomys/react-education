import {connect} from 'react-redux';
import App from './App';
import {createActionAddList} from '../../redux/listsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList(
    {
      image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
      title, 
    },
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
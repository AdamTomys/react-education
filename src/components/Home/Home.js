import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
import {DragDropContext} from 'react-beautiful-dnd';

class Home extends React.Component {
  
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
    moveCard: PropTypes.func,
  }
  
moveCardHandler = result => {
  const {moveCard} = this.props;
  if(result.destination &&
    (result.destination.index != result.source.index ||
      result.destination.droppableId != result.source.droppableId)){
    moveCard({
      id: result.draggableId,
      dest: {
        index: result.destination.index,
        columnId: result.destination.droppableId,
      },
      src: {
        index: result.source.index,
        columnId: result.source.droppableId,
      },
    });
  }
};
  
render() {
  const {title, subtitle, lists, addList} = this.props;
  return (
    <main className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <Search />
      <Creator text='Add new list' action={addList} />
      <DragDropContext onDragEnd={this.moveCardHandler}>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </DragDropContext>
    </main>
  );
}
}

export default Home;

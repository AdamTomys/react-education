import React from 'react';
import styles from '../Column/Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import {Droppable, DragDropContext} from 'react-beautiful-dnd';
import shortid from 'shortid';

class SearchResults extends React.Component {
  
  static propTypes = {
    //propsy przekazane przez Router z komponentu Search
    string: PropTypes.string,
    //stany z magazynu
    cards: PropTypes.array,
    lists: PropTypes.array,
    columns: PropTypes.array,
    moveCard: PropTypes.func,
    changeSearchString: PropTypes.func,
  };
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  
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
    const {cards, string, lists, columns, changeSearchString} = this.props;
    return(
      <DragDropContext onDragEnd={this.moveCardHandler}>
        <section className={styles.component}>
          <h3 className={styles.title}>
            {<span className={styles.icon}>
              <Icon name={SearchResults.defaultProps.icon} />
            </span>}
            {'Search results for: ' + string}
          </h3>
          <Droppable droppableId={cards.id}>
            {provided => (
              <div className={styles.cards} {...provided.droppableProps} ref={provided.innerRef}>
                {cards.map(cardsData => {
                  const column = columns.filter(column => column.id == cardsData.columnId);
                  const list = lists.filter(list => list.id == column[0].listId);
                  changeSearchString(string);
                  return(
                    <div key={shortid.generate()}>
                      <p>{list[0].title + ' -> ' + column[0].title}</p>
                      <Card key={cardsData.id} {...cardsData} />
                    </div>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </section>
      </DragDropContext>
    );
  }
}

export default SearchResults;
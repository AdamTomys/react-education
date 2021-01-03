import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';
import {DragDropContext} from 'react-beautiful-dnd';

class List extends React.Component {
  
  static propTypes = {
    //propsy przekazane przez App
    description: PropTypes.node,
    title: PropTypes.node,
    image: PropTypes.node,
    //stany z magazynu
    columns: PropTypes.array,
    addColumn: PropTypes.func,
    moveCard: PropTypes.func,
  };
  
  static defaultProps ={
    description: settings.defaultListDescription,
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
    const {description, title, image, columns, addColumn} = this.props;
    return (
      <DragDropContext onDragEnd={this.moveCardHandler}>
        <section className={styles.component}>
          <Container>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
            <div className={styles.creator}>
              <Creator
                text={settings.columnCreatorText}
                action={addColumn}
              />
            </div>
          </Container>
        </section>
      </DragDropContext>
    );
  }
}

export default List;
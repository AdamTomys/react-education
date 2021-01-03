import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';

const Card = ({id, title, index} = this.props) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div className={styles.component} {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}>
        {title}
      </div>
    )}
  </Draggable>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;
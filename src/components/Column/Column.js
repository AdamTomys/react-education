import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import {Droppable} from 'react-beautiful-dnd';

const Column = ({ id, title, icon, cards, addCard } = this.props) => (
  <section className={styles.component}>
    <h3 className={styles.title}>
      {<span className={styles.icon}>
        <Icon name={icon} />
      </span>}
      {title}
    </h3>
    <Droppable droppableId={id}>
      {provided => (
        <div className={styles.cards} {...provided.droppableProps} ref={provided.innerRef}>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    <div>
      <Creator text={settings.cardCreatorText} action={addCard} />
    </div>
  </section>
);

Column.propTypes = {
  //propsy przekazane przez komponent List
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  //stany z magazynu
  cards: PropTypes.array,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
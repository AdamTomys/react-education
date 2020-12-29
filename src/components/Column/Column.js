import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  
  static propTypes = {
    //propsy przekazane przez komponent List
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    //stany z magazynu
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const {icon, title, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {<span className={styles.icon}>
            <Icon name={icon} />
          </span>}
          {title}
        </h3>
        {cards.map(cardsData => (
          <Card key={cardsData.id} {...cardsData} />
        ))}
        <div>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
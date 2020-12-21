import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
  }
  
  render() {
    const {icon, title, cards} = this.props;
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
        {/* <div>
          <Creator text={settings.cardCreatorText} action={title => this.addColumn(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;
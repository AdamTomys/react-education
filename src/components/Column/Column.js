import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  state = { 
    cards: this.props.cards || [],
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
  }
  
  addColumn(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title
          }
        ]
      }
    ));
  }
  
  render() {
    console.log(this.state)
    return (
      <section className={styles.component}>
      <h3 className={styles.title}>
      {<span className={styles.icon}>
          <Icon name={this.props.icon} />
        </span>}
        {this.props.title}
      </h3>
      {this.state.cards.map(({key, ...cards}) => (
            <Card key={key} {...cards} />
          ))}
          <div>
          <Creator text={settings.cardCreatorText} action={title => this.addColumn(title)} />
        </div>
      </section>
    );
  }
}

export default Column;
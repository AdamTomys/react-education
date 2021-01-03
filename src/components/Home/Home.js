import React from 'react';
import styles from './Home.scss';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink';

class Home extends React.Component {
  
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
    moveCard: PropTypes.func,
  }
  
  render() {
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Creator text='Add new list' action={addList} />
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;

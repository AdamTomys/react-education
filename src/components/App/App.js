import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';

class App extends React.Component {
  
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  
  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description: 'Interesting things I want to check out!',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: [],
          },
        ],
      }
    ));
  }
  
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Creator text='Add new list' action={title => this.addList(title)} />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;

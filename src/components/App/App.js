import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import Creator from '../Creator/Creator';
import Menu from '../Menu/Menu';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  state = {
    lists: [
      listData
    ]
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
          columns: []
        }
      ]
    }
    ));
  }
  
  render() {
    console.log('actual state', this.state.lists)
    return (
      <main className={styles.component}>
        <Menu data={this.state} />
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <Creator text='Add new list' action={title => this.addList(title)} />
        {this.state.lists.map(({key, ...listArray}) => (
          <List key={key} {...listArray} />
        ))}
      </main>
    );
  }
}

export default App;

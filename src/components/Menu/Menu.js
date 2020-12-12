import React from 'react';
import styles from './Menu.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Menu extends React.Component {
  
  static propTypes = {
    icon: PropTypes.node.isRequired,
    lists: PropTypes.array,
  }
  
  static defaultProps = {
    icon: '<i class="fas fa-bars"></i>'
  }
  
  render() {
    let listArray = [];
    let columnArray = [];
    for (const list of this.props.data.lists) {
      listArray.push(list);
      for (const column of list.columns) {
        columnArray.push(column);
      }
    }
    console.log('menu state', this.props.data.lists);
    return (
      <section className={styles.nav}>
        <div className={styles.navIcon}>{ReactHtmlParser(this.props.icon)}</div>
        <ul>
        {listArray.map(({key, ...eachList}) => (
          <li key={key} className={styles.link}>{eachList.title}</li>
            ))}
        {columnArray.map(({key, ...eachColumn}) => (
          <li key={key} className={styles.link}>{eachColumn.title}</li>
        ))}
        </ul>
      </section>
    )
  }
  
}

export default Menu;
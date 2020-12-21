import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator';

class List extends React.Component {

  static propTypes = {
    description: PropTypes.node,
    title: PropTypes.node,
    image: PropTypes.node,
    columns: PropTypes.array,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const {columns, description, image, title} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/* <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={(title) => this.addColumn(title)}
          />
        </div> */}
      </section>
    );
  }
}

export default List;

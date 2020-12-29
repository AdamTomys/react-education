import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

const List = ({description, title, image, columns, addColumn} = this.props) => (
  <section className={styles.component}>
    <Hero titleText={title} image={image} />
    <div className={styles.description}>
      {ReactHtmlParser(description)}
    </div>
    <div className={styles.columns}>
      {columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))}
    </div>
    <div className={styles.creator}>
      <Creator
        text={settings.columnCreatorText}
        action={addColumn}
      />
    </div>
  </section>
);

List.propTypes = {
  //propsy przekazane przez App
  description: PropTypes.node,
  title: PropTypes.node,
  image: PropTypes.node,
  //stany z magazynu
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps ={
  description: settings.defaultListDescription,
};

export default List;
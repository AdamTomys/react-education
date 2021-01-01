import React from 'react';
import Container from '../Container/Container';
import {subpageContents} from '../../data/dataStore';
import PropTypes from 'prop-types';

const Info = ({title, content} = this.defaultProps) => (
  <Container>
    <h2>{title}</h2>
    <p>{content}</p>
  </Container>
);

Info.defaultProps = {
  title: subpageContents.info.title,
  content: subpageContents.info.content,
};

Info.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Info;
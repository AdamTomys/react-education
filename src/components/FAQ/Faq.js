import React from 'react';
import Container from '../Container/Container';
import {subpageContents} from '../../data/dataStore';
import PropTypes from 'prop-types';

const Faq = ({title, content} = this.defaultProps) => (
  <Container>
    <h2>{title}</h2>
    <p>{content}</p>
  </Container>
);

Faq.defaultProps = {
  title: subpageContents.faq.title,
  content: subpageContents.faq.content,
};

Faq.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Faq;
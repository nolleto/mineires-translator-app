import './index.css';

import PropTypes from 'prop-types';
import React from 'react';
import TranslatedLinesItem from '../TranslatedLinesItem';

const TranslatedLines = ({ lines }) => {
  const notEmpty = string => string.trim() !== '';
  const toTranslatedLinesItem = text => (
    <TranslatedLinesItem
      key={text}
      text={text}
    />
  );

  return (
    <div className='translated-lines'>
      {lines.filter(notEmpty).map(toTranslatedLinesItem)}
    </div>
  );
};

TranslatedLines.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string)
};

export default TranslatedLines;

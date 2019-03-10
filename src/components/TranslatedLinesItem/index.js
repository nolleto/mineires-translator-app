import './index.css';

import PropTypes from 'prop-types';
import React from 'react';
import capitalize from 'capitalize';
import toMineires from '../../mineires';

const TranslatedLinesItem = ({ text }) => (
  <p className='translated-lines-item'>
    {capitalize(toMineires(text))}
  </p>
);

TranslatedLinesItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default TranslatedLinesItem;

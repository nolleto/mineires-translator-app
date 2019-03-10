import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

const InputText = ({ text, setText }) => {
  return (
    <div className='input-text'>
      <span className='input-text__span'>
        Texto em Português
      </span>

      <textarea
        className='input-text__textarea'
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
    </div>
  )
};

InputText.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func.isRequired
};

export default InputText;

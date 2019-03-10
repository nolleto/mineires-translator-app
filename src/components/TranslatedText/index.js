import './index.css';

import React from 'react';
import TranslatedLines from '../TranslatedLines';

const TranslatedText = ({ text }) => {
  return (
    <div className='translated-text'>
      <span className='translated-text__span'>
        Texto em Mineirês
      </span>

      <TranslatedLines
        lines={text.split('\n')}
      />
    </div>
  )
}

export default TranslatedText

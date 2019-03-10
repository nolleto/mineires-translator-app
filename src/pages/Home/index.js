import './index.css';

import React, { useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import TranslatedText from '../../components/TranslatedText';

const App = () =>  {
  const [text, setText] = useState('Quanto está o litro de leite?\nQue horas são?');

  return (
    <div className='home'>
      <Header />

      <div className='home__content'>
        <InputText text={text} setText={setText} />
        <TranslatedText text={text} />
      </div>

      <Footer />
    </div>
  );
}

export default App;

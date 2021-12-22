import React, { useState, useEffect, Fragment } from "react";
import Dropdown from './Dropdown';
import axios from 'axios';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Dutch',
    value: 'nl'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      });
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);

  return (
    <Fragment>
      <div className="ui form mb-4">
        Convert
      </div>
    </Fragment>
  );
};

export default Convert;

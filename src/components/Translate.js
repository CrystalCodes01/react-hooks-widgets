import React, { useState, useEffect, Fragment } from "react";
import Dropdown from './Dropdown';
import Convert from './Convert';

// API KEY = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

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

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <Fragment>
      <div className="ui form mb-4">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select your language:"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </Fragment>
  );
};

export default Translate;

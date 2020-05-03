import React, { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';


function App() {
  const [validForm, setValidForm] = useState(false);

  function childValue(params) {
    if (!params) {
      setValidForm(true)
    }

  }
  return (
    <div className="App">
      {validForm ?
        <p>sldkjfhsdkjfhsdkj</p>
        :
        <FormInput childValue={childValue} />
      }

    </div>
  );
}

export default App;

import React from 'react';
import Alert from './components/Alert';
import Form from './components/Form';
import './scss/style.scss';


const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <Form/>
      <Alert/>
    </div>
  );
}

export default App;
